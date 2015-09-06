

SolitaireGameUI = function (plateau, plateauSessionName) {
    console.log('new ' + plateauSessionName);
    this.plateau = plateau;
    this.plateauSessionName = plateauSessionName;
}

SolitaireGameUI.prototype.loadGame = function (){
    this.recordInSession();
};

SolitaireGameUI.prototype.recordInSession = function () {
    console.log('record in session : ' + this.plateauSessionName);
    Session.set(this.plateauSessionName, this.plateau);
};

SolitaireGameUI.prototype.playRandomly = function (timeOut) {
    var move = this.chooseMoveRandomly();
    while (move != null) {
        this.playThatMove(move);
        move = this.chooseMoveRandomly();
    }
};

SolitaireGameUI.prototype.chooseMoveRandomly = function () {
    var possMoves = this.plateau.findAllPossibleMoves();
    var nbPossMoves = possMoves.length;
    var chosenMove = null;
    if (nbPossMoves > 0) {
        var moveIndex = SolitaireGameUI.randomInt(0, nbPossMoves - 1);
        chosenMove = possMoves[moveIndex];
    }
    
    return chosenMove;
};

SolitaireGameUI.prototype.playRandomlyOnce = function () {
    var move = this.chooseMoveRandomly();
    if (move != null) {
        // do move
        checkMove = this.playThatMove(move);
    }
};

SolitaireGameUI.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

SolitaireGameUI.prototype.playThatMove = function (move) {
    var moveCheck = this.plateau.movePawn(move.getSquareFrom(), move.getSquareTo());
    this.recordInSession();
    
    return moveCheck;
}

SOLGAMEUI.SolitaireGameUI = SolitaireGameUI;
