/**
 * Created by tom on 23/11/15.
 */

GameLauncher = function () {
    this.plateau = null;
};

GameLauncher.prototype.createGame = function (){
    this.plateau = new SOLCORE.Plateau();
};

GameLauncher.prototype.getPlateau = function (){
    return this.plateau;
};

SOLFINDALLSOLUTIONS.GameLauncher = GameLauncher;

