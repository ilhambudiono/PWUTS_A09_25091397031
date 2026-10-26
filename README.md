# UTS Pemrograman Web - Sistem Informasi Manajemen HOLA Laundry

Dokumentasi tugas UTS Mata Kuliah Pemrograman Web (Modul Admin & Master Data).

---

## 👤 Identitas Mahasiswa

* **Nama**: Ilham Budiono[cite: 7]
* **NIM**: 25091397031[cite: 7]
* **Kelompok / Modul**: PWL_A09 / Admin Panel & Kelola Master Data[cite: 7]
* **Program Studi**: D4 Manajemen Informatika, Fakultas Vokasi, Universitas Negeri Surabaya[cite: 7]

---

## 📌 Deskripsi Projek & Pembagian Fitur UTS

Projek ini merupakan ekosistem manajemen laundry **HOLA** berbasis web yang dirancang menggunakan HTML, Native CSS (Flexbox & Grid), JavaScript, dan jQuery Ajax[cite: 3, 7].

### Rincian Poin Tugas UTS:

1. **2.a Layout Utama (`index.html`) & Navigasi Ajax**[cite: 3]
   * Layout Dashboard Admin modern tanpa framework Bootstrap (Pure Native CSS)[cite: 3].
   * Navigasi top-bar asinkronus menggunakan jQuery Ajax (`$.ajax`) untuk memuat konten tanpa *reload* halaman[cite: 3].

2. **2.b Fitur Interaktif (`pages/interaktif.html`)**[cite: 3]
   * **Filter & Kalkulasi Omset Harian (KF-07)**: Menghitung akumulasi pendapatan bersih dari transaksi yang berstatus lunas[cite: 11].
   * **Simulasi Validasi Status Cucian (KF-04)**: Menerapkan aturan bisnis di mana status transaksi tidak dapat diubah menjadi "Selesai" apabila pembayaran masih "Belum Lunas"[cite: 11].

3. **2.c Form Master Data Pelanggan & Validasi jQuery (`pages/transaksi.html`)**[cite: 3, 11]
   * Form pendaftaran pelanggan baru yang terhubung dengan entitas database `pelanggan`[cite: 11].
   * Validasi *client-side* menggunakan jQuery & Regex (pengecekan wajib isi, minimal karakter nama, dan format nomor HP Indonesia)[cite: 3].

---

## 📂 Struktur Folder Repository

```text
PWUTS_PWL_A09_25091397031/
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