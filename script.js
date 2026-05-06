let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
}

// Form kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("hasil").innerHTML = `
    <h3>Pesan Terkirim</h3>
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    <p>Pesan: ${pesan}</p>
  `;
});
