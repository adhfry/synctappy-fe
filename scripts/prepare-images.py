"""
Copies the original Synctappy assets into public/images/synctappy and
generates optimized responsive WebP variants.

Run from project root:  python scripts/prepare-images.py
Requires Pillow (pip install pillow). Originals are never modified.
"""
from pathlib import Path
import shutil

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "synctappy"
OUT.mkdir(parents=True, exist_ok=True)

ASSETS = {
    # source file in project root -> (slug, widths)
    "hero_banner_synctappy.png": ("hero-banner", [640, 960, 1280, 1672]),
    # synctappy_tapconnectgrow.png is used directly as public/images/synctappy/tap-connect-grow.png (user decision)
}

for src_name, (slug, widths) in ASSETS.items():
    src = ROOT / src_name
    shutil.copy2(src, OUT / f"{slug}.png")  # keep untouched original
    im = Image.open(src).convert("RGB")
    for w in widths:
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(OUT / f"{slug}-{w}.webp", "WEBP", quality=82, method=6)
    print(slug, im.size)

# Open Graph images are rendered by scripts/render-og.mjs (og-en.jpg / og-id.jpg)
print("done")
