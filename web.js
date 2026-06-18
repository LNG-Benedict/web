const mulaiBtn = document.getElementById("mulai");
const halamanAwal = document.getElementById("halaman-awal");
const halamanUtama = document.getElementById("halaman-utama");
const musik = document.getElementById("musik");
const card = document.querySelector(".card");
const selesai = document.getElementById("selesai");

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
    }, 500);
    musik.currentTime = 79.92;
    musik.play();
    const batas = 166.64;
    const cek = setInterval(function(){
      if(musik.currentTime >= batas){
        musik.pause();
        clearInterval(cek);
      }
    }, 200);
  }, 500);
});

selesai.addEventListener("click", function(){
  const nomor = "6283838047138";
  const pesan = "Sudah dibaca yaa....";

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
