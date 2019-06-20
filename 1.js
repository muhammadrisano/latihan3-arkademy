let text = "nurses run";

function cekPalindrome(text) {
    let textarr = text.split("");
    let textnospace = [];
    for (let i = 0; i < textarr.length; i++) {
        if (textarr[i] != " ") {
            textnospace.push(textarr[i]);
        }
    }
    textnormal = textnospace.join("")
    textback = textnospace.reverse().join("");


    if (textnormal == textback) {
        return true;
    } else {

        return false;
    }

}



console.log(cekPalindrome(text));
