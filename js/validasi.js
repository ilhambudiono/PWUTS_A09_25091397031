$(document).ready(function () {

    // Regex Validasi Nomor HP Indonesia (Hanya angka, diawali 08, panjang 10-14 digit)
    const phoneRegex = /^08[0-9]{8,12}$/;

    // Event Submit Form Pelanggan
    $("#form-pelanggan").on("submit", function (e) {
        e.preventDefault();

        // Reset status error sebelumnya
        $(".form-control").removeClass("is-invalid is-valid");
        $(".error-msg").text("");
        $("#form-alert").hide();

        let isValid = true;

        // 1. Validasi Nama Pelanggan
        let nama = $("#nama_pelanggan").val().trim();
        if (nama === "") {
            $("#nama_pelanggan").addClass("is-invalid");
            $("#err-nama").text("Nama pelanggan wajib diisi!");
            isValid = false;
        } else if (nama.length < 3) {
            $("#nama_pelanggan").addClass("is-invalid");
            $("#err-nama").text("Nama minimal terdiri dari 3 karakter.");
            isValid = false;
        } else {
            $("#nama_pelanggan").addClass("is-valid");
        }

        // 2. Validasi Nomor HP
        let hp = $("#no_hp").val().trim();
        if (hp === "") {
            $("#no_hp").addClass("is-invalid");
            $("#err-hp").text("Nomor HP/WhatsApp wajib diisi!");
            isValid = false;
        } else if (!phoneRegex.test(hp)) {
            $("#no_hp").addClass("is-invalid");
            $("#err-hp").text("Format nomor HP tidak valid (contoh: 081234567890).");
            isValid = false;
        } else {
            $("#no_hp").addClass("is-valid");
        }

        // 3. Validasi Kategori Member
        let kategori = $("#kategori_member").val();
        if (kategori === "") {
            $("#kategori_member").addClass("is-invalid");
            $("#err-kategori").text("Silakan pilih kategori member.");
            isValid = false;
        } else {
            $("#kategori_member").addClass("is-valid");
        }

        // Jika semua input valid
        if (isValid) {
            $("#form-alert")
                .removeClass("alert-error")
                .addClass("alert-success")
                .html(`<i class="fa-solid fa-circle-check me-2"></i> <strong>Berhasil!</strong> Data pelanggan <strong>${nama}</strong> telah disimpan ke database master.`)
                .slideDown();

            // Reset field form
            $("#form-pelanggan")[0].reset();
            $(".form-control").removeClass("is-valid");
        } else {
            $("#form-alert")
                .removeClass("alert-success")
                .addClass("alert-error")
                .html(`<i class="fa-solid fa-triangle-exclamation me-2"></i> <strong>Gagal menyimpan:</strong> Mohon periksa kembali field bergaris merah.`)
                .slideDown();
        }
    });

    // Reset error saat tombol reset diklik
    $("#btn-reset-form").on("click", function () {
        $(".form-control").removeClass("is-invalid is-valid");
        $(".error-msg").text("");
        $("#form-alert").slideUp();
    });

});
