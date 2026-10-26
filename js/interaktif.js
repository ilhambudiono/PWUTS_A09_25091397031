$(document).ready(function() {
    // 1. Hitung Omset Toko berdasarkan tanggal
    $(document).off('click', '#btn-hitung').on('click', '#btn-hitung', function() {
        let tgl = $('#tgl_omset').val();
        if (!tgl) {
            alert('Silakan pilih tanggal laporan terlebih dahulu.');
            return;
        }

        let totalOmset = "Rp 850.000";
        $('#total-omset-val').html(totalOmset).hide().fadeIn();
    });

    // 2. Simulasi Aturan Bisnis Ubah Status Cucian
    $(document).off('change', '.select-status').on('change', '.select-status', function() {
        let newStatus = $(this).val();
        let resi = $(this).data('resi');
        let statusBayar = $(this).data('bayar');
        let alertBox = $('#simulasi-alert');

        // Aturan bisnis: Tidak bisa diselesaikan jika belum lunas
        if (newStatus === 'Selesai' && statusBayar === 'Belum Lunas') {
            alertBox
                .css({'background-color': '#fee2e2', 'color': '#b91c1c', 'border': '1px solid #fecaca'})
                .html('Gagal: Cucian RES-' + resi + ' belum lunas, tidak bisa diubah ke Selesai!')
                .fadeIn();
            
            $(this).val('Sedang Diproses');
            return;
        }

        // Berhasil update status
        $('#status-txt-' + resi).text(newStatus);
        
        if (newStatus === 'Selesai') {
            $('#status-txt-' + resi).css({'color': '#27ae60'});
        } else if (newStatus === 'Siap Diambil') {
            $('#status-txt-' + resi).css({'color': '#d35400'});
        } else {
            $('#status-txt-' + resi).css({'color': '#2980b9'});
        }

        alertBox
            .css({'background-color': '#dcfce7', 'color': '#15803d', 'border': '1px solid #bbf7d0'})
            .html('Status RES-' + resi + ' berhasil diperbarui ke "' + newStatus + '"')
            .fadeIn();
    });
});