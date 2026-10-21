document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const alertContainer = document.getElementById('alertContainer');

  loginForm.addEventListener('submit', function(e) {
    // Mencegah form diproses / dibehold apabila ada masukan tidak valid
    e.preventDefault();

    // Reset alert
    alertContainer.innerHTML = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Regex sederhana untuk validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = [];

    // Validasi 1: Email tidak boleh kosong
    if (email === '') {
      errors.push('Email / Username tidak boleh kosong!');
    } else if (!emailPattern.test(email)) { // Validasi 2: Format email harus valid
      errors.push('Format Email tidak valid!');
    }

    // Validasi 3: Password tidak boleh kosong
    if (password === '') {
      errors.push('Password tidak boleh kosong!');
    } else if (password.length < 6) { // Validasi 4: Minimal panjang password 6 karakter
      errors.push('Password minimal harus terdiri dari 6 karakter!');
    }

    // Tampilkan pesan error jika ditemukan masalah
    if (errors.length > 0) {
      let alertHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><ul>';
      errors.forEach(function(error) {
        alertHTML += `<li>${error}</li>`;
      });
      alertHTML += '</ul><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      
      alertContainer.innerHTML = alertHTML;
    } else {
      // Jika berhasil/memenuhi validasi
      alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Login Berhasil!</strong> Selamat datang kembali Admin UMKM Kerupuk Bantal.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;

      // Kosongkan form setelah berhasil
      loginForm.reset();
    }
  });
}); 