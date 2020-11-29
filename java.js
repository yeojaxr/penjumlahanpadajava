alert("Selamat Datang")
function Hasil(){
    var angka1 = parseInt(document.forms['inputAngka']['angka1'].value);
    var angka2 = parseInt(document.forms['inputAngka']['angka2'].value);
    var result = angka1 + angka2;

    var tempathasil = document.getElementById('hasil');
    var tulisan = document.getElementById('teks');

    tulisan.innerHTML = "Hasilnya dari penjumlahan di atas yaitu ";
    tempathasil.innerHTML = result;

    document.body.style.backgroundColor = "#808080";
}