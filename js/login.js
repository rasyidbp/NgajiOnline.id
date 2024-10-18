$(document).ready(function() {
    // Tangani pengiriman form login
    $('#login').on('submit', function(event) {
      event.preventDefault(); // Hentikan pengiriman form default
      var email = $('#loginEmail').val();
      var password = $('#loginPassword').val();
  
      // Validasi panjang kata sandi
      if (password.length < 6) {
        alert("Kata sandi harus memiliki minimal 6 karakter.");
        return; // Hentikan eksekusi jika validasi gagal
      }
  
      // Simulasikan proses login
      if (email && password) {
        alert("Login berhasil untuk: " + email);
      } else {
        alert("Silakan isi semua field.");
      }
    });
  
    // Tangani pengiriman form daftar
    $('#signup').on('submit', function(event) {
      event.preventDefault(); // Hentikan pengiriman form default
      var name = $('#signupName').val();
      var email = $('#signupEmail').val();
      var password = $('#signupPassword').val();
  
      // Validasi panjang kata sandi
      if (password.length < 6) {
        alert("Kata sandi harus memiliki minimal 6 karakter.");
        return; // Hentikan eksekusi jika validasi gagal
      }
  
      // Simulasikan proses daftar
      if (name && email && password) {
        alert("Daftar berhasil untuk: " + name);
      } else {
        alert("Silakan isi semua field.");
      }
    });
  });
  