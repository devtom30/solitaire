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
