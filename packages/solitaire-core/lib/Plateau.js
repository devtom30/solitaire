//Case = SOLGAM.Case;

Plateau = function () {
    this.grille = [];
    this.init();
}

createCaseForbidden = function() {
    return new Case(Case.TypeEnum.FORBIDDEN);
}

Plateau.prototype.init = function (){
    var ligne_2forb_3full_2forb = [
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
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
        ligne_2forb_3full_2forb,
        ligne_2forb_3full_2forb,
        ligne_tout_rempli,
        ligne_tout_rempli_sauf_milieu,
        ligne_tout_rempli,
        ligne_2forb_3full_2forb,
        ligne_2forb_3full_2forb
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

SOLCORE.Plateau = Plateau;
