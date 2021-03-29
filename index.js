var grille = new Array(8);

for (var i = 0; i <= 7; i++) {
    grille[i] = new Array(8);
}

function getData() {

    for (var i = 0; i <= 7; i++) {

        for (var j = 0; j <= 7; j++) {

            grille[i][j] = document.getElementById("case" + i + j).value;
        }
    }

}

function initPlace() {

    for (var j = 0; j <= 7; j++) {

        grille[1][j] = 'P' + j;
        grille[6][j] = 'p' + j;

        for (var n = 2; n <= 5; n++) {
            grille[n][j] = null;
        }

        grille[0][0] = 'T' + 0;
        grille[0][1] = 'C' + 0;
        grille[0][2] = 'F' + 0;
        grille[0][3] = 'R';
        grille[0][4] = 'D';
        grille[0][5] = 'F' + 1;
        grille[0][6] = 'C' + 1;
        grille[0][7] = 'T' + 1;

        grille[7][0] = 't' + 0;
        grille[7][1] = 'c' + 0;
        grille[7][2] = 'f' + 0;
        grille[7][3] = 'r';
        grille[7][4] = 'd';
        grille[7][5] = 'f' + 1;
        grille[7][6] = 'c' + 1;
        grille[7][7] = 't' + 1;
    }
    for (var i = 0; i <= 7; i++) {

        for (var j = 0; j <= 7; j++) {

            document.getElementById("case" + i + j).value = grille[i][j];
        }
    }
}

function move() {
    var coord = document.getElementById("move").value;

    if (coord.length > 5) {
        alert("Coordonnées invalides !");
        return false;
    }

    if (coord.indexOf(',') !== coord.lastIndexOf(',')) {
        alert("Coordonnées invalides !");
        return false;
    }

    if (coord.indexOf(',') !== 2) {
        alert("Coordonnées invalides !");
        return false;
    }
    var regl = new RegExp("[a-zA-Z]");
    if (coord.match(regl)) {
        alert("Coordonnées invalides !");
        return false;
    }

    var depart = document.getElementById("case" + coord[0] + coord[1])
    var arrivee = document.getElementById("case" + coord[3] + coord[4]);

    var stock = arrivee.value;
    arrivee.value = depart.value;
    depart.value = stock;

}