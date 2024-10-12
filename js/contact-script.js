
        // Simple form submission handling
        document.querySelector('.contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        });

        // Simple animation for FAQ items on scroll
        var faqItems = document.querySelectorAll('.faq-item');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        faqItems.forEach(function (item) {
            item.style.opacity = 0;
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(item);
        });
    