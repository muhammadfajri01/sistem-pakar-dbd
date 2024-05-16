document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Selamat Datang Di Sistem pakar Demam Berdarah",
    text: "Sistem pakar ini dibuat oleh kelompok ? sebagai bentuk tugas pembuatan sistem pakar",
  });
});
let gejala = [
  { nama: "demam", nilai: false },
  { nama: "nyeri sendi", nilai: false },
  { nama: "nyeri otot", nilai: false },
  { nama: "sakit kepala", nilai: false },
  { nama: "ruam", nilai: false },
  { nama: "mual", nilai: false },
  { nama: "muntah", nilai: false },
  { nama: "perdarahan", nilai: false },
];

let indexGejala = 0;

function tampilkanGejala() {
  if (indexGejala < gejala.length) {
    let gejalaItem = gejala[indexGejala];
    let container = document.getElementById("gejala-container");
    container.innerHTML = `
        <div class="gejala-item justify-content-center ">
          <div class="alert alert-info text-center fs-1" role="alert">apakah anda <br> <span class="text-primary fw-bolder">${gejalaItem.nama}<span></div>
          <div class="gap-1 col-12 mx-auto btn-group" role="group">
            <button class="btn btn-primary py-3" type="button" onclick="setGejala(true)">Ya</button>
            <button class="btn btn-danger" type="button" onclick="setGejala(false)">Tidak</button>
        </div>
        </div>
      `;
  } else {
    cekDiagnosa();
  }
}

function setGejala(nilai) {
  gejala[indexGejala].nilai = nilai;
  indexGejala++;
  tampilkanGejala();
}

function cekDiagnosa() {
  let count = gejala.filter((g) => g.nilai).length;

  if (count >= 6) {
    Swal.fire("Anda kemungkinan besar terkena DBD.");
  } else {
    Swal.fire("Anda mungkin tidak terkena DBD.");
  }
}

function resetGejala() {
  // Reset index gejala dan nilai gejala
  indexGejala = 0;
  gejala.forEach((g) => (g.nilai = false));

  // Sembunyikan hasil diagnosa dan tampilkan gejala pertama lagi
  document.getElementById("hasil-diagnosa").innerText = "";
  tampilkanGejala();
}

// Memulai tampilan gejala pertama
tampilkanGejala();
