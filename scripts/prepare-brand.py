"""
Builds web-optimized logo files from the official Synvora-supplied logos in
public/brand/ (the originals are never modified).

Run from project root:  python scripts/prepare-brand.py   (needs Pillow)

Sources (official, provided by the brand owner):
  Logo-Synctappy-light-nobg.png  lockup, dark text  -> for LIGHT backgrounds
  Logo-Synctappy-dark-nobg.png   lockup, white text -> for DARK backgrounds
  Logo-S-nobg.png                S mark, transparent
  Logo-S-whitebg.png             S mark on white (app icon / touch icon)

Outputs in public/brand/web/ + favicons in public/.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BRAND = ROOT / "public" / "brand"
WEB = BRAND / "web"
WEB.mkdir(exist_ok=True)


def trimmed(name: str) -> Image.Image:
    im = Image.open(BRAND / name).convert("RGBA")
    return im.crop(im.getchannel("A").getbbox())


def save(im: Image.Image, stem: str, width: int) -> None:
    h = round(im.height * width / im.width)
    out = im.resize((width, h), Image.LANCZOS)
    out.save(WEB / f"{stem}.png", optimize=True)
    out.save(WEB / f"{stem}.webp", "WEBP", quality=90, method=6)
    print(f"{stem}: {width}x{h}")


# Lockups: 640w covers a ~48px-tall navbar logo at 3x density
light = trimmed("Logo-Synctappy-light-nobg.png")
dark = trimmed("Logo-Synctappy-dark-nobg.png")
save(light, "logo-light", 640)
save(dark, "logo-dark", 640)

# Mark: square canvas so it centers predictably in UI
mark = trimmed("Logo-S-nobg.png")
side = max(mark.size)
sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
sq.paste(mark, ((side - mark.width) // 2, (side - mark.height) // 2), mark)
save(sq, "mark", 256)
save(sq, "mark-512", 512)

# Favicons
pub = ROOT / "public"
sq.resize((512, 512), Image.LANCZOS).save(pub / "favicon-512.png", optimize=True)
sq.resize((192, 192), Image.LANCZOS).save(pub / "favicon-192.png", optimize=True)
sq.resize((32, 32), Image.LANCZOS).save(pub / "favicon-32.png", optimize=True)
sq.save(pub / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
Image.open(BRAND / "Logo-S-whitebg.png").convert("RGB").resize((180, 180), Image.LANCZOS).save(
    pub / "apple-touch-icon.png", optimize=True
)
print("favicons done")
