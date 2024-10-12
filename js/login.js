document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen-elemen dari form login dan signup
    const loginForm = document.querySelector(".login-form form");
    const signupForm = document.querySelector(".signup-form form");
  
    // Fungsi untuk menangani login
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah form melakukan submit ke server (default)
      
      const email = loginForm.querySelector("input[type='text']").value;
      const password = loginForm.querySelector("input[type='password']").value;
  
      // Validasi sederhana
      if (email === "" || password === "") {
        alert("Mohon isi semua kolom.");
        return;
      }
  
      // Proses login
      console.log("Login dengan email:", email);
      console.log("Password:", password);
  
      // Setelah validasi, bisa kirim data ke server dengan AJAX atau fetch
      alert("Login sukses!");
    });
  
    // Fungsi untuk menangani signup
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah form melakukan submit ke server (default)
  
      const name = signupForm.querySelector("input[type='text']").value;
      const email = signupForm.querySelector("input[type='text']:nth-child(2)").value;
      const password = signupForm.querySelector("input[type='password']").value;
  
      // Validasi sederhana
      if (name === "" || email === "" || password === "") {
        alert("Mohon isi semua kolom.");
        return;
      }
  
      // Proses signup
      console.log("Signup dengan nama:", name);
      console.log("Email:", email);
      console.log("Password:", password);
  
      // Setelah validasi, bisa kirim data ke server dengan AJAX atau fetch
      alert("Signup sukses!");
    });
  });
  