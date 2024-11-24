// settings-script.js
$(document).ready(function() {
    // Handle general settings form submission
    $('#general-settings-form').on('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('General settings form submitted');
        alert('Pengaturan umum berhasil disimpan!');
    });

    // Handle security settings form submission
    $('#security-settings-form').on('submit', function(e) {
        e.preventDefault();
        const currentPassword = $('#current-password').val();
        const newPassword = $('#new-password').val();
        const confirmPassword = $('#confirm-password').val();

        if (newPassword !== confirmPassword) {
            alert('Password baru dan konfirmasi password tidak cocok!');
            return;
        }

        // Here you would typically send the form data to your server
        console.log('Security settings form submitted');
        alert('Password berhasil diubah!');
    });

    // Handle notification settings form submission
    $('#notification-settings-form').on('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Notification settings form submitted');
        alert('Preferensi notifikasi berhasil disimpan!');
    });

    // Handle privacy settings form submission
    $('#privacy-settings-form').on('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Privacy settings form submitted');
        alert('Pengaturan privasi berhasil disimpan!');
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Handle logout
    $('#logout-btn').on('click', function(e) {
        e.preventDefault();
        // Here you would typically handle the logout process
        console.log('Logout clicked');
        alert('Anda telah keluar dari akun.');
        // Redirect to login page or home page after logout
        // window.location.href = 'index.html';
    });
});