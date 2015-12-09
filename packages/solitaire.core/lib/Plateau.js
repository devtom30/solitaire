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

    this.grille = Plateau.InitialGrid;
};

Plateau.prototype.isEmptyAtPosition = function(x, y){
    return this.positionStatus() === Case.TypeEnum.EMPTY;
};

Plateau.prototype.isFullAtPosition = function(x, y){
    return this.positionStatus() === Case.TypeEnum.FULL;
};

Plateau.prototype.isForbiddenAtPosition = function(x, y){
    return this.positionStatus() === Case.TypeEnum.FORBIDDEN;
};

Plateau.prototype.positionStatus = function(x, y){
    return this.grille[x][y];
};

Plateau.prototype.getGrille = function (){
    return this.grille;
};

Plateau.prototype.setGrille = function (gr) {
    this.grille = gr;  
};

Plateau.prototype.getCaseAtPosition = function (x, y) {
    var c = null;
    if (this.existsCaseAtPosition(x, y)) {
        var grille = this.getGrille();
        c = new Case(grille[x][y], x, y);
    }

    return c;
};

Plateau.prototype.existsCaseAtPosition = function (x, y) {
    var grille = this.getGrille();
    return (x >= 0
        && y >= 0
        && x < this.nbLignesInGrille()
        && y < this.nbColsInGrille());
};

Plateau.prototype.nbLignesInGrille = function () {
    var grille = this.getGrille();
    return grille.length;
};

Plateau.prototype.nbColsInGrille = function () {
    var grille = this.getGrille();
    return grille[0].length;
};

Plateau.prototype.getName = function (){
    return this.name;
};

Plateau.prototype.exportGrilleCasesForSession = function () {
    var tab = new Array();
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

Plateau.prototype.movePawn = function (caseFrom, caseTo) {
    var moved = false;
    
    if (this.moveIsPossible(caseFrom, caseTo)) {
        this.cleanSquare(caseFrom);
        this.cleanSquare(this.getSquareBetweenThose(caseFrom, caseTo));
        this.fillSquare(caseTo);
        moved = true;
    }
    return moved;
};

Plateau.prototype.cleanSquare = function (sq) {
    var gr = this.getGrille();
    
    gr[sq.getX()][sq.getY()] = Case.TypeEnum.EMPTY;
    
    this.setGrille(gr);
};

Plateau.prototype.fillSquare = function (sq) {
    var gr = this.getGrille();
    
    gr[sq.getX()][sq.getY()] = Case.TypeEnum.FULL;
    
    this.setGrille(gr);
};

Plateau.prototype.moveIsPossible = function (caseFrom, caseTo) {
     if (caseFrom == null
        || caseTo == null
        || !(this.existsCaseAtPosition(caseFrom.getX(), caseFrom.getY())
            && this.existsCaseAtPosition(caseTo.getX(), caseTo.getY()))
        || caseFrom.isForbidden()
        || caseTo.isForbidden()
        || !this.distanceBetweenTwoSquaresOkForMove(caseFrom, caseTo)) {
        return false;
    }
    
    return (caseFrom.isFull() && caseTo.isEmpty() && this.squareBetweenThoseIsFull(caseFrom, caseTo));
};

Plateau.prototype.getSquareBetweenThose = function (caseFrom, caseTo) {
    var xF = caseFrom.getX();
    var yF = caseFrom.getY();
    var xT = caseTo.getX();
    var yT = caseTo.getY();
    
    var xB = (xF + xT) / 2;
    var yB = (yF + yT) / 2;
    
    return this.getCaseAtPosition(xB, yB);
};

Plateau.prototype.squareBetweenThoseIsFull = function (caseFrom, caseTo) {
    var squareB = this.getSquareBetweenThose(caseFrom, caseTo);
    
    return squareB.isFull();
};

Plateau.prototype.distanceBetweenTwoSquaresOkForMove = function (caseFrom, caseTo) {
    var xF = caseFrom.getX();
    var yF = caseFrom.getY();
    var xT = caseTo.getX();
    var yT = caseTo.getY();
    return (
        (xF != xT || yF != yT)
        && (xF - xT == 0 || Math.abs(xF - xT) == 2) 
        && (yF - yT == 0 || Math.abs(yF - yT) == 2)  
    );
};

Plateau.prototype.findAllPossibleMoves = function () {
    var possibleMoves = [];
    var x = 0;
    var grille = this.getGrille();
    var grilleHeight = grille.length;

    while (x < grilleHeight) {
        var y = 0;
        var grilleLength = grille[x].length;
        while (y < grilleLength) {
            var squareFrom = this.getCaseAtPosition(x, y);
            if (! squareFrom.isForbidden()) {
                var allMovesToTest = {
                    'up' : new Move(squareFrom, this.getCaseAtPosition(x - 2, y)),
                    'down' : new Move(squareFrom, this.getCaseAtPosition(x + 2, y)),
                    'right' : new Move(squareFrom, this.getCaseAtPosition(x, y + 2)),
                    'left' : new Move(squareFrom, this.getCaseAtPosition(x, y - 2))
                };
                for (var moveDirection in allMovesToTest) {
                    var move = allMovesToTest[moveDirection];
                    if (this.moveIsPossible(move.getSquareFrom(), move.getSquareTo())) {
                        possibleMoves.push(move);
                    }
                }
            }
            y++;
        }
        
        x++;
    }
    
    return possibleMoves;
};

/**
 * To find all possible states of the grid at next turn
 */
Plateau.prototype.findAllPossibleNextGrids = function () {
    var possibleGrids = Array();

    var possibleMoves = this.findAllPossibleMoves();
    var countPossibleMoves = possibleMoves.length;
    var currentGrid = this.getGrille();
    var i = 0;
    while (i < countPossibleMoves) {
        var possibleMove = possibleMoves[i];
        // do the move
        this.movePawn(possibleMove.getSquareFrom(), possibleMove.getSquareTo());
        possibleGrids.push(this.getGrille());
        // cancel move by overwritting grid with previous grid
        this.setGrille(currentGrid);

        i++;
    }

    return possibleGrids;
};

Plateau.InitialGrid = [
    [
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN
    ],
    [
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN
    ],
    [
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL
    ],
    [
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.EMPTY,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL
    ],
    [
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL
    ],[
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN
    ],
    [
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FULL,
        Case.TypeEnum.FORBIDDEN,
        Case.TypeEnum.FORBIDDEN
    ]
];

SOLCORE.Plateau = Plateau;