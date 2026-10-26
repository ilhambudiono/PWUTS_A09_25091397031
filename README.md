# UTS Pemrograman Web - Sistem Informasi Manajemen HOLA Laundry

Dokumentasi tugas UTS Mata Kuliah Pemrograman Web untuk modul Admin & Master Data.

---

## 👤 Identitas Mahasiswa

* **Nama**: Ilham Budiono
* **NIM**: 25091397031
* **Kelompok / Modul**: PWL_A09 / Admin Panel & Kelola Master Data
* **Program Studi**: D4 Manajemen Informatika, Fakultas Vokasi, Universitas Negeri Surabaya

---

## 📌 Deskripsi Projek & Pembagian Fitur UTS

Projek ini merupakan bagian dari aplikasi manajemen laundry HOLA berbasis web yang dirancang menggunakan HTML, Native CSS (Flexbox & Grid), JavaScript, dan jQuery Ajax.

### Rincian Fitur yang Dikerjakan:

1. **Layout Utama (`index.html`) & Navigasi Ajax (Poin 2.a)**
   * Layout Dashboard Admin modern tanpa framework Bootstrap (Pure Native CSS).
   * Navigasi asinkronus menggunakan jQuery Ajax (`$.ajax`) untuk memuat halaman tanpa reload browser.

2. **Fitur Interaktif (`pages/interaktif.html`) (Poin 2.b)**
   * **Filter Omset Harian**: Menghitung total pendapatan dari transaksi yang berstatus lunas.
   * **Simulasi Status Cucian**: Validasi aturan bisnis di mana status transaksi tidak bisa diubah menjadi "Selesai" jika status pembayaran belum lunas.

3. **Form Master Data Pelanggan (`pages/transaksi.html`) (Poin 2.c)**
   * Form pendaftaran pelanggan baru (terhubung dengan entitas database pelanggan).
   * Validasi client-side menggunakan jQuery & Regex (pengecekan wajib isi, minimal karakter nama, dan format nomor HP).

---

## 📂 Struktur Folder Repository

```text
PWUTS_A09_25091397031/
├── index.html              # Layout Utama Dashboard Admin (2.a)
├── README.md               # Dokumentasi Proyek
├── pages/
│   ├── interaktif.html     # Modul Laporan Omset & Kelola Status (2.b)
│   └── transaksi.html      # Form Master Data Pelanggan (2.c)
├── css/
│   └── style.css           # Styling Native CSS (Flexbox/Grid)
├── js/
│   ├── main.js             # Engine Navigasi Ajax
│   ├── interaktif.js       # Logika Interaktif Omset & Status
│   └── validasi.js         # Engine Validasi jQuery Form
└── database/
    └── hola_laundry.sql    # Import Database MySQL