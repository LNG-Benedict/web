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

  // 1. transisi halaman awal
  halamanAwal.style.opacity = "0";

  setTimeout(function () {
    halamanAwal.style.display = "none";

    // 2. tampilkan halaman utama
    halamanUtama.style.display = "flex";

    setTimeout(function () {
      halamanUtama.style.visibility = "visible";
      halamanUtama.style.opacity = "1";

      // 3. animasi card
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

      // 4. typing effect
      mulaiTyping();

      // 5. musik (diputar setelah user klik)
      const playPromise = musik.play();

      if (playPromise !== undefined) {
        playPromise.catch(function (err) {
          console.log("Audio blocked:", err);
        });
      }

    }, 500);

  }, 500);
});


selesai.addEventListener("click", function(){
  const nomor = "6283838047138";
  const pesan = "Sudah dibaca yaa....";

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
