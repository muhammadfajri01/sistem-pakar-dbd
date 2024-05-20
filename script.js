let gejala = [
  { nama: "demam", nilai: false },
  { nama: "mual muntah", nilai: false },
  { nama: "mimisan/gusi berdarah", nilai: false },
  { nama: "badan lemas", nilai: false },
  { nama: "nyeri", nilai: false },
  { nama: "nafsu makan hilang", nilai: false },
  { nama: "bintik merah & gatal", nilai: false },
  { nama: "pusing", nilai: false },
];

let indexGejala = 0;

function tampilkanGejala() {
  if (indexGejala < gejala.length) {
    let gejalaItem = gejala[indexGejala];
    let container = document.getElementById("gejala-container");
    container.innerHTML = `
        <div class="gejala-item justify-content-center ">
          <div class="alert alert-info text-center fs-1" role="alert">apakah anda  mengalami <br> <span class="text-primary fw-bolder">${gejalaItem.nama}<span></div>
          <div class="gap-1 col-12 mx-auto btn-group" role="group">
            <button class="btn btn-primary py-3" type="button" onclick="setGejala(true)">Ya</button>
            <button class="btn btn-danger" type="button" onclick="setGejala(false)">Tidak</button>
        </div>
        </div>
      `;
  } else {
    let count = gejala.filter((g) => g.nilai).length;

    if (count >= 6) {
      Swal.fire("Anda kemungkinan besar terkena DBD.");
    } else {
      Swal.fire("Anda mungkin tidak terkena DBD.");
    }
  }
}

function setGejala(nilai) {
  gejala[indexGejala].nilai = nilai;

  if (gejala[indexGejala].nama === "demam" && !nilai) {
    Swal.fire("Anda tidak terkena DBD.");
    resetGejala();
    return;
  }
  if (gejala[indexGejala].nama === "mimisan/gusi berdarah" && !nilai) {
    Swal.fire("Anda tidak terkena DBD.");
    resetGejala();
    return;
  }

  if (gejala[indexGejala].nama === "nafsu makan hilang" && !nilai) {
    Swal.fire("Anda tidak terkena DBD.");
    resetGejala();
    return;
  }

  let mimisan = gejala.find((g) => g.nama === "mimisan/gusi berdarah").nilai;
  let badanlemas = gejala.find((g) => g.nama === "badan lemas").nilai;
  let nyeri = gejala.find((g) => g.nama === "nyeri").nilai;
  let pusing = gejala.find((g) => g.nama === "pusing").nilai;

  if (mimisan && badanlemas && nyeri && pusing) {
    Swal.fire("Anda terkena DBD.");
  }

  indexGejala++;
  tampilkanGejala();
}

function resetGejala() {
  indexGejala = 0;
  gejala.forEach((g) => (g.nilai = false));

  document.getElementById("hasil-diagnosa").innerText = "";
  tampilkanGejala();
}

tampilkanGejala();
