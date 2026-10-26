$(document).ready(function () {

    // 1. Logika Kalkulasi Omset (KF-07)
    $("#btn-hitung-omset").on("click", function () {
        let tgl = $("#filter-tanggal").val();

        if (tgl === "2026-10-26") {
            $("#total-omset-val").text("Rp 850.000");
            $("#total-transaksi-lunas").text("Dari 5 Transaksi Lunas");
        } else {
            $("#total-omset-val").text("Rp 420.000");
            $("#total-transaksi-lunas").text("Dari 3 Transaksi Lunas");
        }
    });

    // 2. Logika Aturan Validasi Perubahan Status (KF-04)
    $(".select-status").on("change", function () {
        let resiId = $(this).attr("data-resi");
        let newStatus = $(this).val();
        let paymentStatus = $(`#pay-${resiId}`).text().trim();

        // Validasi Aturan Bisnis: Jika Belum Lunas, TIDAK BOLEH "Selesai" (Poin 3.5 Proposal)
        if (newStatus === "Selesai" && paymentStatus === "Belum Lunas") {
            $("#simulasi-alert")
                .removeClass("alert-success")
                .addClass("alert-error")
                .html(`<i class="fa-solid fa-triangle-exclamation me-2"></i> <strong>Peringatan Validasi:</strong> Resi RES-${resiId} tidak dapat diubah ke status "Selesai" karena pembayaran masih <strong>Belum Lunas</strong>!`)
                .slideDown();

            // Kembalikan pilihan ke status awal
            $(this).val("Sedang Diproses");
        } else {
            // Update status visual
            $(`#status-${resiId}`).text(newStatus);

            $("#simulasi-alert")
                .removeClass("alert-error")
                .addClass("alert-success")
                .html(`<i class="fa-solid fa-circle-check me-2"></i> Status resi RES-${resiId} berhasil diperbarui menjadi <strong>${newStatus}</strong>.`)
                .slideDown();
        }
    });

});