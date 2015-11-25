/**
 * Created by tom on 24/11/15.
 */

Tinytest.add('GameLauncher constructor', function (test) {
    var gameLauncher = new GameLauncher();
    test.isNotNull(gameLauncher, 'gameLauncher is null');
    test.isNull(gameLauncher.getPlateau());
});

Tinytest.add('GameLauncher createPlateau', function (test) {
    var gameLauncher = new GameLauncher();
    gameLauncher.createGame();

    test.isNotNull(gameLauncher.getPlateau(), 'gameLauncher.plateau is null');
});

Tinytest.add('gamelauncher findPossibleMoves', function (test) {
    var gameLauncher = new GameLauncher();
    gameLauncher.createGame();
    var possibleMoves = gameLauncher.getPlateau().findAllPossibleMoves();
    test.isNotNull(possibleMoves);
});

Tinytest.add('gamelauncher findPossibleGrids', function (test) {
    var gameLauncher = new GameLauncher();
    gameLauncher.createGame();
    var possibleMoves = gameLauncher.getPlateau().findAllPossibleMoves();
    test.isNotNull(possibleMoves);

    var possGrids = gameLauncher.getPlateau().findAllPossibleNextGrids();

});
