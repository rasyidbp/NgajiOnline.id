
$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on("click", function (event) {
        var target = $(this.getAttribute("href"));
        if (target.length) {
            event.preventDefault();
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000
                );
        }
    });

    // Animate elements on scroll
    function animateOnScroll() {
        $(".animate-on-scroll").each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Navbar background change on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    // Form submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert("Thank you for your message. We will get back to you soon!");
        this.reset();
    });
});
