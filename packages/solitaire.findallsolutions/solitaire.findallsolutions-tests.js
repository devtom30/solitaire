/**
 * Created by tom on 24/11/15.
 */

var x = SOLCORE.Case.TypeEnum.FORBIDDEN;
var o = SOLCORE.Case.TypeEnum.FULL;
var e = SOLCORE.Case.TypeEnum.EMPTY;

var initialGrid = [
    [x, x, o, o, o, x, x],
    [x, x, o, o, o, x, x],
    [o, o, o, o, o, o, o],
    [o, o, o, e, o, o, o],
    [o, o, o, o, o, o, o],
    [x, x, o, o, o, x, x],
    [x, x, o, o, o, x, x],
];

Tinytest.add('GameLauncher constructor', function (test) {
    var gameLauncher = new GameLauncher();
    test.isNotNull(gameLauncher, 'gameLauncher is null');
    test.isNull(gameLauncher.getPlateau());
});

Tinytest.add('GameLauncher createPlateau', function (test) {
    var gameLauncher = new GameLauncher();
    gameLauncher.createGame();

    test.isNotNull(gameLauncher.getPlateau(), 'gameLauncher.plateau is null');
    // test if grid is the expected initial grid
    test.isTrue(gameLauncher.getPlateau().getGrille().equals(SOLCORE.Plateau.InitialGrid));
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

    var possGrids = gameLauncher.getPlateau().findAllPossibleNextGrids();
    test.isNotNull(possGrids);
    // test if this is an array
    test.isTrue(possGrids.constructor === Array);
});

Tinytest.add('gamelauncher findPossibleGrids in depth', function (test) {
    var gameLauncher = new GameLauncher();
    gameLauncher.createGame();
    var possibleMoves = gameLauncher.getPlateau().findAllPossibleMoves();

    var possGrids = gameLauncher.getPlateau().findAllPossibleNextGrids();
    // now we test what is in this array
});
