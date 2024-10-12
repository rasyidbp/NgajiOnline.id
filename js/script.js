
        // Simple form submission handling
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var email = this.querySelector('input[type="email"]').value;
            alert('Thank you for signing up with email: ' + email + '. We\'ll be in touch soon!');
            this.reset();
        });

        // Smooth scrolling for navigation links
        var links = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    var targetTop = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    