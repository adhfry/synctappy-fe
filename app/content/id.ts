import type { LandingContent } from '~/types/content'

/**
 * Konten landing berbahasa Indonesia. Struktur wajib sama dengan
 * content/en.ts (dipaksa oleh tipe LandingContent).
 * Nama fitur (Multi-Link, Smart Profile, Dynamic Link, dst.) sengaja
 * dipertahankan sebagai istilah produk.
 */
export const id: LandingContent = {
  meta: {
    title: 'Synctappy | Platform Smart Touchpoint',
    description: 'Synctappy mengubah setiap tap NFC dan scan QR menjadi pengalaman digital lewat Google Review, profil multi-link, dynamic link, campaign, dan analytics.',
    ogLocale: 'id_ID',
    imageAlt: 'Synctappy by Synvora: stand akrilik NFC/QR KopiKu di samping ponsel yang menampilkan smart profile, dengan judul “Ubah Setiap Sentuhan Menjadi Pengalaman Digital.”',
    features: [
      'Touchpoint NFC dan QR (stand, kartu, tag)',
      'Pintasan Google Review',
      'Smart profile multi-link',
      'Dynamic link: ganti tujuan tanpa cetak ulang',
      'Campaign dan promo',
      'Analytics tap, scan, dan klik per touchpoint',
    ],
  },
  common: { startTrial: 'Coba Gratis', talkToSynvora: 'Hubungi Synvora', signIn: 'Masuk', skipToContent: 'Lewati ke konten' },
  language: { label: 'Bahasa', names: { en: 'English', id: 'Bahasa Indonesia' } },
  nav: {
    links: [
      { label: 'Produk', href: '#solution' },
      { label: 'Solusi', href: '#use-cases' },
      { label: 'Cara Kerja', href: '#how-it-works' },
      { label: 'Harga', href: '#pricing' },
    ],
    main: 'Utama',
    backToTop: 'Synctappy, kembali ke atas',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },
  destinations: [
    { id: 'review', label: 'Google Review', icon: 'star', brand: 'google', tone: 'blue' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'message', brand: 'whatsapp', tone: 'green' },
    { id: 'website', label: 'Website', icon: 'globe', tone: 'slate' },
    { id: 'menu', label: 'Menu Digital', icon: 'utensils', tone: 'amber' },
    { id: 'instagram', label: 'Instagram', icon: 'sparkles', brand: 'instagram', tone: 'pink' },
    { id: 'location', label: 'Lokasi', icon: 'map-pin', tone: 'red' },
    { id: 'booking', label: 'Reservasi', icon: 'calendar-check', tone: 'violet' },
    { id: 'product', label: 'Katalog Produk', icon: 'shopping-bag', tone: 'cyan' },
    { id: 'contact', label: 'Kontak', icon: 'phone', tone: 'slate' },
  ],
  profileScreen: {
    demoProfile: 'Coffee & Eatery · Profil demo',
    shareOnGoogle: 'Bagikan pengalaman Anda di Google',
    thisWeek: 'Minggu ini',
    featured: 'Menu favorit pilihan',
    poweredBy: 'Powered by Synctappy',
  },
  cardMockup: { tapToConnect: 'Tap untuk terhubung' },

  hero: {
    eyebrow: 'Platform Smart Touchpoint',
    titleLead: 'Ubah Setiap Sentuhan Menjadi',
    titleHighlight: 'Pengalaman Digital.',
    subtitle: 'Hubungkan pelanggan ke review, link, profil, promo, dan banyak lagi, cukup dengan satu tap atau scan.',
    ctaPrimary: 'Coba Synctappy Gratis',
    ctaSecondary: 'Lihat Cara Kerja',
    highlights: [
      { icon: 'nfc', title: 'Tap & Scan', description: 'NFC + QR Code' },
      { icon: 'link', title: 'Multi-Link', description: 'Semua kanal di satu tempat' },
      { icon: 'chart', title: 'Analytics', description: 'Pantau setiap interaksi' },
      { icon: 'gift', title: 'Campaign', description: 'Promo & event' },
    ],
    imageAlt: 'Stand akrilik Synctappy untuk KopiKu Coffee & Eatery di meja kafe dengan QR Google Review dan area tap NFC, sementara pelanggan memindainya dengan smartphone.',
    tapTitle: 'Tap dengan NFC',
    tapSubtitle: 'atau scan QR Code',
    reviewCallout: 'Membuka halaman review Google',
  },

  problem: {
    eyebrow: 'Masalahnya',
    title: 'Pelanggan Anda sebenarnya ingin terhubung.',
    highlight: 'Permudah jalannya.',
    description: 'Sebagian besar pelanggan senang memberi review, mengikuti, atau kembali lagi. Yang menghalangi mereka adalah hambatan. Yang menghalangi Anda adalah tidak tahu di mana mereka berhenti.',
    items: [
      'Pelanggan malas mengetik link panjang atau mencari halaman Anda',
      'Pelanggan puas pulang tanpa pernah menemukan halaman review Anda',
      'QR Code biasa terasa seperti tugas, bukan pengalaman',
      'Menu, WhatsApp, Maps, dan media sosial tersebar di banyak tempat',
      'Link yang sudah dicetak langsung usang begitu ada perubahan',
      'Anda tidak tahu touchpoint mana yang benar-benar mendatangkan interaksi',
    ],
    cardLead: 'Synctappy adalah',
    cardHighlight: 'jalan pintasnya.',
    cardBody: 'Satu tap mengubah setiap touchpoint fisik menjadi perjalanan digital yang terukur.',
    cardCta: 'Lihat solusinya',
  },

  solution: {
    eyebrow: 'Solusinya',
    title: 'Satu Touchpoint.',
    highlight: 'Banyak Kemungkinan.',
    description: 'Synctappy menghubungkan touchpoint fisik dengan pengalaman digital yang Anda kendalikan, lalu mengubah setiap interaksi menjadi aksi yang bisa diukur.',
    touchpoint: 'Touchpoint Anda',
    tapScan: 'Tap / Scan',
    takeAction: 'Ambil aksi',
    phoneLabel: 'Smart profile terbuka setelah tap',
    flow: [
      { label: 'Fisik', title: 'Touchpoint', text: 'Stand, kartu, atau tag dengan NFC + QR' },
      { label: 'Tap / Scan', title: 'Langsung terbuka', text: 'Tanpa aplikasi, langsung di browser' },
      { label: 'Digital', title: 'Pengalaman', text: 'Profil, link, promo, review' },
      { label: 'Hasil', title: 'Aksi', text: 'Pelanggan melakukan hal yang penting bagi Anda' },
    ],
  },

  how: {
    eyebrow: 'Cara kerja',
    title: 'Sederhana untuk pelanggan.',
    highlight: 'Bertenaga untuk Anda.',
    description: 'Dari satu tap fisik menjadi hasil yang terukur dalam empat langkah. Pelanggan tidak perlu memasang aplikasi.',
    steps: [
      { number: '01', icon: 'nfc', title: 'Tap / Scan', description: 'Pelanggan menempelkan ponsel ke chip NFC atau memindai QR Code. Tanpa aplikasi.' },
      { number: '02', icon: 'smartphone', title: 'Terhubung', description: 'Synctappy langsung membuka tujuan atau smart profile Anda di browser.' },
      { number: '03', icon: 'click', title: 'Ambil Aksi', description: 'Mereka memberi review, membuka menu, chat WhatsApp, reservasi, atau mengikuti Anda.' },
      { number: '04', icon: 'chart', title: 'Analisis', description: 'Setiap tap, scan, dan klik tercatat di dashboard, per touchpoint.' },
    ],
  },

  review: {
    eyebrow: 'Google Review',
    title: 'Ubah Pelanggan Puas Menjadi',
    highlight: 'Review Berikutnya.',
    description: 'Momen paling bahagia pelanggan biasanya terjadi di meja kasir Anda. Synctappy menghadirkan halaman review Google hanya satu tap, tepat di saat itu.',
    points: [
      'Langsung membuka halaman review Google Anda, tanpa mencari dan mengetik',
      'Bekerja dengan tap NFC dan scan QR di semua smartphone modern',
      'Pantau berapa banyak pelanggan yang membuka halaman review Anda',
    ],
    compliance: 'Synctappy mempermudah akses ke halaman review. Kami tidak pernah menyaring, memberi imbalan, atau mengarahkan isi review. Setiap pelanggan bebas membagikan pengalaman jujurnya, sesuai kebijakan review Google.',
    tapScan: 'Tap / Scan',
    phoneLabel: 'Halaman review Google terbuka dari stand Synctappy',
    googleReviews: 'Ulasan Google',
    postingPublicly: 'Diposting secara publik · demo',
    placeholder: 'Bagikan detail pengalaman Anda sendiri di tempat ini',
    post: 'Posting',
  },

  multiLink: {
    eyebrow: 'Multi-Link',
    title: 'Satu tap.',
    highlight: 'Semua tujuan.',
    description: 'Satu Synctappy membuka halaman elegan berisi semua yang dibutuhkan pelanggan. Anda yang mengatur urutan, label, dan apa yang tampil hari ini.',
    listLabel: 'Tujuan yang didukung',
    more: 'Plus TikTok, Facebook, marketplace, pembayaran, dan URL kustom apa pun.',
    phoneLabel: 'Pratinjau halaman multi-link Synctappy',
  },

  profile: {
    eyebrow: 'Smart Profile',
    title: 'Bisnis Anda,',
    highlight: 'indah dalam satu halaman.',
    description: 'Profil bisnis mobile-first yang langsung terbuka setelah setiap tap: sesuai brand, tertata, dan selalu terbaru.',
    anatomy: [
      { icon: 'building', title: 'Header brand', description: 'Logo, cover, dan deskripsi singkat.' },
      { icon: 'click', title: 'CTA utama', description: 'Satu aksi yang paling penting hari ini.' },
      { icon: 'link', title: 'Link & sosial', description: 'Menu, WhatsApp, Instagram, dan lainnya.' },
      { icon: 'map-pin', title: 'Kontak & lokasi', description: 'Telepon, petunjuk arah, dan jam buka.' },
      { icon: 'star', title: 'Review', description: 'Jalur langsung ke halaman review Google Anda.' },
      { icon: 'gift', title: 'Slot promo', description: 'Tampilkan campaign saat Anda menjalankannya.' },
    ],
    phoneLabel: 'Contoh smart profile',
  },

  dynamic: {
    eyebrow: 'Dynamic Link',
    title: 'Ganti Tujuannya.',
    highlight: 'Touchpoint Tetap Sama.',
    description: 'Chip NFC dan QR Code Anda mengarah ke link Synctappy, bukan URL tetap. Ubah tujuannya dari dashboard, tanpa cetak ulang dan tanpa perangkat baru.',
    staysSame: 'Tetap sama',
    destination: 'Tujuan',
    chooseLabel: 'Pilih tujuan',
    nowRedirecting: 'Saat ini mengarah ke',
    targets: [
      { id: 'review', label: 'Google Review', path: 'g.page/kopiku/review', note: 'Default hari kerja' },
      { id: 'menu', label: 'Menu Digital', path: 'kopiku.id/menu', note: 'Jam makan siang' },
      { id: 'promo', label: 'Promo Akhir Pekan', path: 'kopiku.id/promo', note: 'Campaign terjadwal' },
      { id: 'whatsapp', label: 'Pesan via WhatsApp', path: 'wa.me/…', note: 'Pre-order malam' },
    ],
  },

  analytics: {
    eyebrow: 'Analytics',
    title: 'Lihat apa yang terjadi',
    highlight: 'setelah setiap tap.',
    description: 'Ketahui touchpoint mana yang efektif, tujuan mana yang dipilih pelanggan, dan kapan mereka berinteraksi, per perangkat dan per lokasi.',
    capabilities: [
      'Jumlah tap dan scan per touchpoint',
      'Klik per tujuan dan performa link',
      'Rincian perangkat dan lokasi',
      'Jam dan hari tersibuk',
      'Performa campaign',
    ],
    figureLabel: 'Pratinjau dashboard analytics Synctappy dengan data contoh',
    nav: ['Ringkasan', 'Perangkat', 'Tujuan', 'Campaign', 'Pengaturan'],
    overview: 'Ringkasan',
    scope: 'KopiKu · 3 lokasi · 12 perangkat',
    sampleData: 'Data contoh',
    period: '14 hari terakhir',
    // DATA CONTOH — ilustrasi saja, bukan data pelanggan Synctappy nyata.
    stats: [
      { id: 'taps', label: 'Total Tap', value: '12.842', delta: '+12,4%', icon: 'nfc' },
      { id: 'scans', label: 'Scan QR', value: '8.421', delta: '+8,1%', icon: 'qr' },
      { id: 'reviews', label: 'Kunjungan Review', value: '4.218', delta: '+15,2%', icon: 'star' },
      { id: 'whatsapp', label: 'Klik WhatsApp', value: '1.892', delta: '+6,7%', icon: 'message' },
    ],
    chartTitle: 'Interaksi per hari',
    chartSubtitle: 'Tap + scan',
    chartLabel: 'Contoh grafik garis yang naik selama 14 hari',
    today: 'hari ini',
    day: 'Hari',
    source: 'Sumber',
    sources: [
      { label: 'Tap NFC', share: 60, color: 'var(--color-brand-600)' },
      { label: 'Scan QR', share: 40, color: 'var(--color-violet-500)' },
    ],
    engagementLabel: 'Keterlibatan link',
    engagement: '68,4%',
    topDestinations: 'Tujuan teratas',
    topLinks: [
      { label: 'Google Review', share: 38 },
      { label: 'Menu Digital', share: 27 },
      { label: 'WhatsApp', share: 19 },
      { label: 'Instagram', share: 16 },
    ],
    caption: 'Pratinjau dashboard dengan data contoh ilustratif.',
  },

  campaign: {
    eyebrow: 'Campaign & Promo',
    title: 'Jadikan setiap touchpoint sebagai',
    highlight: 'kanal pemasaran.',
    description: 'Jadwalkan promo, menu musiman, dan halaman event berdasarkan tanggal, lokasi, atau perangkat. Saat campaign berakhir, touchpoint kembali ke tujuan default-nya.',
    ideasLabel: 'Ide campaign',
    types: ['Promo musiman', 'Diskon', 'Hari Kemerdekaan', 'Ramadan', 'Event lokal', 'Ulang tahun bisnis'],
    // TEMPLAT contoh — bukan promo yang sedang berlangsung.
    items: [
      { id: 'independence', kind: 'promo', eyebrow: 'Templat musiman', title: 'PROMO KEMERDEKAAN', highlight: 'DISKON 20%', caption: 'Semua minuman · contoh campaign', cta: 'Lihat promo' },
      { id: 'seasonal-menu', kind: 'menu', eyebrow: 'Peluncuran menu', title: 'Minuman Musiman', highlight: 'Baru!', caption: 'Edisi terbatas · contoh', cta: 'Lihat menu' },
      { id: 'live-event', kind: 'event', eyebrow: 'Event lokal', title: 'Live Music Jumat', highlight: '19.00', caption: 'Reservasi meja · contoh', cta: 'Detail' },
    ],
  },

  hardware: {
    eyebrow: 'Perangkat',
    title: 'Produk fisik.',
    highlight: 'Gerbang digital.',
    description: 'Perangkat NFC + QR premium yang dirancang untuk disentuh. Setiap perangkat terhubung ke workspace Synctappy Anda dan bisa dikelola dari dashboard.',
    customNote: 'Desain custom dengan brand Anda tersedia untuk bisnis dan brand multi-cabang.',
    products: [
      { id: 'stand', name: 'Synctappy Stand', type: 'Stand akrilik · NFC + QR', description: 'Display meja premium untuk meja makan, kasir, dan resepsionis.', placements: ['Meja', 'Kasir', 'Resepsionis'] },
      { id: 'card', name: 'Synctappy Card', type: 'Kartu NFC · QR di belakang', description: 'Touchpoint portabel untuk staf, tim sales, dan layanan di lapangan.', placements: ['Staf', 'Sales', 'Pengantaran'] },
      { id: 'tag', name: 'Synctappy Tag', type: 'Stiker tag NFC / QR', description: 'Tag ringkas untuk dinding, pintu, kemasan, kendaraan, dan rak produk.', placements: ['Pintu', 'Kemasan', 'Rak'] },
    ],
  },

  useCases: {
    eyebrow: 'Contoh penggunaan',
    title: 'Dibuat untuk setiap bisnis',
    highlight: 'yang bertemu pelanggan.',
    description: 'Di mana pun pelanggan bertemu bisnis Anda secara langsung, Synctappy mengubah momen itu menjadi koneksi digital.',
    tablistLabel: 'Industri',
    scenarioLabel: 'Contoh skenario',
    destinationsLabel: 'Tujuan yang umum',
    items: [
      { id: 'restaurants', icon: 'utensils', name: 'Restoran & Kafe', description: 'Jadikan setiap meja sebagai menu, momen review, dan kanal pesan ulang.', scenario: 'Tamu men-tap stand di meja setelah makan siang, melihat menu, lalu membagikan pengalamannya di Google.', destinations: ['Menu Digital', 'Google Review', 'WhatsApp'] },
      { id: 'hotels', icon: 'hotel', name: 'Hotel', description: 'Satu touchpoint untuk info Wi-Fi, layanan, dan masukan tamu.', scenario: 'Tamu memindai kartu kamar untuk melihat jam sarapan, meminta housekeeping, dan memberi review saat check-out.', destinations: ['Info Tamu', 'WhatsApp', 'Google Review'] },
      { id: 'clinics', icon: 'stethoscope', name: 'Klinik', description: 'Permudah reservasi, petunjuk arah, dan masukan bagi pasien.', scenario: 'Pasien men-tap di resepsionis untuk membuat jadwal kontrol dan melihat arah ke apotek.', destinations: ['Reservasi', 'Lokasi', 'Kontak'] },
      { id: 'salons', icon: 'scissors', name: 'Salon & Barbershop', description: 'Tampilkan portofolio dan biarkan klien booking ulang sebelum pulang.', scenario: 'Klien men-tap tag di cermin, melihat gaya terbaru di Instagram, lalu booking kunjungan berikutnya.', destinations: ['Reservasi', 'Instagram', 'Google Review'] },
      { id: 'retail', icon: 'store', name: 'Retail', description: 'Hubungkan rak dan kasir ke katalog, promo, dan media sosial Anda.', scenario: 'Pembeli memindai tag di rak untuk melihat detail produk dan penawaran paket minggu ini.', destinations: ['Katalog Produk', 'Promo', 'Instagram'] },
      { id: 'events', icon: 'ticket', name: 'Event', description: 'Satu tag untuk jadwal, registrasi, kontak, dan sponsor.', scenario: 'Pengunjung men-tap stand di booth untuk registrasi, menyimpan kontak, dan mengikuti penyelenggara.', destinations: ['Registrasi', 'Kontak', 'Website'] },
      { id: 'services', icon: 'briefcase', name: 'Jasa Profesional', description: 'Kartu nama pintar yang selalu menampilkan profil terbaru Anda.', scenario: 'Seorang konsultan memberikan Synctappy Card; klien menyimpan kontak dan membuka portofolionya.', destinations: ['Smart Profile', 'Kontak', 'Website'] },
    ],
  },

  why: {
    eyebrow: 'Kenapa Synctappy',
    title: 'Lebih dari sekadar stand NFC.',
    highlight: 'Sebuah platform touchpoint.',
    benefits: [
      { icon: 'hand', title: 'Sederhana', description: 'Tap atau scan. Tanpa aplikasi, tanpa mengetik, tanpa mencari.' },
      { icon: 'route', title: 'Fleksibel', description: 'Satu touchpoint, banyak tujuan, bisa diubah kapan saja.' },
      { icon: 'chart-line', title: 'Terukur', description: 'Lihat apa yang benar-benar dilakukan pelanggan setelah setiap tap.' },
      { icon: 'layers', title: 'Skalabel', description: 'Tumbuh dari satu meja ke banyak lokasi dan perangkat.' },
    ],
    typicalLabel: 'Stiker QR biasa',
    typical: ['Satu link tetap', 'Harus cetak ulang untuk mengubah apa pun', 'Tidak tahu siapa yang memindai', 'Hanya QR'],
    synctappy: ['Banyak tujuan', 'Ubah tujuan dari dashboard', 'Tap, scan & klik per perangkat', 'NFC + QR dalam satu touchpoint'],
  },

  pricing: {
    eyebrow: 'Harga',
    title: 'Mulai gratis.',
    highlight: 'Berkembang saat Anda siap.',
    description: 'Setiap paket menggabungkan perangkat Synctappy dengan platform cloud. Harga final akan diumumkan saat peluncuran.',
    recommended: 'Direkomendasikan',
    plans: [
      { id: 'trial', name: 'Free Trial', audience: 'Coba Synctappy tanpa risiko', priceLabel: 'Gratis', priceNote: 'Uji coba 14 hari', devices: '1 perangkat', features: ['1 smart profile', 'Tujuan QR + NFC', 'Analytics dasar'], cta: 'Coba Gratis' },
      { id: 'basic', name: 'Basic', audience: 'Untuk bisnis kecil', priceLabel: 'Segera hadir', priceNote: 'Paket bulanan', devices: 'Hingga 3 perangkat', features: ['Profil multi-link', 'Analytics dasar', 'Templat standar'], cta: 'Kabari saya' },
      { id: 'pro', name: 'Pro', audience: 'Untuk bisnis berkembang', priceLabel: 'Segera hadir', priceNote: 'Paket bulanan', devices: 'Hingga 10 perangkat', features: ['Analytics lanjutan', 'Campaign & promo', 'Ekspor data', 'Lebih banyak templat'], cta: 'Kabari saya', highlighted: true },
      { id: 'premium', name: 'Premium', audience: 'Untuk brand multi-cabang', priceLabel: 'Segera hadir', priceNote: 'Paket bulanan', devices: 'Hingga 30 perangkat', features: ['Multi-lokasi', 'Branding custom', 'Laporan lanjutan', 'Dukungan prioritas'], cta: 'Kabari saya' },
    ],
    enterpriseTitle: 'Enterprise',
    enterpriseBody: 'White-label, domain custom, API, SSO, dan provisioning perangkat skala besar untuk organisasi.',
  },

  finalCta: {
    eyebrow: 'Synctappy by Synvora',
    titleLead: 'Tap. Connect.',
    titleHighlight: 'Grow.',
    subtitle: 'Interaksi pelanggan Anda berikutnya hanya berjarak satu tap.',
    imageAlt: 'Stand akrilik Synctappy untuk KopiKu dengan QR Google Review di samping iPhone yang menampilkan smart profile KopiKu, dengan tulisan tangan Tap. Connect. Grow.',
  },

  footer: {
    about: 'Platform smart touchpoint yang menghubungkan touchpoint fisik NFC & QR dengan pengalaman digital.',
    columns: [
      {
        title: 'Produk',
        links: [
          { label: 'Cara Kerja', href: '#how-it-works' },
          { label: 'Analytics', href: '#analytics' },
          { label: 'Perangkat', href: '#hardware' },
          { label: 'Harga', href: '#pricing' },
        ],
      },
      {
        title: 'Solusi',
        links: [
          { label: 'Google Review', href: '#google-review' },
          { label: 'Multi-Link', href: '#multi-link' },
          { label: 'Dynamic Link', href: '#dynamic-link' },
          { label: 'Contoh Penggunaan', href: '#use-cases' },
        ],
      },
    ],
    company: 'Perusahaan',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
    cookieSettings: 'Pengaturan cookie',
    soon: '(segera)',
    rights: 'Synctappy by Synvora. Hak cipta dilindungi.',
    madeIn: 'Dibuat di Indonesia',
  },

  modal: {
    trial: {
      eyebrow: 'Uji coba gratis',
      title: 'Uji coba 14 hari Anda hampir siap.',
      body: 'Synctappy sedang menyiapkan peluncuran publik. Uji coba gratis akan mencakup satu smart profile, satu tujuan QR + NFC, dan analytics dasar.',
    },
    signin: {
      eyebrow: 'Dashboard',
      title: 'Login dibuka saat peluncuran.',
      body: 'Dashboard Synctappy (perangkat, tujuan, campaign, dan analytics) tersedia bersamaan dengan uji coba gratis.',
    },
    contact: {
      eyebrow: 'Hubungi Synvora',
      title: 'Mari rancang touchpoint pertama Anda.',
      body: 'Berencana memasang di banyak lokasi, butuh perangkat dengan brand Anda, atau setup enterprise? Tim Synvora siap membantu merencanakannya.',
    },
    close: 'Tutup dialog',
    gotIt: 'Mengerti',
    noContact: 'Kanal kontak resmi akan diumumkan saat peluncuran.',
  },
  cookies: {
    title: 'Cookie, seperlunya saja',
    body: 'Kami memakai cookie esensial untuk mengingat pilihan ini dan, jika Anda izinkan, cookie preferensi untuk mengingat bahasa Anda. Tanpa cookie analytics atau iklan.',
    acceptAll: 'Terima semua',
    accept: 'Terima',
    customize: 'Atur',
    save: 'Simpan pilihan',
    policyLink: 'Kebijakan Privasi',
    settingsLink: 'Pengaturan cookie',
    alwaysOn: 'Selalu aktif',
    notUsed: 'Tidak dipakai',
    categories: {
      essential: { title: 'Esensial', description: 'Diperlukan agar situs berfungsi, mis. mengingat pilihan cookie Anda.' },
      preferences: { title: 'Preferensi', description: 'Mengingat bahasa yang Anda pilih.' },
      analytics: { title: 'Analytics', description: 'Pengukuran penggunaan. Saat ini kami tidak memakai cookie analytics.' },
      marketing: { title: 'Marketing', description: 'Iklan dan pelacakan. Kami tidak memakai cookie marketing.' },
    },
  },
  legal: {
    backHome: 'Kembali ke beranda',
    onThisPage: 'Di halaman ini',
    home: 'Beranda',
    privacyDescription: 'Bagaimana Synctappy by Synvora mengumpulkan, menggunakan, dan melindungi Data Pribadi sesuai UU Pelindungan Data Pribadi (UU PDP No. 27/2022).',
  },
}
