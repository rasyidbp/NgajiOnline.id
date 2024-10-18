$(document).ready(function() {
    // Animasi fade-in untuk elemen dengan kelas 'fade-in-element'
    $('.fade-in-element').hide().fadeIn(1000);

    // Efek hover pada tombol
    $('.btn').hover(
        function() {
            $(this).addClass('shadow-lg'); // Menambahkan efek bayangan saat hover
        },
        function() {
            $(this).removeClass('shadow-lg'); // Menghapus efek bayangan saat mouse keluar
        }
    );

    // Validasi form pendaftaran
    $('#signup-form').on('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default
        const email = $(this).find('input[type="email"]').val();

        // Cek apakah email valid
        if (validateEmail(email)) {
            alert('Terima kasih telah mendaftar!'); // Tampilkan pesan sukses
            $(this).trigger('reset'); // Reset form setelah pendaftaran
        } else {
            alert('Silakan masukkan alamat email yang valid.'); // Tampilkan pesan kesalahan
        }
    });

  
});