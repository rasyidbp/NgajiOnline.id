

        // Simple animation for team members on scroll
        var teamMembers = document.querySelectorAll('.team-member');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        teamMembers.forEach(function (member) {
            member.style.opacity = 0;
            member.style.transform = 'translateY(20px)';
            member.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(member);
        });
    