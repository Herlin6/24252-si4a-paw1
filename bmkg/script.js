fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah);
    // console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = `

    <div class="col-md-6">
        <p>Wilayah: ${data.Infogempa.gempa.Wilayah}</p>
        <p>Magnitude: ${data.Infogempa.gempa.Magnitude}</p>
        <p>Tanggal: ${data.Infogempa.gempa.Tanggal}</p>
        <p>Jam: ${data.Infogempa.gempa.Jam}</p>
        <p>Potensi: ${data.Infogempa.gempa.Potensi}</p>
        <p>Kedalaman: ${data.Infogempa.gempa.Kedalaman}</p>
    </div>
    <div class="col-md-6">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}"
        class="w-75">
    </div>
    </div>`;
  });

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.Infogempa.gempa.forEach((data) => {
      document.getElementById("gempabumi15").innerHTML += `
            <div class="col-lg-4 p-3">
                <div class="border border-2 p-3 border-secondary rounded-3">
                    <h3> Wilayah: ${data.Wilayah} </h3>
                    <p> Tanggal: ${data.Tanggal} </p>
                    <p> Jam: ${data.Jam} </p>
                    <p> Magnitude: ${data.Magnitude} </p>
                    <p> Potensi: ${data.Potensi} </p>
                </div>
            </div>
        `;
    });
  });

//   "Tanggal": "19 Mar 2025",
//   "Jam": "08:46:33 WIB",
//   "DateTime": "2025-03-19T01:46:33+00:00",
//   "Coordinates": "-6.78,129.89",
//   "Lintang": "6.78 LS",
//   "Bujur": "129.89 BT",
//   "Magnitude": "5.0",
//   "Kedalaman": "185 km",
//   "Wilayah": "205 km BaratLaut TANIMBAR",
//   "Potensi": "Tidak berpotensi tsunami"
