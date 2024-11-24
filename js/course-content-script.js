$(document).ready(function() {
    // Handle quiz submission
    $('#quiz-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get selected answers
        var q1Answer = $('input[name="q1"]:checked').val();
        var q2Answer = $('input[name="q2"]:checked').val();
        
        // Check answers (you can replace this with your own logic)
        var score = 0;
        if (q1Answer === 'b') score++;
        if (q2Answer === 'b') score++;
        
        // Display result
        alert('Anda menjawab ' + score + ' dari 2 pertanyaan dengan benar!');
    });

    // Handle navigation buttons
    $('#prev-lesson').on('click', function() {
        alert('Navigasi ke pelajaran sebelumnya');
        // Add logic to navigate to the previous lesson
    });

    $('#next-lesson').on('click', function() {
        alert('Navigasi ke pelajaran selanjutnya');
        // Add logic to navigate to the next lesson
    });

    // Handle logout
    $("#logout-btn").on("click", function(e) {
        e.preventDefault();
        // Here you would typically handle the logout process
        alert("Logging out...");
        window.location.href = "index.html"; // Redirect to home page after logout
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