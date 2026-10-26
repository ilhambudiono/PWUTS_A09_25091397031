$(document).ready(function() {
    
    // Function untuk memperbarui icon & teks tombol mode
    function updateThemeUI(isDark) {
        if (isDark) {
            $('body').addClass('dark-mode');
            $('#btn-theme').html('<i class="fa-solid fa-sun"></i> <span id="theme-text">Terang</span>');
        } else {
            $('body').removeClass('dark-mode');
            $('#btn-theme').html('<i class="fa-solid fa-moon"></i> <span id="theme-text">Malam</span>');
        }
    }

    // 1. Cek Preference Mode dari LocalStorage saat halaman pertama kali dimuat
    let savedTheme = localStorage.getItem('hola-theme');
    if (savedTheme === 'dark') {
        updateThemeUI(true);
    } else {
        updateThemeUI(false);
    }

    // 2. Event Listener Klik Tombol Switch Theme (Malam/Terang)
    $(document).off('click', '#btn-theme').on('click', '#btn-theme', function(e) {
        e.preventDefault();
        
        let isDarkNow = $('body').hasClass('dark-mode');
        if (!isDarkNow) {
            localStorage.setItem('hola-theme', 'dark');
            updateThemeUI(true);
        } else {
            localStorage.setItem('hola-theme', 'light');
            updateThemeUI(false);
        }
    });

    // 3. Navigasi Hyperlink Ajax (Poin 2.a UTS)
    $('.nav-ajax').on('click', function(e) {
        e.preventDefault();

        // Highlight tab yang aktif
        $('.nav-ajax').removeClass('active');
        $(this).addClass('active');

        let targetPage = $(this).data('page');

        // Jika klik Dashboard Home, reload ke kondisi utama
        if (targetPage === 'home') {
            location.reload(); 
            return;
        }

        // Muat konten modul 2.b / 2.c secara Ajax tanpa reload
        $('#main-content').fadeOut(150, function() {
            $(this).load(targetPage, function() {
                $(this).fadeIn(150);
            });
        });
    });

});