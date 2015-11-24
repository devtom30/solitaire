/**
 * Created by tom on 23/11/15.
 */

GameLauncher = function () {
    this.plateau = null;
};

GameLauncher.prototype.createGame = function (){
    // get the factory
    var plateauFactory = SOLCORE.PlateauFactory.getInstance();
    // create new board
    this.plateau = plateauFactory.createPlateau();

};

GameLauncher.prototype.getPlateau = function (){
    return this.plateau;
};

SOLFINDALLSOLUTIONS.GameLauncher = GameLauncher;

