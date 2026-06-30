// Initial data seed for local storage

const defaultCategories = [
  { id: '1', name: 'Laptop & Komputer', slug: 'laptop-komputer' },
  { id: '2', name: 'Printer & Scanner', slug: 'printer-scanner' },
  { id: '3', name: 'CCTV & Keamanan', slug: 'cctv-keamanan' },
  { id: '4', name: 'Jaringan & Server', slug: 'jaringan-server' },
  { id: '5', name: 'Peralatan Kantor', slug: 'peralatan-kantor'  },
  { id: '6', name: 'Jasa Event Organizer (EO)', slug: 'jasa-eo' }
];

const defaultProducts = [
  {
    id: 'prod-1',
    name: 'ASUS ExpertBook B1400',
    category: 'laptop-komputer',
    description: 'Laptop bisnis tangguh dan andal untuk kebutuhan perkantoran, instansi pemerintah, dan sekolah.',
    details: 'ASUS ExpertBook B1400 dirancang khusus untuk bisnis, menjadikannya pilihan cerdas bagi startup yang ambisius, institusi pendidikan yang mapan, dan perusahaan berkembang dari segala ukuran. Laptop ini menawarkan performa tinggi, ketahanan tingkat militer, dan penyesuaian ekstensif untuk memberdayakan bisnis Anda.',
    specifications: [
      { key: 'Prosesor', value: 'Intel Core i5-1135G7 (up to 4.2 GHz, 4 Cores)' },
      { key: 'Memori', value: '8GB DDR4 SO-DIMM (Upgradable to 32GB)' },
      { key: 'Penyimpanan', value: '512GB M.2 NVMe PCIe 3.0 SSD' },
      { key: 'Grafis', value: 'Intel Iris Xe Graphics' },
      { key: 'Layar', value: '14.0-inch, FHD (1920 x 1080) 16:9, Anti-glare display' },
      { key: 'Sistem Operasi', value: 'Windows 11 Pro' },
      { key: 'Garansi', value: '2 Tahun Garansi Resmi ASUS Indonesia' }
    ],
    image: '/image/Asus ExpertBook.webp',
    gallery: [
      '/image/Asus ExpertBook.webp'
    ],
    status: 'Tersedia'
  },
  {
    id: 'prod-2',
    name: 'Lenovo ThinkPad L13 Gen 3',
    category: 'laptop-komputer',
    description: 'Laptop kelas enterprise legendaris dengan keamanan tinggi dan daya tahan baterai luar biasa.',
    details: 'ThinkPad L13 Gen 3 memadukan daya dantangan melegenda dengan performa tangguh AMD Ryzen. Sempurna untuk profesional yang membutuhkan mobilitas tinggi, keamanan data biometrik, dan keyboard ternyaman di kelasnya.',
    specifications: [
      { key: 'Prosesor', value: 'AMD Ryzen 5 PRO 5675U (up to 4.3 GHz, 6 Cores)' },
      { key: 'Memori', value: '16GB DDR4 (Dual Channel)' },
      { key: 'Penyimpanan', value: '512GB SSD NVMe PCIe Gen4' },
      { key: 'Grafis', value: 'AMD Radeon Graphics' },
      { key: 'Layar', value: '13.3-inch WUXGA (1920 x 1200) IPS, Anti-glare' },
      { key: 'Sistem Operasi', value: 'Windows 11 Pro' },
      { key: 'Fitur', value: 'Fingerprint Reader, Webcam Privacy Shutter, Backlit Keyboard' }
    ],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80'
    ],
    status: 'Tersedia'
  },
  {
    id: 'prod-3',
    name: 'Epson L3210 All-in-One Ink Tank',
    category: 'printer-scanner',
    description: 'Printer ink tank hemat energi dengan biaya operasional super ekonomis, cocok untuk sekolah dan kantor.',
    details: 'Epson EcoTank L3210 dirancang untuk meningkatkan penghematan biaya bisnis dan produktivitas cetak. Nikmati hasil cetak tinggi hingga 4.500 halaman hitam-putih dan 7.500 halaman berwarna. Pengisian ulang tinta mudah dan bersih karena desain botol yang unik.',
    specifications: [
      { key: 'Fungsi', value: 'Print, Scan, Copy (All-in-One)' },
      { key: 'Metode Cetak', value: 'Epson Micro Piezo Print Head' },
      { key: 'Resolusi Cetak', value: '5760 x 1440 dpi' },
      { key: 'Kecepatan Cetak', value: 'Up to 10.0 ipm (Black) / 5.0 ipm (Color)' },
      { key: 'Resolusi Scan', value: '600 x 1200 dpi' },
      { key: 'Tipe Tinta', value: 'Epson 003 Bottle Ink' }
    ],
    image: '/image/Epson.jpg',
    gallery: [
      '/image/Epson.jpg'
    ],
    status: 'Tersedia'
  },
  {
    id: 'prod-4',
    name: 'Hikvision 4 Channel IP CCTV Kit',
    category: 'cctv-keamanan',
    description: 'Paket CCTV IP Kamera Full HD 1080p dengan fitur smart infrared dan pemantauan online via HP.',
    details: 'Amankan aset properti dan area kerja Anda dengan Paket Hikvision IP Camera 4 Channel. Menggunakan teknologi PoE (Power over Ethernet) untuk instalasi yang rapi dan aman. Dapat dimonitor secara real-time kapan saja dan di mana saja menggunakan aplikasi smartphone Hik-Connect.',
    specifications: [
      { key: 'Kamera', value: '4 Unit IP Camera Hikvision 2MP (2 Dome + 2 Bullet)' },
      { key: 'NVR', value: '1 Unit NVR 4 Channel PoE DS-7604NI-Q1/4P' },
      { key: 'Penyimpanan', value: '1TB Surveillance HDD (Khusus Rekaman CCTV)' },
      { key: 'Resolusi Rekam', value: '1080p Full HD Real-time' },
      { key: 'Aksesoris', value: 'Kabel UTP Cat5e 50m, Konektor RJ45, HDMI Cable' },
      { key: 'Garansi', value: '1 Tahun Garansi Resmi Hikvision' }
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1525824236856-8d0431dba3ab?auto=format&fit=crop&w=600&q=80'
    ],
    status: 'Tersedia'
  },
  {
    id: 'prod-5',
    name: 'Jasa Event Organizer (EO)',
    category: 'jasa-eo',
    description: 'Penyelenggaraan acara profesional seperti Paket Meeting, Paket Studi Tiru se-Indonesia, dan Paket Family Gathering.',
    details: 'Kami mengorganisir berbagai jenis acara instansi pemerintah, BUMN, sekolah, maupun swasta secara profesional. Tim EO kami yang berpengalaman mengawal seluruh tahapan mulai dari perencanaan konsep, manajemen anggaran, koordinasi vendor, registrasi peserta, pelaksanaan teknis, hingga pelaporan pertanggungjawaban akhir.',
    specifications: [
      { key: 'Paket Meeting', value: 'Fullboard, Fullday, Halfday' },
      { key: 'Paket Studi Tiru', value: 'Kunjungan Kerja & Studi Banding Se-Indonesia' },
      { key: 'Paket Family Gathering', value: 'Outbound, Fun Games, Akomodasi & Capacity Building' }
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'
    ],
    status: 'Tersedia'
  }
];

const defaultProjects = [
  {
    id: 'proj-1',
    title: 'Desa Adow Selatan',
    description: '',
    category: 'Pemerintahan',
    image: '/image/Adow Selatan.webp',
    date: '22 November 2025'
  },
  {
    id: 'proj-2',
    title: 'Desa Iloheluma',
    description: '',
    category: 'Teknologi',
    image: '/image/Iloheluma.webp',
    date: '19 Maret 2025'
  },
  {
    id: 'proj-3',
    title: 'Desa Sinombayuga',
    description: '',
    category: 'Infrastruktur',
    image: '/image/Sinombayuga.webp',
    date: '8 November 2025'
  }
];

const defaultTestimonials = [
  {
    id: 'test-1',
    name: 'Budi Santoso, M.Pd.',
    role: 'Kepala Sekolah',
    company: 'SMK Negeri 1 Manado',
    content: 'Kerja sama pengadaan laptop laboratorium berjalan sangat lancar. Unit laptop datang tepat waktu dalam kondisi segel resmi, dipasang langsung oleh tim teknisi, dan performanya sangat memuaskan.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Rian Hidayat',
    role: 'IT Manager',
    company: 'PT Global Solusindo',
    content: 'Sangat terbantu dengan layanan konsultasi jaringan dari PT Alfatih Anugrah Syariah. Produk Ruijie router dan switch yang disuplai bergaransi resmi and harganya sangat bersaing.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Ibu Ratna Kumala',
    role: 'Kasubag Umum',
    company: 'Dinas Pekerjaan Umum',
    content: 'Sistem CCTV gedung dinas kami sekarang terpantau rapi dan jernih. Tim instalasi bekerja secara profesional, kabel tertata rapi, dan diajarkan sampai paham cara memantau dari handphone.',
    rating: 5
  }
];

const defaultFaqs = [
  {
    id: 'faq-1',
    question: 'Apakah produk yang dijual di PT Alfatih memiliki garansi resmi?',
    answer: 'Ya, semua produk elektronik yang kami sediakan adalah barang original dengan garansi resmi dari produsen masing-masing (seperti ASUS, Lenovo, Hikvision, Epson, dll.) sesuai jangka waktu garansi yang berlaku.',
    category: 'Produk & Garansi'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana prosedur untuk meminta penawaran harga resmi (Quotation)?',
    answer: 'Anda dapat menghubungi kami melalui tombol WhatsApp yang tersedia di website, atau mengirimkan dokumen Rencana Anggaran Biaya (RAB) / spesifikasi teknis barang melalui email admin@alfatih-syariah.com. Tim sales kami akan memproses penawaran resmi dalam waktu 1-2 hari kerja.',
    category: 'Pemesanan & Kerjasama'
  },
  {
    id: 'faq-3',
    question: 'Apakah PT Alfatih melayani instalasi dan pemasangan di lokasi?',
    answer: 'Ya, untuk produk-produk tertentu seperti CCTV, perangkat jaringan, server, dan interactive flat panel display, kami menyediakan layanan pengiriman sekaligus instalasi/setting di tempat oleh teknisi berpengalaman.',
    category: 'Layanan & Teknisi'
  },
  {
    id: 'faq-4',
    question: 'Apakah PT Alfatih terdaftar sebagai penyedia resmi untuk instansi pemerintah?',
    answer: 'Ya, kami merupakan badan hukum berizin resmi yang memiliki legalitas usaha lengkap (NIB, NPWP, PKP, Akta Perusahaan) dan siap bekerja sama secara formal dengan instansi pemerintah, BUMN, sekolah, swasta, maupun instansi pendidikan.',
    category: 'Legalitas & Pajak'
  }
];

const defaultContact = {
  whatsapp: '6282131397759',
  email: 'admin@alfatih-syariah.com',
  address: 'Jl. Gatot Subroto, Molinow, Kec. Kotamobagu Bar., Kota Kotamobagu, Sulawesi Utara 95716',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=PT.+Alfatih+Anugrah+Syariah&output=embed&z=17',
  operationalHours: 'Senin - Sabtu (08:00 - 17:00 WITA)'
};

// LocalStorage helpers
export const initStorage = () => {
  if (typeof window === 'undefined') return;

  // Force update stored products if they still contain the deleted items, don't have Jasa EO, or use old image paths
  const currentProductsStr = localStorage.getItem('alfatih_products');
  if (
    currentProductsStr && 
    (currentProductsStr.includes('Ruijie') || 
     currentProductsStr.includes('Interactive Whiteboard') ||
     !currentProductsStr.includes('Jasa Event Organizer') ||
     !currentProductsStr.includes('/image/Asus ExpertBook.webp') ||
     !currentProductsStr.includes('/image/Epson.jpg') ||
     currentProductsStr.includes('photo-1593642632823-8f785ba67e45'))
  ) {
    localStorage.setItem('alfatih_products', JSON.stringify(defaultProducts));
    localStorage.setItem('alfatih_categories', JSON.stringify(defaultCategories));
  }

  // Force update stored projects if they are the old template images or old detailed titles
  const currentProjectsStr = localStorage.getItem('alfatih_projects');
  if (currentProjectsStr && (!currentProjectsStr.includes('/image/') || currentProjectsStr.includes('Pemasangan CCTV'))) {
    localStorage.setItem('alfatih_projects', JSON.stringify(defaultProjects));
  }

  // Force update contact if number, maps URL, or address is outdated
  const currentContactStr = localStorage.getItem('alfatih_contact');
  if (!currentContactStr || !currentContactStr.includes('6282131397759') || !currentContactStr.includes('Kotamobagu')) {
    localStorage.setItem('alfatih_contact', JSON.stringify(defaultContact));
  }

  if (!localStorage.getItem('alfatih_initialized')) {
    localStorage.setItem('alfatih_products', JSON.stringify(defaultProducts));
    localStorage.setItem('alfatih_projects', JSON.stringify(defaultProjects));
    localStorage.setItem('alfatih_testimonials', JSON.stringify(defaultTestimonials));
    localStorage.setItem('alfatih_faqs', JSON.stringify(defaultFaqs));
    localStorage.setItem('alfatih_categories', JSON.stringify(defaultCategories));
    localStorage.setItem('alfatih_contact', JSON.stringify(defaultContact));
    localStorage.setItem('alfatih_initialized', 'true');
  }
};

const getStoredData = (key, defaultValue) => {
  initStorage();
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    console.error('Error reading localStorage key: ' + key, e);
    return defaultValue;
  }
};

const setStoredData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error writing localStorage key: ' + key, e);
  }
};

// API Helpers
export const getProducts = () => getStoredData('alfatih_products', defaultProducts);
export const saveProduct = (product) => {
  const products = getProducts();
  if (product.id) {
    const idx = products.findIndex(p => p.id === product.id);
    if (idx !== -1) {
      products[idx] = product;
    } else {
      products.push(product);
    }
  } else {
    product.id = 'prod-' + Date.now();
    products.push(product);
  }
  setStoredData('alfatih_products', products);
  return product;
};
export const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  setStoredData('alfatih_products', filtered);
};

export const getProjects = () => getStoredData('alfatih_projects', defaultProjects);
export const saveProject = (project) => {
  const projects = getProjects();
  if (project.id) {
    const idx = projects.findIndex(p => p.id === project.id);
    if (idx !== -1) {
      projects[idx] = project;
    } else {
      projects.push(project);
    }
  } else {
    project.id = 'proj-' + Date.now();
    projects.push(project);
  }
  setStoredData('alfatih_projects', projects);
  return project;
};
export const deleteProject = (id) => {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  setStoredData('alfatih_projects', filtered);
};

export const getTestimonials = () => getStoredData('alfatih_testimonials', defaultTestimonials);
export const saveTestimonial = (testimonial) => {
  const testimonials = getTestimonials();
  if (testimonial.id) {
    const idx = testimonials.findIndex(t => t.id === testimonial.id);
    if (idx !== -1) {
      testimonials[idx] = testimonial;
    } else {
      testimonials.push(testimonial);
    }
  } else {
    testimonial.id = 'test-' + Date.now();
    testimonials.push(testimonial);
  }
  setStoredData('alfatih_testimonials', testimonials);
  return testimonial;
};
export const deleteTestimonial = (id) => {
  const testimonials = getTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);
  setStoredData('alfatih_testimonials', filtered);
};

export const getFaqs = () => getStoredData('alfatih_faqs', defaultFaqs);
export const saveFaq = (faq) => {
  const faqs = getFaqs();
  if (faq.id) {
    const idx = faqs.findIndex(f => f.id === faq.id);
    if (idx !== -1) {
      faqs[idx] = faq;
    } else {
      faqs.push(faq);
    }
  } else {
    faq.id = 'faq-' + Date.now();
    faqs.push(faq);
  }
  setStoredData('alfatih_faqs', faqs);
  return faq;
};
export const deleteFaq = (id) => {
  const faqs = getFaqs();
  const filtered = faqs.filter(f => f.id !== id);
  setStoredData('alfatih_faqs', filtered);
};

export const getCategories = () => getStoredData('alfatih_categories', defaultCategories);
export const saveCategory = (cat) => {
  const categories = getCategories();
  if (cat.id) {
    const idx = categories.findIndex(c => c.id === cat.id);
    if (idx !== -1) {
      categories[idx] = cat;
    } else {
      categories.push(cat);
    }
  } else {
    cat.id = 'cat-' + Date.now();
    categories.push(cat);
  }
  setStoredData('alfatih_categories', categories);
  return cat;
};
export const deleteCategory = (id) => {
  const categories = getCategories();
  const filtered = categories.filter(c => c.id !== id);
  setStoredData('alfatih_categories', filtered);
};

export const getContact = () => getStoredData('alfatih_contact', defaultContact);
export const saveContact = (contact) => {
  setStoredData('alfatih_contact', contact);
  return contact;
};

// Generates WhatsApp Link
export const getWhatsAppLink = (phoneNumber, text) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};
