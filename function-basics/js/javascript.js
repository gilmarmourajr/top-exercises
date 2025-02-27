
function add7(num) {
    return num += 7;
}

function multiply(num1, num2) {
    return num1*num2;
}

function capitalize(word) {
    return String(word)[0].toUpperCase()+String(word).slice(1).toLowerCase();
}

function lastLetter(word) {
    return String(word).slice(-1);
}

alert(lastLetter("oieRRRRR"));