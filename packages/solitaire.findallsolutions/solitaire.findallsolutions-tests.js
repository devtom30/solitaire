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
