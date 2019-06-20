let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function tampilkanarray(input) {
    let arrke = 0
    var angka1 = []
    var angka2 = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            angka1.push(input[arrke])
            arrke++;
            // console.log(arrke);
        }
        angka2.push(angka1)
        angka1 = [];
    }
    // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
    for (let i = 0; i < 3; i++) {
        let tampil = "";
        for (let j = 0; j < 3; j++) {
            tampil += angka2[j][i] + " ";

        }
        console.log(tampil)

    }
}
tampilkanarray(input);

