$(document).ready(function() {
    let countPelanggan = 2; // Menyesuaikan data dummy awal (Budi & Siti)

    // Gunakan event delegation agar tombol di halaman Ajax tetap terbaca
    $(document).off('submit', '#form-pelanggan').on('submit', '#form-pelanggan', function(e) {
        e.preventDefault();
        
        let isValid = true;
        let nama = $('#nama_pelanggan').val().trim();
        let hp = $('#no_hp').val().trim();
        let alamat = $('#alamat').val().trim();

        // Reset pesan error
        $('#err-nama, #err-hp, #err-alamat').hide();
        $('#form-alert').hide();

        // 1. Validasi Nama
        if (nama === '') {
            $('#err-nama').text('Nama pelanggan tidak boleh kosong!').show();
            isValid = false;
        } else if (nama.length < 3) {
            $('#err-nama').text('Nama minimal 3 karakter!').show();
            isValid = false;
        }

        // 2. Validasi No HP (08 / 628)
        let regexHp = /^(08|628)[0-9]{8,11}$/;
        if (hp === '') {
            $('#err-hp').text('Nomor HP tidak boleh kosong!').show();
            isValid = false;
        } else if (!regexHp.test(hp)) {
            $('#err-hp').text('Harus diawali 08/628 (10-13 digit)').show();
            isValid = false;
        }

        // 3. Validasi Alamat
        if (alamat === '') {
            $('#err-alamat').text('Alamat tidak boleh kosong!').show();
            isValid = false;
        }

        // Jika Semua Validasi Lolos
        if (isValid) {
            countPelanggan++;
            let idPlg = 'PLG-' + String(countPelanggan).padStart(3, '0');

            // Baris HTML baru yang akan disisipkan ke tabel
            let newRow = `
                <tr style="background-color: #f0fdf4; transition: background-color 1s;">
                    <td>
                        <strong style="color: #2c3e50;">${nama}</strong><br>
                        <small class="text-muted">ID: ${idPlg}</small>
                    </td>
                    <td>${hp}</td>
                    <td>${alamat}</td>
                </tr>
            `;

            // Tambahkan data baru ke paling atas tabel
            $('.custom-table tbody').prepend(newRow);

            // Tampilkan pesan sukses
            $('#form-alert')
                .css({'background-color': '#dcfce7', 'color': '#15803d', 'border': '1px solid #bbf7d0'})
                .html('<i class="fa-solid fa-circle-check"></i> Data pelanggan berhasil disimpan!')
                .fadeIn();
            
            // Reset isi form
            $('#form-pelanggan')[0].reset();
        } else {
            // Tampilkan pesan gagal jika ada field yang salah
            $('#form-alert')
                .css({'background-color': '#fee2e2', 'color': '#b91c1c', 'border': '1px solid #fecaca'})
                .html('<i class="fa-solid fa-triangle-exclamation"></i> Gagal menyimpan: Silakan periksa kembali field inputan.')
                .fadeIn();
        }
    });
});