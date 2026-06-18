const mulaiBtn = document.getElementById("mulai");
const halamanAwal = document.getElementById("halaman-awal");
const halamanUtama = document.getElementById("halaman-utama");
const musik = document.getElementById("musik");
const judul = document.getElementById("judul");
const card = document.querySelector(".card");
const selesai = document.getElementById("selesai");

function mulaiTyping(){
  const teks = "Selamat Ulang Tahun, Bang Ivan...🎉🎉";
  judul.innerHTML = "";

  let i = 0;

  function ketik(){
    if(i < teks.length){
      judul.innerHTML += teks.charAt(i);
      i++;
      setTimeout(ketik, 70);
    }
  }

  setTimeout(ketik, 200);
}

mulaiBtn.addEventListener("click", function(){

  halamanAwal.style.opacity = "0";

  setTimeout(function(){
    halamanAwal.style.display = "none";
    halamanUtama.style.display = "flex";

    setTimeout(function(){
      halamanUtama.style.visibility = "visible";
      halamanUtama.style.opacity = "1";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

      // 🔥 1. TYPOING DIPISAH (AMAN)
      mulaiTyping();

      // 🔥 2. MUSIK DIPISAH (AMAN)
      setTimeout(function(){
        musik.currentTime = 79.92;
        musik.play();
      }, 100);

    }, 500);

  }, 500);

});

selesai.addEventListener("click", function(){
  const nomor = "6283838047138";
  const pesan = "Sudah dibaca yaa....";

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
