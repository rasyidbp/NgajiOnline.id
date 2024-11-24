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
    $("#user-name, #profile-name").text(userData.name);
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

        alert("Profile updated successfully!");
    });

    // Learning progress chart
    const ctx = document.getElementById('learningChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Learning Progress',
                data: [5, 15, 10, 20],
                borderColor: 'rgb(22, 163, 74)',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Handle logout
    $("#logout-btn").on("click", function(e) {
        e.preventDefault();
        // Here you would typically handle the logout process
        alert("Logging out...");
        window.location.href = "index.html"; // Redirect to home page after logout
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
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