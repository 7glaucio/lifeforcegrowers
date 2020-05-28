function calculateWG() {
    let wTrays = document.getElementById("wTraysWG").value;
    let bTrays = document.getElementById("bTraysWG").value;
    document.getElementById('resultadoWG').innerHTML = `${((bTrays * 0.091666) + (wTrays * 0.3301369)).toFixed(1)} heaping bowls`;
}

function calculateSF() {
    let bTrays = document.getElementById("bTraysSF").value;
    document.getElementById('resultadoSF').innerHTML = `${((bTrays * 0.35)).toFixed(1)} bowls filled up to the black line`;
}

function calculateP() {
    let wTrays = document.getElementById("wTraysP").value;
    document.getElementById('resultadoP').innerHTML = `${wTrays} bowls filled up to the first line of the green cup`;
}

function calculateLegumes() {
    let legumes = parseFloat(document.getElementById("legumes").value);
    if (legumes >= 200) {
    document.getElementById('resultadoLegumes').innerHTML = 
    `<strong>Peas:</strong> ${(0.1818181818181818 * legumes * 0.88).toFixed(2)} <strong>Lentils:</strong> ${(0.1818181818181818 * legumes * 0.88).toFixed(2)} <strong>Mungs:</strong> ${(0.1272727272727273 * legumes * 0.88).toFixed(2)}`;
    } else {
        document.getElementById('resultadoLegumes').innerHTML = 
    `<strong>Peas:</strong> ${(0.1818181818181818 * legumes * 0.90).toFixed(2)} <strong>Lentils:</strong> ${(0.1818181818181818 * legumes * 0.90).toFixed(2)} <strong>Mungs:</strong> ${(0.1272727272727273 * legumes * 0.90).toFixed(2)}`;
}
}

