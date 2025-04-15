document.getElementsByTagName("body")[0].style.backgroundColor = "gray";

const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
  document.body.style.backgroundColor = RandomColor();
};

function RandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//
let nama = "Ahmad";
let umur = 20;

document.getElementById("nama").innerHTML = "Nama saya : " + nama;
document.getElementById("umur").innerHTML = `Umur saya : ${umur}`;

let mahasiswa = ["Ahmad", "Budi", "Caca", "Dedi"];
mahasiswa.forEach((mhs) => {
  document.getElementById("mahasiswa").innerHTML += `<li> ${mhs} </li>`;
});

let nilai = [
  { nama: "Ahmad", nilai: 80 },
  { nama: "Budi", nilai: 70 },
  { nama: "Caca", nilai: 90 },
  { nama: "Dedi", nilai: 85 },
];

nilai.forEach((data) => {
  document.getElementById("nilai").innerHTML += `<tr>
    <td> ${data.nama} </td>
    <td> ${data.nilai} </td>
  </tr>`;
});

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.quotes);
    data.quotes.forEach((q) => {
      document.getElementById("quotes").innerHTML += `
      <div class="col-4 p-3">
      <div class="card">
      <div class="card-body">
        <p class="card-text" id="quotes"> ${q.quote} - ${q.author}</p>
      </div>
      </div>
    </div>
      `;
    });
  });

// document.getElementsByTagName("body")[0].innerHTML += `quotes: ${data}`;
