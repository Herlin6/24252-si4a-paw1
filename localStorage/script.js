let data;
let daftarTamu = document.getElementById("daftar_tamu");

tampil();

function simpan() {
  let nama = document.getElementById("nama").value;
  let keperluan = document.getElementById("keperluan").value;
  let jk = document.getElementById("jk").value;

  if (nama.trim() === "") {
    alert("Nama tidak boleh kosong!!");
    return;
  }

  if (localStorage.getItem("ls_bukutamu") == null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("ls_bukutamu"));
  }
  data.push({ nama_pengunjung: nama, perlu: keperluan, gender: jk });
  localStorage.setItem("ls_bukutamu", JSON.stringify(data));

  //clear isi elemen daftar tamu
  daftarTamu.innerHTML = "";

  document.getElementById("nama").value = "";
  document.getElementById("keperluan").value = "Membaca";
  document.getElementById("jk").value = "Laki-laki";

  tampil();
}

function tampil() {
  localStorage.getItem("ls_bukutamu") == null
    ? (data = [])
    : (data = JSON.parse(localStorage.getItem("ls_bukutamu")));

  data.forEach((item) => {
    daftarTamu.innerHTML += `
        <div class="border p-3 ps-5 pe-5 text-center text-white rounded-3 ${
          item.gender === "Perempuan" ? "bg-warning" : "bg-success"
        }">
          <b>${item.nama_pengunjung}</b> <br/> ${item.perlu} <br/> ${
      item.gender
    }
        </div>
    `;
  });

  document.getElementById("tamu_perempuan").innerHTML = `
  <div class="border p-4 rounded-3 text-center bg-warning text-white">
  <h3>
  Total Tamu Perempuan <br/> ${
    data.filter((data) => data.gender === "Perempuan").length
  }
  </h3>
  </div>
  `;

  let total_tamu = document.getElementById("total_tamu");
  total_tamu.innerHTML = `
  <div class="border p-4 rounded-3 text-center bg-primary text-white">
  <h3>
  Total Tamu <br/>
  ${data.length}
  </h3>
  </div>
  `;

  document.getElementById("tamu_laki").innerHTML = `
  <div class="border p-4 rounded-3 text-center bg-success text-white">
  <h3>Tamu Laki-laki <br/>
  ${data.filter((data) => data.gender === "Laki-laki").length}
  </h3>
  </div>
  `;

  document.getElementById("baca").innerHTML = `
    <div class="border p-4 rounded-3 text-center bg-info text-white">
  <h3> Membaca <br/>
    ${data.filter((data) => data.perlu === "Membaca").length}
  </h3>
  </div>
  `;
  document.getElementById("browsing").innerHTML = `
    <div class="border p-4 rounded-3 text-center bg-info text-white">
  <h3> Browsing <br/>
    ${data.filter((data) => data.perlu === "Browsing").length}
  </h3>
  </div>
  `;
  document.getElementById("pinjam").innerHTML = `
    <div class="border p-4 rounded-3 text-center bg-info text-white">
  <h3> Pinjam Buku <br/>
    ${data.filter((data) => data.perlu === "Pinjam Buku").length}
  </h3>
  </div>
  `;
}
