// Animasi sederhana untuk anggota tim saat di-scroll menggunakan jQuery
$(document).ready(function () {

    // Mengambil semua elemen tim
    var teamMembers = $(".team-member");

    // Menyembunyikan semua anggota tim di awal
    teamMembers.hide();

    // Fungsi untuk mengecek apakah elemen terlihat di layar
    function isVisible(element) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();

        return elementBottom > windowTop && elementTop < windowBottom;
    }

    // Fungsi untuk menampilkan anggota tim
    function showTeamMembers() {
        teamMembers.each(function () {
            if (isVisible($(this))) {
                $(this).show();
                $(this).css("opacity", "1");
            }
        });
    }

    // Menjalankan fungsi saat halaman di-scroll
    $(window).on("scroll", function () {
        showTeamMembers();
    });

    // Menjalankan fungsi sekali saat halaman dimuat
    showTeamMembers();
});