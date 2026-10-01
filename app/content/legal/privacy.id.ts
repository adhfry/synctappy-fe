import type { LegalDocument } from '~/types/legal'

/**
 * Kebijakan Privasi — versi Bahasa Indonesia (sumber: draft dari pemilik produk).
 * STATUS: DRAFT, menunggu review hukum. Placeholder: tanggal berlaku, alamat,
 * email (domain belum dikonfirmasi). Versi EN di privacy.en.ts harus sejalan.
 */
export const privacyId: LegalDocument = {
  title: 'Kebijakan Privasi',
  subtitle: 'Synctappy by Synvora Teknologi Indonesia',
  effectiveLabel: 'Tanggal Berlaku',
  effective: 'Akan diumumkan saat peluncuran',
  updatedLabel: 'Terakhir Diperbarui',
  updated: '1 Oktober 2026',
  draftNotice: 'Dokumen ini masih berupa draft dan sedang menunggu review hukum. Detail kontak, alamat, pihak ketiga, dan masa retensi akan difinalkan sebelum peluncuran.',
  intro: [
    { type: 'p', text: 'Selamat datang di Synctappy, platform physical-to-digital engagement yang dikembangkan dan dioperasikan oleh Synvora Teknologi Indonesia.' },
    { type: 'p', text: 'Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, melindungi, mengungkapkan, dan mengelola Data Pribadi ketika Anda menggunakan website, aplikasi, dashboard, perangkat NFC/QR, layanan, dan fitur Synctappy.' },
    { type: 'p', text: 'Kami berkomitmen menjaga keamanan dan kerahasiaan Data Pribadi serta memprosesnya secara bertanggung jawab, transparan, dan sesuai ketentuan hukum yang berlaku, termasuk Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).' },
    { type: 'p', text: 'Dengan menggunakan Synctappy, Anda menyatakan telah membaca dan memahami Kebijakan Privasi ini.' },
  ],
  sections: [
    {
      id: 'tentang',
      title: '1. Tentang Synctappy',
      blocks: [
        { type: 'p', text: 'Synctappy adalah platform yang memungkinkan bisnis dan organisasi membuat serta mengelola physical-to-digital touchpoint menggunakan QR Code dan teknologi NFC. Layanan Synctappy dapat mencakup:' },
        { type: 'ul', items: ['QR Code dan NFC;', 'tujuan Google Review;', 'multi-link profile;', 'link website dan media sosial;', 'menu digital, WhatsApp, dan booking;', 'campaign dan promosi;', 'analytics dan dashboard bisnis;', 'device management dan template desain;', 'subscription, billing, proposal, dan quotation;', 'serta layanan lain yang tersedia dari waktu ke waktu.'] },
        { type: 'p', text: 'Synctappy dapat menghubungkan pengguna dengan layanan pihak ketiga. Aktivitas yang terjadi setelah pengguna meninggalkan Synctappy dapat tunduk pada kebijakan privasi pihak ketiga tersebut.' },
      ],
    },
    {
      id: 'pihak-bertanggung-jawab',
      title: '2. Pihak yang Bertanggung Jawab',
      blocks: [
        { type: 'p', text: 'Untuk pemrosesan Data Pribadi yang dilakukan Synctappy dalam rangka penyediaan dan pengelolaan platform, Synvora Teknologi Indonesia bertindak sebagai pihak yang menentukan tujuan dan cara pemrosesan Data Pribadi sesuai peran yang berlaku berdasarkan hukum.' },
        { type: 'contact', rows: [
          { label: 'Nama', value: 'Synvora Teknologi Indonesia' },
          { label: 'Produk', value: 'Synctappy' },
          { label: 'Email Privasi', value: 'privacy@synctappy.biz.id' },
          { label: 'Email Dukungan', value: 'support@synctappy.biz.id' },
          { label: 'Alamat', value: 'Akan dicantumkan sebelum peluncuran' },
        ] },
        { type: 'p', text: 'Apabila Synctappy memproses Data Pribadi atas nama pelanggan bisnis berdasarkan instruksi pelanggan tersebut, hubungan dan tanggung jawab para pihak dapat diatur lebih lanjut melalui perjanjian atau ketentuan layanan yang berlaku. UU PDP membedakan antara Pengendali Data Pribadi dan Prosesor Data Pribadi berdasarkan pihak yang menentukan tujuan dan kendali pemrosesan.' },
      ],
    },
    {
      id: 'data-dikumpulkan',
      title: '3. Data yang Kami Kumpulkan',
      blocks: [
        { type: 'p', text: 'Kami menerapkan prinsip bahwa Data Pribadi dikumpulkan secara terbatas, spesifik, sah, transparan, dan sesuai tujuan pemrosesannya, sejalan dengan ketentuan UU PDP.' },
        { type: 'h3', text: '3.1 Data Akun' },
        { type: 'p', text: 'Ketika Anda membuat akun Synctappy, kami dapat mengumpulkan:' },
        { type: 'ul', items: ['nama;', 'alamat email;', 'nomor telepon;', 'password yang telah diproses secara aman (hashing);', 'nama perusahaan atau organisasi;', 'jabatan atau peran;', 'informasi akun lainnya yang Anda berikan.'] },
      ],
    },
    {
      id: 'profil-bisnis',
      title: '4. Data Profil Bisnis',
      blocks: [
        { type: 'p', text: 'Jika Anda menggunakan Synctappy sebagai pengguna bisnis, Anda dapat memberikan:' },
        { type: 'ul', items: ['nama, alamat, nomor telepon, dan email bisnis;', 'website, logo, foto, dan deskripsi bisnis;', 'jam operasional;', 'media sosial, Google Maps, link WhatsApp, booking, dan marketplace;', 'menu digital serta informasi produk atau layanan;', 'informasi lokasi atau cabang;', 'konten campaign;', 'dan informasi lain yang Anda pilih untuk ditampilkan melalui profil Synctappy.'] },
        { type: 'p', text: 'Data tersebut dapat bersifat publik apabila Anda memilih untuk mempublikasikannya melalui halaman Synctappy.' },
      ],
    },
    {
      id: 'perangkat',
      title: '5. Data Perangkat NFC dan QR',
      blocks: [
        { type: 'p', text: 'Setiap perangkat Synctappy dapat memiliki identitas unik seperti Device ID, QR Code ID, NFC Tag ID, workspace ID, lokasi perangkat, destination URL, campaign terkait, status perangkat, tanggal aktivasi, dan tanggal perubahan konfigurasi.' },
        { type: 'p', text: 'Data tersebut digunakan untuk:' },
        { type: 'ul', items: ['mengaktifkan perangkat dan menghubungkannya dengan akun;', 'mengelola destination;', 'memberikan analytics;', 'mendeteksi penyalahgunaan;', 'memberikan dukungan teknis;', 'dan menjaga keamanan platform.'] },
      ],
    },
    {
      id: 'interaksi',
      title: '6. Data Interaksi Pengguna',
      blocks: [
        { type: 'p', text: 'Ketika seseorang melakukan scan QR atau tap NFC yang mengarah ke Synctappy, sistem dapat mencatat informasi teknis dan interaksi tertentu, misalnya:' },
        { type: 'ul', items: ['waktu dan tanggal akses;', 'perangkat/touchpoint yang digunakan;', 'jenis interaksi (QR atau NFC);', 'halaman atau destination yang dibuka;', 'campaign terkait;', 'browser, sistem operasi, dan jenis perangkat;', 'informasi jaringan yang diperlukan untuk keamanan;', 'perkiraan lokasi apabila fitur tersebut digunakan dan diperbolehkan;', 'serta data teknis lain yang diperlukan untuk menyediakan dan mengamankan layanan.'] },
        { type: 'p', text: 'Kami berupaya tidak mengumpulkan Data Pribadi yang tidak diperlukan untuk tujuan layanan.' },
      ],
    },
    {
      id: 'analytics',
      title: '7. Analytics',
      blocks: [
        { type: 'p', text: 'Synctappy menyediakan fitur analytics kepada pelanggan bisnis, yang dapat menampilkan jumlah tap, scan, kunjungan, dan klik; destination yang paling sering dikunjungi; perangkat dengan interaksi terbanyak; waktu interaksi; performa campaign dan lokasi; serta statistik penggunaan lainnya. Analytics digunakan untuk membantu pelanggan memahami performa physical-to-digital touchpoint mereka.' },
        { type: 'note', title: 'Penting', text: 'Synctappy tidak menyatakan bahwa kami mengetahui atau menjamin seseorang telah menyelesaikan aktivitas pada platform pihak ketiga seperti Google. Contohnya, "klik ke tujuan Google" tidak selalu berarti "review Google berhasil diposting". Aktivitas setelah pengguna diarahkan ke Google atau layanan pihak ketiga tunduk pada sistem dan kebijakan pihak ketiga tersebut.' },
      ],
    },
    {
      id: 'transaksi',
      title: '8. Data Transaksi dan Pembayaran',
      blocks: [
        { type: 'p', text: 'Apabila Anda membeli subscription, hardware, add-on, atau layanan Synctappy, kami dapat memproses nama pelanggan, nama perusahaan, alamat penagihan, email, nomor telepon, paket yang dipilih, periode subscription, invoice, transaction ID, status pembayaran, serta informasi pajak apabila diperlukan.' },
        { type: 'p', text: 'Untuk informasi kartu pembayaran atau data pembayaran sensitif, Synctappy dapat menggunakan penyedia payment gateway pihak ketiga. Kami tidak bermaksud menyimpan informasi kartu pembayaran secara penuh apabila informasi tersebut dapat diproses langsung oleh payment gateway.' },
      ],
    },
    {
      id: 'komunikasi',
      title: '9. Data Komunikasi',
      blocks: [
        { type: 'p', text: 'Apabila Anda menghubungi kami melalui email, support ticket, live chat, WhatsApp, formulir kontak, atau saluran lainnya, kami dapat menyimpan informasi komunikasi tersebut untuk memberikan dukungan, menyelesaikan masalah, memproses permintaan, meningkatkan layanan, menjaga keamanan, dan mencatat riwayat layanan.' },
      ],
    },
    {
      id: 'cookies',
      title: '10. Cookie dan Teknologi Serupa',
      blocks: [
        { type: 'p', text: 'Synctappy dapat menggunakan cookie dan teknologi serupa untuk menjaga sesi login, mengingat preferensi, menjaga keamanan, mengukur penggunaan website, memahami performa halaman, menyediakan analytics, dan meningkatkan pengalaman pengguna. Jenis cookie dapat meliputi:' },
        { type: 'h3', text: 'Cookie Esensial' },
        { type: 'p', text: 'Diperlukan agar layanan dapat berfungsi.' },
        { type: 'h3', text: 'Cookie Preferensi' },
        { type: 'p', text: 'Digunakan untuk menyimpan preferensi pengguna, dan hanya dipasang dengan persetujuan Anda.' },
        { type: 'h3', text: 'Cookie Analytics' },
        { type: 'p', text: 'Digunakan untuk memahami penggunaan layanan. Website ini saat ini tidak menggunakan cookie analytics.' },
        { type: 'h3', text: 'Cookie Marketing' },
        { type: 'p', text: 'Website ini saat ini tidak menggunakan cookie marketing. Apabila digunakan di kemudian hari, akan dijelaskan secara terpisah dan tunduk pada mekanisme persetujuan yang berlaku.' },
        { type: 'p', text: 'Cookie yang saat ini digunakan di website ini:' },
        { type: 'table', head: ['Cookie', 'Kategori', 'Fungsi', 'Masa berlaku'], rows: [
          ['synctappy_consent', 'Esensial', 'Menyimpan pilihan cookie Anda sebagai catatan persetujuan', '6 bulan'],
          ['synctappy_lang', 'Preferensi', 'Mengingat bahasa yang Anda pilih (hanya dengan persetujuan)', '12 bulan'],
        ] },
        { type: 'p', text: 'Anda dapat mengubah pilihan kapan saja melalui tautan "Pengaturan cookie" di bagian bawah website, atau mengatur dan menghapus cookie melalui pengaturan browser Anda.' },
      ],
    },
    {
      id: 'tujuan',
      title: '11. Tujuan Pemrosesan Data',
      blocks: [
        { type: 'p', text: 'Kami dapat memproses Data Pribadi untuk:' },
        { type: 'ol', items: ['membuat dan mengelola akun;', 'menyediakan layanan Synctappy;', 'mengaktifkan QR dan NFC;', 'mengelola perangkat;', 'menyediakan dynamic link;', 'menyediakan multi-link profile;', 'menyediakan analytics;', 'menyediakan campaign;', 'memproses subscription;', 'memproses pembayaran;', 'mengirimkan notifikasi layanan;', 'memberikan customer support;', 'mencegah penyalahgunaan;', 'menjaga keamanan sistem;', 'melakukan troubleshooting;', 'meningkatkan produk;', 'melakukan analisis penggunaan secara agregat;', 'memenuhi kewajiban hukum;', 'menyelesaikan sengketa;', 'dan tujuan lain yang telah diberitahukan kepada Anda.'] },
        { type: 'p', text: 'Pemrosesan Data Pribadi harus memiliki dasar pemrosesan yang sesuai. UU PDP mencantumkan antara lain persetujuan, pemenuhan perjanjian, kewajiban hukum, kepentingan vital, kepentingan umum, dan kepentingan sah sebagai dasar pemrosesan.' },
      ],
    },
    {
      id: 'dasar-pemrosesan',
      title: '12. Dasar Pemrosesan',
      blocks: [
        { type: 'p', text: 'Tergantung konteksnya, Synctappy dapat memproses Data Pribadi berdasarkan:' },
        { type: 'h3', text: 'Persetujuan' },
        { type: 'p', text: 'Ketika pemrosesan memerlukan persetujuan pengguna.' },
        { type: 'h3', text: 'Pelaksanaan Perjanjian' },
        { type: 'p', text: 'Misalnya untuk menyediakan subscription atau layanan yang telah dibeli.' },
        { type: 'h3', text: 'Kewajiban Hukum' },
        { type: 'p', text: 'Apabila diwajibkan oleh peraturan perundang-undangan.' },
        { type: 'h3', text: 'Kepentingan yang Sah' },
        { type: 'p', text: 'Untuk tujuan tertentu seperti keamanan, pencegahan fraud, dan peningkatan layanan, sepanjang sesuai ketentuan yang berlaku dan tidak mengesampingkan hak pengguna.' },
      ],
    },
    {
      id: 'pemasaran',
      title: '13. Penggunaan Data untuk Pemasaran',
      blocks: [
        { type: 'p', text: 'Kami dapat mengirimkan informasi produk, update layanan, fitur baru, informasi subscription, promo, campaign, dan komunikasi pemasaran lainnya. Untuk komunikasi pemasaran yang memerlukan persetujuan, Anda dapat memilih untuk tidak menerimanya.' },
        { type: 'p', text: 'Komunikasi yang penting untuk operasional layanan, seperti perubahan password, keamanan akun, pembayaran, invoice, perubahan layanan, atau pemberitahuan keamanan, dapat tetap dikirimkan karena berkaitan dengan layanan yang Anda gunakan.' },
      ],
    },
    {
      id: 'pihak-ketiga',
      title: '14. Berbagi Data dengan Pihak Ketiga',
      blocks: [
        { type: 'p', text: 'Synctappy dapat menggunakan penyedia layanan pihak ketiga untuk mendukung operasional, misalnya cloud hosting, database, object storage, payment gateway, pengiriman email, analytics, monitoring, customer support, keamanan, dan layanan infrastruktur lainnya.' },
        { type: 'p', text: 'Pihak ketiga tersebut hanya dapat memperoleh data sejauh diperlukan untuk menyediakan layanan yang relevan dan sesuai dengan hubungan serta ketentuan yang berlaku.' },
        { type: 'note', text: 'Kami tidak menjual Data Pribadi pengguna sebagai komoditas kepada pihak ketiga.' },
      ],
    },
    {
      id: 'layanan-pihak-ketiga',
      title: '15. Layanan Pihak Ketiga',
      blocks: [
        { type: 'p', text: 'Synctappy dapat mengarahkan pengguna ke layanan pihak ketiga seperti Google, Google Maps, Instagram, WhatsApp, TikTok, Facebook, marketplace, platform booking, dan layanan lainnya. Ketika Anda meninggalkan Synctappy dan menggunakan layanan tersebut, pemrosesan data Anda dapat dilakukan oleh pihak ketiga. Kami menyarankan Anda membaca kebijakan privasi masing-masing layanan.' },
        { type: 'p', text: 'Synctappy tidak bertanggung jawab atas praktik privasi pihak ketiga yang berada di luar kendali kami.' },
      ],
    },
    {
      id: 'google-review',
      title: '16. Google Review',
      blocks: [
        { type: 'p', text: 'Synctappy dapat menyediakan fitur yang memudahkan pengguna membuka halaman review Google milik bisnis. Synctappy:' },
        { type: 'ul', items: ['tidak menjamin review akan diterbitkan;', 'tidak menentukan rating pengguna;', 'tidak mengubah isi review pengguna;', 'tidak meminta pengguna memberikan rating tertentu;', 'dan tidak menganggap klik sebagai review yang berhasil dipublikasikan.'] },
        { type: 'p', text: 'Pengguna bebas memberikan ulasan sesuai pengalamannya dan tunduk pada kebijakan Google.' },
      ],
    },
    {
      id: 'keamanan',
      title: '17. Keamanan Data',
      blocks: [
        { type: 'p', text: 'Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi Data Pribadi, yang dapat mencakup enkripsi saat transit (HTTPS/TLS), password hashing, autentikasi, role-based access control, pembatasan akses, audit logging, rate limiting, backup, monitoring, manajemen kerentanan, dan prosedur incident response.' },
        { type: 'p', text: 'UU PDP mewajibkan Pengendali Data Pribadi melindungi Data Pribadi dari akses, pengungkapan, perubahan, penyalahgunaan, perusakan, atau kehilangan yang tidak sah. Namun demikian, tidak ada sistem elektronik yang dapat menjamin keamanan absolut.' },
      ],
    },
    {
      id: 'retensi',
      title: '18. Retensi Data',
      blocks: [
        { type: 'p', text: 'Kami menyimpan Data Pribadi selama diperlukan untuk menyediakan layanan, memenuhi tujuan pemrosesan, memenuhi kewajiban kontraktual dan hukum, menyelesaikan sengketa, menjaga keamanan, atau tujuan sah lainnya.' },
        { type: 'p', text: 'Setelah data tidak lagi diperlukan, kami dapat menghapus, memusnahkan, menganonimkan, atau melakukan tindakan lain sesuai ketentuan hukum dan kebijakan retensi internal kami. UU PDP menetapkan bahwa Data Pribadi harus dihapus atau dimusnahkan setelah masa retensi berakhir atau berdasarkan permintaan subjek data, kecuali terdapat ketentuan lain yang berlaku.' },
      ],
    },
    {
      id: 'hak-pengguna',
      title: '19. Hak Pengguna',
      blocks: [
        { type: 'p', text: 'Sesuai ketentuan hukum yang berlaku (antara lain Pasal 5 sampai 15 UU PDP), Anda dapat memiliki hak untuk:' },
        { type: 'ul', items: ['memperoleh informasi mengenai pemrosesan Data Pribadi;', 'mengakses dan memperoleh salinan Data Pribadi;', 'memperbaiki dan memperbarui Data Pribadi;', 'meminta penghapusan atau pemusnahan Data Pribadi;', 'menarik persetujuan;', 'meminta pembatasan pemrosesan;', 'mengajukan keberatan terhadap pemrosesan tertentu;', 'serta menggunakan hak lain yang diberikan berdasarkan peraturan perundang-undangan.'] },
      ],
    },
    {
      id: 'permintaan',
      title: '20. Cara Mengajukan Permintaan',
      blocks: [
        { type: 'p', text: 'Untuk mengajukan permintaan terkait Data Pribadi, hubungi privacy@synctappy.biz.id dengan subjek email:' },
        { type: 'quote', text: 'Permintaan Data Pribadi - Synctappy' },
        { type: 'p', text: 'Permintaan dapat mencakup akses data, koreksi, penghapusan, penarikan persetujuan, pembatasan pemrosesan, atau pertanyaan mengenai pemrosesan Data Pribadi. Kami dapat meminta informasi tambahan untuk memverifikasi identitas pemohon sebelum memenuhi permintaan, agar Data Pribadi tidak diberikan kepada pihak yang tidak berwenang.' },
      ],
    },
    {
      id: 'penghapusan-akun',
      title: '21. Penghapusan Akun',
      blocks: [
        { type: 'p', text: 'Anda dapat meminta penghapusan akun melalui saluran resmi yang tersedia. Setelah permintaan diverifikasi, kami akan memprosesnya sesuai ketentuan hukum, kebutuhan operasional, dan kewajiban penyimpanan yang berlaku.' },
        { type: 'p', text: 'Beberapa informasi dapat tetap disimpan apabila diwajibkan oleh hukum atau diperlukan untuk keamanan, pencegahan fraud, penyelesaian sengketa, pencatatan transaksi, atau pemenuhan kewajiban hukum.' },
      ],
    },
    {
      id: 'data-pelanggan-bisnis',
      title: '22. Data Pelanggan Bisnis',
      blocks: [
        { type: 'p', text: 'Jika Anda menggunakan Synctappy untuk mengumpulkan atau memproses Data Pribadi milik pelanggan Anda sendiri (misalnya nama, nomor telepon, email, booking, atau feedback), Anda bertanggung jawab memastikan penggunaan tersebut memiliki dasar pemrosesan yang sesuai. Dalam hal ini bisnis Anda dapat bertanggung jawab sebagai pihak yang menentukan tujuan pemrosesan data tersebut.' },
        { type: 'p', text: 'Dalam situasi tertentu, Synctappy dapat bertindak sebagai Prosesor Data Pribadi berdasarkan instruksi pelanggan bisnis.' },
      ],
    },
    {
      id: 'data-anak',
      title: '23. Data Anak',
      blocks: [
        { type: 'p', text: 'Synctappy tidak secara sengaja ditujukan untuk mengumpulkan Data Pribadi anak tanpa dasar dan mekanisme yang sesuai dengan hukum. Apabila kami mengetahui Data Pribadi anak dikumpulkan secara tidak sesuai, kami dapat mengambil langkah untuk menghapus atau membatasi pemrosesan data tersebut sesuai ketentuan yang berlaku.' },
      ],
    },
    {
      id: 'transfer-data',
      title: '24. Transfer Data',
      blocks: [
        { type: 'p', text: 'Untuk menyediakan layanan, Data Pribadi dapat diproses oleh penyedia infrastruktur atau layanan yang berlokasi di luar wilayah Indonesia. Apabila terjadi transfer atau pemrosesan lintas negara, Synctappy akan mengambil langkah yang diperlukan agar pemrosesan tersebut dilakukan sesuai ketentuan hukum yang berlaku.' },
      ],
    },
    {
      id: 'insiden',
      title: '25. Insiden dan Kebocoran Data',
      blocks: [
        { type: 'p', text: 'Kami memiliki prosedur untuk menangani insiden keamanan. Apabila terjadi kegagalan pelindungan Data Pribadi yang memenuhi kriteria pemberitahuan berdasarkan hukum yang berlaku, kami akan memberitahukannya kepada pihak yang diwajibkan sesuai peraturan perundang-undangan, termasuk informasi mengenai data yang terungkap, waktu dan cara kejadian, serta langkah penanganan dan pemulihan.' },
      ],
    },
    {
      id: 'perubahan',
      title: '26. Perubahan Kebijakan Privasi',
      blocks: [
        { type: 'p', text: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu karena perubahan fitur, teknologi, layanan, pihak ketiga, praktik pemrosesan data, atau peraturan perundang-undangan.' },
        { type: 'p', text: 'Apabila perubahan bersifat material, kami dapat memberikan pemberitahuan melalui website, dashboard, email, atau metode lain yang sesuai. Tanggal "Terakhir Diperbarui" menunjukkan versi terbaru.' },
      ],
    },
    {
      id: 'ketentuan-layanan',
      title: '27. Hubungan dengan Syarat & Ketentuan',
      blocks: [
        { type: 'p', text: 'Kebijakan Privasi ini merupakan bagian dari ketentuan penggunaan Synctappy. Penggunaan Synctappy juga tunduk pada Syarat & Ketentuan Layanan, Acceptable Use Policy, Subscription Terms, Refund Policy, Cookie Policy, Hardware Warranty, dan ketentuan lain yang berlaku.' },
      ],
    },
    {
      id: 'hukum',
      title: '28. Hukum yang Berlaku',
      blocks: [
        { type: 'p', text: 'Kebijakan Privasi ini tunduk pada hukum Republik Indonesia. Setiap perselisihan akan diselesaikan sesuai mekanisme yang ditentukan dalam Syarat & Ketentuan Layanan dan ketentuan hukum yang berlaku.' },
      ],
    },
    {
      id: 'kontak',
      title: '29. Hubungi Kami',
      blocks: [
        { type: 'p', text: 'Apabila Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau pemrosesan Data Pribadi Anda, silakan hubungi:' },
        { type: 'contact', rows: [
          { label: 'Perusahaan', value: 'Synvora Teknologi Indonesia' },
          { label: 'Produk', value: 'Synctappy' },
          { label: 'Privasi', value: 'privacy@synctappy.biz.id' },
          { label: 'Dukungan', value: 'support@synctappy.biz.id' },
          { label: 'Alamat', value: 'Akan dicantumkan sebelum peluncuran' },
        ] },
      ],
    },
  ],
}
