var dodajusun = document.getElementById('tekst');

var plus = document.getElementById('dodaj').onclick = function () {
    dodajusun.textContent = "Akademia 108";
}

var minus = document.getElementById('usun').onclick = function () {
    dodajusun.textContent = "";
}