function multiplyMatrix(mA, mB) {
    var result = new Array(mA.length);
    for (var i = 0; i < result.length; i++) {
        result[i] = new Array(mB[i].length);
        for (var j = 0; j < mA.length; j++) {
            result[i][j] = 0;
            for (var k = 0; k < mB.length; k++) {
                result[i][j] += mA[i][k] * mB[k][j];
            }
        }
    }
    return result;
}
console.log(multiplyMatrix([
    [3, 4],
    [1, 2]
], [
        [7, 5],
        [6, 4]
    ]


));