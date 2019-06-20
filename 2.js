let input = [123, 9, 27];


function perjumlahanarr(number) {
    var hasilJumlah = number;
    var hasil = 0
    while (hasilJumlah.length > 1) {
        for (i = 0; i < hasilJumlah.length; i++) {
            hasil += parseInt(hasilJumlah[i]);
        }
        hasilJumlah = String(hasil).split("");
        hasil = 0;
    }
    return String(hasilJumlah);



}
console.log(perjumlahanarr(input));