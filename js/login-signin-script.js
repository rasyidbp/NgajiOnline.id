
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
    $("#loginForm").on("submit", function (e) {
        e.preventDefault();
        // Here you would typically send the login data to your backend
        alert("Fungsi login akan diimplementasikan di sini.");
    });

    $("#signupForm").on("submit", function (e) {
        e.preventDefault();
        // Here you would typically send the signup data to your backend
        alert("Fungsi pendaftaran akan diimplementasikan di sini.");
    });
});

$(document).ready(function () {
    // Validasi form login
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Mencegah form dari pengiriman default

        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val().trim();

        if (!email || !password) {
            alert('Semua field harus diisi!');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Proses login jika semua validasi lolos
        alert('Login berhasil!');
        // Tambahkan kode untuk pengiriman data login ke server di sini
    });

    // Validasi form signup
    $('#signupForm').on('submit', function (e) {
        e.preventDefault(); // Mencegah form dari pengiriman default

        const name = $('#signupName').val().trim();
        const email = $('#signupEmail').val().trim();
        const password = $('#signupPassword').val().trim();
        const confirmPassword = $('#signupConfirmPassword').val().trim();

        if (!name || !email || !password || !confirmPassword) {
            alert('Semua field harus diisi!');
            return;
        }

        if (name.length > 16) {
            alert('Nama tidak boleh lebih dari 16 karakter!');
            return;
        }

        if (password.length > 8) {
            alert('Password tidak boleh lebih dari 8 karakter!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok!');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Proses signup jika semua validasi lolos
        alert('Pendaftaran berhasil!');
        // Tambahkan kode untuk pengiriman data signup ke server di sini
    });

    $('#signupForm').on('submit', function (e) {
        e.preventDefault(); // Mencegah form dari pengiriman default

        const name = $('#signupName').val().trim();
        const email = $('#signupEmail').val().trim();
        const password = $('#signupPassword').val().trim();
        const confirmPassword = $('#signupConfirmPassword').val().trim();
        const agreeTerms = $('#agreeTerms').is(':checked'); // Cek apakah checkbox dicentang

        if (!name || !email || !password || !confirmPassword) {
            alert('Semua field harus diisi!');
            return;
        }

        if (name.length > 16) {
            alert('Nama tidak boleh lebih dari 16 karakter!');
            return;
        }

        if (password.length > 8) {
            alert('Password tidak boleh lebih dari 8 karakter!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok!');
            return;
        }

        if (!agreeTerms) {
            alert('Anda harus menyetujui syarat dan ketentuan untuk melanjutkan!');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Proses signup jika semua validasi lolos
        alert('Pendaftaran berhasil!');
        // Tambahkan kode untuk pengiriman data signup ke server di sini
    });

});


