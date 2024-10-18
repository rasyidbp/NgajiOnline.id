$(document).ready(function() {
    // Menangani pengiriman formulir
    $('.contact-form').on('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        
        // Mengambil nilai formulir
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        // Validasi sederhana
        if (name === '' || email === '' || message === '') {
            alert('Semua kolom harus diisi!');
            return;
        }

        // Mensimulasikan pengiriman yang berhasil
        alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim.');

        // Mengosongkan kolom formulir
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});