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

    // Mobile menu toggle
    $(".navbar-toggler").on("click", function () {
        $(".navbar-collapse").slideToggle();
    });

    // Close mobile menu on click outside
    $(document).on("click", function (event) {
        var $navbar = $(".navbar-collapse");
        var $toggle = $(".navbar-toggler");

        if (
            !$toggle.is(event.target) &&
            $toggle.has(event.target).length === 0 &&
            !$navbar.is(event.target) &&
            $navbar.has(event.target).length === 0 &&
            $navbar.hasClass("show")
        ) {
            $navbar.slideUp();
            $toggle.removeClass("collapsed");
            $toggle.attr("aria-expanded", "false");
        }
    });

    // Animate stats numbers
    function animateStats() {
        $(".stats-number").each(function () {
            var $this = $(this);
            var target = parseInt($this.attr("data-target"));
            var current = 0;
            var increment = target / 100;

            var timer = setInterval(function () {
                current += increment;
                $this.text(Math.round(current).toLocaleString());

                if (current >= target) {
                    clearInterval(timer);
                    $this.text(target.toLocaleString());
                }
            }, 20);
        });
    }

    // Trigger stats animation when the section comes into view
    var statsSection = $(".stats-item").parent().parent();
    var statsSectionTop = statsSection.offset().top;
    var statsSectionBottom = statsSectionTop + statsSection.outerHeight();
    var windowHeight = $(window).height();
    var hasAnimated = false;

    $(window).on("scroll", function () {
        var scrollPosition = $(window).scrollTop() + windowHeight;

        if (
            scrollPosition > statsSectionTop &&
            scrollPosition < statsSectionBottom &&
            !hasAnimated
        ) {
            animateStats();
            hasAnimated = true;
        }
    });
});
