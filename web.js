const mulaiBtn = document.getElementById("mulai");
const halamanAwal = document.getElementById("halaman-awal");
const halamanUtama = document.getElementById("halaman-utama");
const musik = document.getElementById("musik");

mulaiBtn.addEventListener("click", function(){
  halamanAwal.style.opacity = "0";
  setTimeout(function(){
    halamanAwal.style.display = "none";
    halamanUtama.style.display = "flex";
    setTimeout(function(){
      halamanUtama.style.visibility = "visible";
      halamanUtama.style.opacity = "1";
      
    }, 500);
    musik.play()
  }, 500);
});