# Panduan Deployment ke Vercel

Panduan ini akan membantu Anda mengunggah (deploy) website Disnaker Kabupaten Bekasi ke Vercel agar dapat diakses secara online.

## Prasyarat
1.  Akun **GitHub** (atau GitLab/Bitbucket).
2.  Akun **Vercel** (bisa login menggunakan akun GitHub).
3.  **Git** terinstall di komputer Anda.

---

## Metode 1: Integrasi GitHub (Direkomendasikan)
Metode ini paling baik karena setiap kali Anda melakukan perubahan (push) ke GitHub, website akan otomatis terupdate.

### Langkah 1: Siapkan Repository Git
1.  Buka terminal (Command Prompt/PowerShell) di folder proyek ini.
2.  Inisialisasi Git (jika belum):
    ```bash
    git init
    ```
3.  Tambahkan semua file:
    ```bash
    git add .
    ```
4.  Buat commit pertama:
    ```bash
    git commit -m "Initial commit - Disnaker Website"
    ```

### Langkah 2: Push ke GitHub
1.  Buat repository baru di [GitHub](https://github.com/new). Beri nama (misal: `disnaker-bekasi-web`).
2.  Jangan centang "Initialize with README".
3.  Salin perintah untuk "push an existing repository from the command line". Contohnya:
    ```bash
    git remote add origin https://github.com/USERNAME_ANDA/disnaker-bekasi-web.git
    git branch -M main
    git push -u origin main
    ```
4.  Jalankan perintah tersebut di terminal Anda.

### Langkah 3: Import ke Vercel
1.  Buka dashboard [Vercel](https://vercel.com/dashboard).
2.  Klik tombol **"Add New..."** > **"Project"**.
3.  Pilih **"Continue with GitHub"** (jika diminta).
4.  Cari repository `disnaker-bekasi-web` yang baru Anda buat, lalu klik **"Import"**.

### Langkah 4: Konfigurasi Project
1.  **Project Name**: Biarkan default atau ubah sesuai keinginan.
2.  **Framework Preset**: Pilih **"Other"** (karena ini website HTML/JS statis murni).
3.  **Root Directory**: Biarkan `./` (kosong).
4.  **Build Command**: Kosongkan.
5.  **Output Directory**: Kosongkan.
6.  Klik **"Deploy"**.

### Selesai!
Tunggu beberapa detik hingga proses selesai. Vercel akan memberikan URL (domain) untuk website Anda (misal: `disnaker-bekasi-web.vercel.app`).

---

## Metode 2: Vercel CLI (Manual dari Komputer)
Jika Anda tidak ingin menggunakan GitHub, Anda bisa upload langsung dari komputer.

1.  Pastikan Anda memiliki Node.js terinstall.
2.  Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```
3.  Login ke Vercel:
    ```bash
    vercel login
    ```
4.  Jalankan perintah deploy di folder proyek:
    ```bash
    vercel
    ```
5.  Ikuti petunjuk di layar (tekan Enter untuk opsi default):
    -   *Set up and deploy?* **Y**
    -   *Which scope?* **(Pilih akun Anda)**
    -   *Link to existing project?* **N**
    -   *Project name?* **disnaker-web**
    -   *In which directory?* **./**
    -   *Want to modify these settings?* **N**

Website Anda akan live dalam hitungan detik!

---

## Catatan Penting
-   Karena website ini menggunakan **Tailwind CSS via CDN**, Anda tidak perlu melakukan proses "Build" (seperti `npm run build`). Website langsung siap pakai.
-   Pastikan struktur folder tetap rapi agar link antar halaman (seperti `../assets/`) tetap berfungsi.
