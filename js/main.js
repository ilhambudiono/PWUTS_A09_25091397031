$(document).ready(function () {

    // Simpan tampilan default dashboard
    const defaultDashboardHTML = $("#main-content").html();

    // Event Navigasi Ajax (Poin 2.a)
    $(".nav-ajax").on("click", function (e) {
        e.preventDefault();

        // Ganti styling tombol aktif
        $(".nav-ajax").removeClass("active");
        $(this).addClass("active");

        let targetPage = $(this).attr("data-page");

        if (targetPage === "home") {
            $("#main-content").hide().html(defaultDashboardHTML).fadeIn(200);
        } else {
            $("#main-content").html(`
                <div style="text-align:center; padding: 40px 0; color:#64748b;">
                    <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
                    <p style="margin-top:10px;">Memuat halaman via Ajax...</p>
                </div>
            `);

            $.ajax({
                url: targetPage,
                type: "GET",
                dataType: "html",
                success: function (response) {
                    $("#main-content").hide().html(response).fadeIn(200);
                },
                error: function () {
                    $("#main-content").html(`
                        <div style="background:#fee2e2; border:1px solid #fca5a5; color:#b91c1c; padding:16px; border-radius:8px;">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <strong>Gagal memuat halaman!</strong> Pastikan file <code>${targetPage}</code> sudah dibuat.
                        </div>
                    `);
                }
            });
        }
    });

});