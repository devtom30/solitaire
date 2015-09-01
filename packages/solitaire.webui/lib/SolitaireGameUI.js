

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

SOLGAMEUI.SolitaireGameUI = SolitaireGameUI;
