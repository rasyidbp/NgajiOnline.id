$(document).ready(function() {
    // Simulate user data (replace with actual data fetching)
    const userData = {
        name: "Ahmad Fauzi",
        email: "ahmad.fauzi@example.com",
        phone: "+62123456789",
        address: "Jl. Contoh No. 123, Jakarta",
        birthDate: "1990-01-01",
        bio: "Saya adalah seorang pelajar Al-Qur'an yang bersemangat.",
        memberSince: "January 2023",
        profilePicture: "https://via.placeholder.com/150"
    };

    // Populate form fields with user data
    $("#name").val(userData.name);
    $("#email").val(userData.email);
    $("#phone").val(userData.phone);
    $("#address").val(userData.address);
    $("#birth-date").val(userData.birthDate);
    $("#bio").val(userData.bio);

    // Update user information
    $("#profile-name").text(userData.name);
    $("#member-since").text(userData.memberSince);
    $("#profile-picture").attr("src", userData.profilePicture);

    // Handle profile picture upload
    $("#profile-picture-input").on("change", function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $("#profile-picture").attr("src", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle profile form submission
    $("#profile-form").on("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just log the data
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        alert("Profil berhasil diperbarui!");
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

