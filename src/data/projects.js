export const projectCategories = [
  "Web Development",
  "Excel & Data",
  "Academic Projects",
  "Design & Creative",
  "Documents & Reports",
  "Other Works",
];

export const projects = [
  {
    id: "bimbel-english-private",
    title: "EduPath Academy — Les Privat Bahasa Inggris",
    category: "Web Development",
    description:
      "Landing page layanan les privat Bahasa Inggris untuk siswa SD, SMP, SMA, mahasiswa, dan dewasa. Memuat program belajar, paket harga, keunggulan layanan, FAQ, kontak WhatsApp, tautan media sosial, serta pilihan tema terang dan gelap dengan desain responsif untuk desktop dan mobile.",
    visual: "tutoring",
    tools: ["React", "Vite", "Tailwind CSS", "JavaScript / JSX", "Node.js dan npm", "Vercel"],
    toolDetails: [
      {
        name: "React",
        description: "Membangun antarmuka website yang modular dan interaktif.",
      },
      {
        name: "Vite",
        description: "Build tool dan dev server untuk menjalankan proyek serta memudahkan development dan production build.",
      },
      {
        name: "Tailwind CSS",
        description: "Styling modern dan responsif agar tampilan lebih konsisten dan cepat dibuat.",
      },
      {
        name: "JavaScript / JSX",
        description: "Logika website, data program, FAQ, CTA, dan interaksi antarmuka.",
      },
      {
        name: "Node.js dan npm",
        description: "Menginstal dependency, menjalankan proyek lokal, dan membuat production build.",
      },
      {
        name: "Vercel",
        description: "Platform yang digunakan untuk deployment website secara online.",
      },
    ],
    deploymentStatus: "deployed",
    images: [
      { src: "/images/project-english-tutoring-01.webp", alt: "Halaman utama website bimbel Bahasa Inggris", width: 1400, height: 640 },
      { src: "/images/project-english-tutoring-02.webp", alt: "Tampilan terang website bimbel Bahasa Inggris", width: 1400, height: 640 },
      { src: "/images/project-english-tutoring-03.webp", alt: "Cuplikan website bimbel Bahasa Inggris", width: 1400, height: 634 },
      { src: "/images/project-english-tutoring-04.webp", alt: "Cuplikan halaman website bimbel Bahasa Inggris", width: 1400, height: 636 },
      { src: "/images/project-english-tutoring-05.webp", alt: "Bagian layanan website bimbel Bahasa Inggris", width: 1400, height: 639 },
      { src: "/images/project-english-tutoring-06.webp", alt: "Cuplikan halaman website bimbel Bahasa Inggris", width: 1400, height: 639 },
      { src: "/images/project-english-tutoring-07.webp", alt: "Bagian ajakan dan penutup website bimbel Bahasa Inggris", width: 1400, height: 638 },
    ],
    demoUrl: "https://edupath-academy1.vercel.app/",
    repositoryUrl: null,
  },
  {
    id: "absensi-magang-diskominfo",
    title: "Website Absensi Magang DISKOMINFO",
    category: "Web Development",
    description: "Website absensi magang dengan tampilan halaman masuk dan dashboard.",
    images: [
      { src: "/images/project-internship-attendance-01.webp", alt: "Halaman masuk website absensi magang DISKOMINFO", width: 1400, height: 632 },
      { src: "/images/project-internship-attendance-02.webp", alt: "Beranda dashboard admin website absensi magang", width: 1400, height: 632 },
      { src: "/images/project-internship-attendance-03.webp", alt: "Beranda dashboard pemagang website absensi", width: 1400, height: 632 },
      { src: "/images/project-internship-attendance-04.webp", alt: "Halaman izin pemagang website absensi", width: 1400, height: 626 },
      { src: "/images/project-internship-attendance-05.webp", alt: "Halaman kegiatan pada dashboard admin", width: 1400, height: 633 },
      { src: "/images/project-internship-attendance-06.webp", alt: "Halaman kegiatan pada dashboard pemagang", width: 1400, height: 633 },
      { src: "/images/project-internship-attendance-07.webp", alt: "Halaman pengelolaan pesan admin", width: 1400, height: 622 },
      { src: "/images/project-internship-attendance-08.webp", alt: "Halaman pesan pemagang", width: 1400, height: 630 },
      { src: "/images/project-internship-attendance-09.webp", alt: "Halaman tambah akun admin", width: 1400, height: 633 },
    ],
    tools: [],
    demoUrl: null,
    repositoryUrl: null,
  },
  {
    id: "dataset-amazon-disney",
    title: "Dataset Amazon Prime & Disney+",
    category: "Excel & Data",
    description:
      "Kumpulan dataset CSV dan workbook Excel terkait katalog film dan acara TV Amazon Prime serta Disney+.",
    visual: "spreadsheet",
    tools: ["Excel", "CSV"],
    images: [],
    files: [
      { label: "Workbook Excel", url: "/documents/finaldata.xlsx", type: "spreadsheet" },
      { label: "Dataset Amazon Prime (CSV)", url: "/documents/amazon-prime-titles.csv", type: "spreadsheet" },
      { label: "Dataset Disney+ (CSV)", url: "/documents/disney-plus-titles.csv", type: "spreadsheet" },
      { label: "Laporan analisis (PDF)", url: "/documents/laporan-analisis-amazon-prime.pdf", type: "document" },
    ],
    demoUrl: null,
    repositoryUrl: null,
  },
  {
    id: "leafcare-pumpkin",
    title: "LeafCare Pumpkin",
    category: "Academic Projects",
    description:
      "Antarmuka web sistem diagnosis kesehatan tanaman labu; dokumentasi proyek menyebut deep learning.",
    tools: ["Python 3.9+", "Flask", "CNN / deep learning"],
    images: [
      { src: "/images/project-leafcare-01.webp", alt: "Halaman utama LeafCare Pumpkin", width: 990, height: 466 },
      { src: "/images/project-leafcare-02.webp", alt: "Panel deteksi LeafCare Pumpkin", width: 1182, height: 574 },
      { src: "/images/project-leafcare-03.webp", alt: "Contoh tampilan hasil diagnosis LeafCare", width: 1082, height: 529 },
      { src: "/images/project-leafcare-04.webp", alt: "Katalog diagnosis LeafCare Pumpkin", width: 529, height: 245 },
      { src: "/images/project-leafcare-05.webp", alt: "Informasi spesifikasi sistem LeafCare Pumpkin", width: 529, height: 246 },
    ],
    files: [],
    demoUrl: null,
    repositoryUrl: null,
  },
  {
    id: "prediksi-penjualan-beras",
    title: "Prediksi Penjualan Beras",
    category: "Academic Projects",
    description:
      "Antarmuka web untuk prediksi penjualan beras yang juga menampilkan pengujian akurasi MAPE.",
    images: [
      { src: "/images/project-rice-prediction-01.webp", alt: "Halaman utama aplikasi prediksi penjualan beras", width: 1200, height: 540 },
      { src: "/images/project-rice-prediction-02.webp", alt: "Tampilan pengujian MAPE pada aplikasi prediksi beras", width: 1400, height: 629 },
      { src: "/images/project-rice-prediction-03.webp", alt: "Tampilan hasil prediksi penjualan beras", width: 1400, height: 635 },
    ],
    tools: [],
    files: [],
    demoUrl: null,
    repositoryUrl: null,
  },
];
