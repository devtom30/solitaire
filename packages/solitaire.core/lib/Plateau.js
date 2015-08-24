//Case = SOLGAM.Case;

Plateau = function () {
    this.grille = [];
    this.init();
    this.name = 'mon super plateau'
};

createCaseForbidden = function() {
    return new Case(Case.TypeEnum.FORBIDDEN);
};

Plateau.prototype.init = function (){
    var ligne_2forb_3full_2forb = [
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN
    ];

    var ligne_tout_rempli = [
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL
    ];

    var ligne_tout_rempli_sauf_milieu = [
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.EMPTY,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL
    ];

    grille = [
        // ligne 1
        ligne_2forb_3full_2forb.slice(0),
        ligne_2forb_3full_2forb.slice(0),
        ligne_tout_rempli.slice(0),
        ligne_tout_rempli_sauf_milieu.slice(0),
        ligne_tout_rempli.slice(0),
        ligne_2forb_3full_2forb.slice(0),
        ligne_2forb_3full_2forb.slice(0)
    ];

    this.grille = grille;
};

Plateau.prototype.isEmptyAtPosition = function(x, y){
    this.positionStatus() === Case.TypeEnum.EMPTY;
};

Plateau.prototype.isFullAtPosition = function(x, y){
    this.positionStatus() === Case.TypeEnum.FULL;
};

Plateau.prototype.isForbiddenAtPosition = function(x, y){
    this.positionStatus() === Case.TypeEnum.FORBIDDEN;
};

Plateau.prototype.positionStatus = function(x, y){
    return this.grille[x][y];
};

Plateau.prototype.getGrille = function () {
    return this.grille;
};

Plateau.prototype.getCaseAtPosition = function (x, y) {
    var c = null;
    if (this.existsCaseAtPosition(x, y)) {
        var grille = this.getGrille();
        c = new Case(grille[x][y], x, y);
    }

    return c;
}

Plateau.prototype.existsCaseAtPosition = function (x, y) {
    var grille = this.getGrille();
    return (x >= 0
        && y >= 0
        && x < this.nbLignesInGrille()
        && y < this.nbColsInGrille());
}

Plateau.prototype.nbLignesInGrille = function () {
    var grille = this.getGrille();
    return grille.length;
}

Plateau.prototype.nbColsInGrille = function () {
    var grille = this.getGrille();
    return grille[0].length;
}

Plateau.prototype.getName = function () {
    return this.name;
};

Plateau.prototype.exportGrilleCasesForSession = function () {
    var tab = new Array;
    var x = 0;
    var grille = this.getGrille();
    while (x < grille.length) {
        var ligne = grille[x];

        var y = 0;
        while (y < ligne.length) {
            tab['plateau_case_' + x + '_' + y] = ligne[y];
            y++;
        }
        x++;
    }
    return tab;
};

Plateau.prototype.exportToCollection = function () {
    var tab = new Array;
    var grille = this.getGrille();
    var x = 0;
    var grilleLength = grille.length;
    while (x < grilleLength) {
        var l = grille[x];

        var y = 0;
        var lLength = l.length;
        while (y < lLength) {
            tab.push({
                x: x,
                y: y,
                value: grille[x][y]
            });

            y++;
        }
        x++;
    }
    return tab;
};

//Plateau.prototype.setCase = function (x, y, str) {
//    this.
//}

// est-ce qu'on peut déplacer le pion à cette position ?
Plateau.prototype.possiblePositionToMoveFrom = function (x, y) {
    // il faut qu'il y ait une case vide derrière une des cases adjacentes à la case
    c = this.getCaseAtPosition(x, y);
    if (c == null) {
        return false;
    }
    return (
        this.caseCanBeMovedLeft(c)
        || this.caseCanBeMovedUp(c)
        || this.caseCanBeMovedRight(c)
        || this.caseCanBeMovedDown(c)
    );
};

Plateau.prototype.caseCanBeMovedRight = function (c) {

};

//changement de repere tableau a deux dimensions
changementDeRepere = function (tab, inverserX, inverserY) {
    var tabTmp = tab;
    var newTab = [];

    var xMax = tabTmp.length;
    var yMax = tabTmp[0].length;


};

inverserX = function (tab) {
    var tabTmp = tab;
    var newTab = cloneArray(tab);
    //var newTab = tab;

    var xMax = tabTmp.length - 1;
    var yMax = tabTmp[0].length - 1;

    i = xMax;
    j = 0;
    while (i >= 0) {
        while (j <= yMax) {
            newTab[xMax - i][j] = tab[i][j];
            j++;
        }
        j = 0;
        i--;
    }

    return newTab;
};

inverserY = function (tab) {
    var tabTmp = tab;
    var newTab = cloneArray(tab);
    //var newTab = tab;

    var xMax = tabTmp.length - 1;
    var yMax = tabTmp[0].length - 1;

    i = 0;
    j = yMax;
    while (i <= xMax) {
        while (j >= 0) {
            newTab[i][yMax - j] = tab[i][j];
            j--;
        }
        j = yMax;
        i++;
    }

    return newTab;
};

cloneArray = function (tab) {
    var newTab = [];

    var i = 0;
    var j = 0;
    var tabLength = tab.length;
    while (i < tabLength) {
        newTab[i] = [];
        tabJLength = tab[i].length;
        while (j < tabJLength) {
            newTab[i][j] = tab[i][j];

            j++;
        }
        j = 0;
        i++;
    }

    return newTab;
}
