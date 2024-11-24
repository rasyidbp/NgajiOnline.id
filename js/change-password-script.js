$(document).ready(function() {
    // Handle change password form submission
    $("#change-password-form").on("submit", function(e) {
        e.preventDefault();
        const currentPassword = $("#current-password").val();
        const newPassword = $("#new-password").val();
        const confirmPassword = $("#confirm-password").val();

        // Basic client-side validation
        if (newPassword !== confirmPassword) {
            alert("Password baru dan konfirmasi password tidak cocok.");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password baru harus memiliki minimal 8 karakter.");
            return;
        }

        // Here you would typically send the password change request to your server
        // For demonstration, we'll just log the data
        console.log("Current Password:", currentPassword);
        console.log("New Password:", newPassword);

        alert("Password berhasil diubah!");
        this.reset();
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});