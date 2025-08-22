<<<<<<< HEAD

=======
// scripts/load-navbar.js
>>>>>>> c1855f9a3a632c86a5055b2040364529aaf01e10
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => {
      console.error("Failed to load navbar:", error);
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> c1855f9a3a632c86a5055b2040364529aaf01e10
