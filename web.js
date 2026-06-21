const mulaiBtn = document.getElementById("mulai");
const halamanAwal = document.getElementById("halaman-awal");
const halamanUtama = document.getElementById("halaman-utama");
const musik = document.getElementById("musik");
const judul = document.getElementById("judul");
const card = document.querySelector(".card");
const selesai = document.getElementById("selesai");

function mulaiTyping() {
  const teks = "Selamat Ulang Tahun, Bang Ivan...🎉🎉";

  judul.innerHTML = "";

  let i = 0;

  function ketik() {
    if (i < teks.length) {
      judul.innerHTML += teks.charAt(i);
      i++;
      setTimeout(ketik, 70);
    }
  }

  setTimeout(ketik, 200);
}

mulaiBtn.addEventListener("click", function () {
  halamanAwal.style.opacity = "0";

  setTimeout(function () {
    halamanAwal.style.display = "none";
    halamanUtama.style.display = "flex";

    setTimeout(function () {
      halamanUtama.style.visibility = "visible";
      halamanUtama.style.opacity = "1";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

      mulaiTyping();

      musik.play().catch(function (err) {
        console.log("Audio error:", err);
      });
    }, 500);
  }, 500);
});
