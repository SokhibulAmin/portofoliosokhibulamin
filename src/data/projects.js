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
    title: "Website Bimbel English Private",
    category: "Web Development",
    description: "Dokumentasi tampilan website bimbingan Bahasa Inggris privat.",
    visual: "tutoring",
    tools: [],
    images: [
      { src: "/images/projects/bimbel-english-private/bimbel-03.webp", alt: "Cuplikan website bimbel Bahasa Inggris", width: 1400, height: 634 },
      { src: "/images/projects/bimbel-english-private/bimbel-04.webp", alt: "Cuplikan halaman website bimbel Bahasa Inggris", width: 1400, height: 636 },
      { src: "/images/projects/bimbel-english-private/bimbel-06.webp", alt: "Cuplikan halaman website bimbel Bahasa Inggris", width: 1400, height: 639 },
      { src: "/images/projects/bimbel-english-private/bimbel-07.webp", alt: "Cuplikan halaman website bimbel Bahasa Inggris", width: 1400, height: 638 },
    ],
    demoUrl: null,
    repositoryUrl: null,
  },
  {
    id: "absensi-magang-diskominfo",
    title: "Website Absensi Magang DISKOMINFO",
    category: "Web Development",
    description: "Website absensi magang dengan tampilan halaman masuk dan dashboard.",
    images: [
      { src: "/images/projects/magang-absensi/landing-page.webp", alt: "Tampilan halaman awal website absensi magang", width: 1200, height: 542 },
      { src: "/images/projects/magang-absensi/magang-admin.webp", alt: "Dashboard website absensi magang", width: 1400, height: 632 },
      { src: "/images/projects/magang-absensi/magang-pemagang.webp", alt: "Tampilan dashboard pemagang", width: 1400, height: 632 },
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
      { src: "/images/projects/leafcare/leafcare-01.webp", alt: "Halaman utama LeafCare Pumpkin", width: 990, height: 466 },
      { src: "/images/projects/leafcare/leafcare-02.webp", alt: "Panel deteksi LeafCare Pumpkin", width: 1182, height: 574 },
      { src: "/images/projects/leafcare/leafcare-03.webp", alt: "Contoh tampilan hasil diagnosis LeafCare", width: 1082, height: 529 },
      { src: "/images/projects/leafcare/leafcare-04.webp", alt: "Katalog diagnosis LeafCare Pumpkin", width: 529, height: 245 },
      { src: "/images/projects/leafcare/leafcare-05.webp", alt: "Informasi spesifikasi sistem LeafCare Pumpkin", width: 529, height: 246 },
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
      { src: "/images/projects/prediksi-beras/beras-01.webp", alt: "Halaman utama aplikasi prediksi penjualan beras", width: 1200, height: 540 },
      { src: "/images/projects/prediksi-beras/beras-02.webp", alt: "Tampilan pengujian MAPE pada aplikasi prediksi beras", width: 1400, height: 629 },
      { src: "/images/projects/prediksi-beras/beras-03.webp", alt: "Tampilan hasil prediksi penjualan beras", width: 1400, height: 635 },
    ],
    tools: [],
    files: [],
    demoUrl: null,
    repositoryUrl: null,
  },
];
