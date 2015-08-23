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

    var maCase = new Case('forbidden', 34, 43);
    test.isNotNull(maCase);

    test.isNotNull(maCase.getType());
    test.equal(maCase.getType(), 'forbidden');

}); 

Tinytest.add('Plateau create', function (test) {
    plateau = new Plateau();
    test.isNotNull(plateau);

    grille = plateau.getGrille();
    test.isNotNull(grille);
    console.log('grille : ');
    console.log(grille);
});

Tinytest.add('Plateau Factory', function (test) {
    plateauFactory = PlateauFactory.getInstance();
    //plateauFactory = SOLGAM.PlateauFactory;
    test.isNotNull(plateauFactory);
    //console.log('plateauFactory', plateauFactory);
    var plateau = plateauFactory.createPlateau();
    test.isNotNull(plateau);
    console.log('plateau : ');
    console.log(plateau);
});

Tinytest.add('Plateau init', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();
    console.log(plateau);

    var grille = plateau.grille;
    test.equal(grille[0][0], Case.TypeEnum.FORBIDDEN);
});

Tinytest.add('Plateau exportToCollection', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();

    var grilleExport = plateau.exportToCollection();
    test.equal(grilleExport.length, 49);
});
