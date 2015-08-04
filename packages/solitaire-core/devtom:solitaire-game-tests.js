// Write your tests here!
// Here is an example.
Tinytest.add('example bis', function (test) {
    test.equal(true, true);
});

//Tinytest.add('example2 qui tue !', function (test) {
//    test.equal(true, true);
//    test.equal(true, true);
//});
//
//Tinytest.add('test tout moisi', function (test) {
//    var t = new Array;
//});
//
Tinytest.add('Case create', function (test) {
    console.log(SOLCOM);
    console.log(SOLGAM);
    monEnum = SOLGAM.relou;
    var maCase = new SOLGAM.Case('forbidden', 34, 43);
    test.isNotNull(maCase);

    test.isNotNull(maCase.getType());
    test.equal(maCase.getType(), 'forbidden');

}); 

Tinytest.add('Plateau create', function (test) {
    plateau = new SOLGAM.Plateau();
    test.isNotNull(plateau);

    grille = plateau.getGrille();
    test.isNotNull(grille);
    console.log('grille : ');
    console.log(grille);
});

Tinytest.add('Plateau Factory', function (test) {
    plateauFactory = SOLGAM.PlateauFactory.getInstance();
    //plateauFactory = SOLGAM.PlateauFactory;
    test.isNotNull(plateauFactory);
    //console.log('plateauFactory', plateauFactory);
    var plateau = plateauFactory.createPlateau();
    test.isNotNull(plateau);
    console.log('plateau : ');
    console.log(plateau);
});

Tinytest.add('Plateau init', function (test) {
    var plateauFactory = SOLGAM.PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();
    console.log(plateau);

    var grille = plateau.grille;
    test.equals(grille[0][0], SOLGAM.Case.TypeEnum.FORBIDDEN);
});
