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

Tinytest.add('Plateau nbLignesInGrille && nbColsInGrille', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();

    test.equal(plateau.nbLignesInGrille(), 7);
    test.equal(plateau.nbColsInGrille(), 7);
    //var c1 = new Case();
});

Tinytest.add('Plateau existsCaseAtPosition', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();


    test.isFalse(plateau.existsCaseAtPosition(10, 5));
    test.isFalse(plateau.existsCaseAtPosition(0, -1));
    test.isFalse(plateau.existsCaseAtPosition(-4, -1));
});

Tinytest.add('Plateau getCaseAtPosition', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();

    var c1 = plateau.getCaseAtPosition(10, 5);
    test.isNull(c1);
    c1 = plateau.getCaseAtPosition(0, -1);
    test.isNull(c1);
    c1 = plateau.getCaseAtPosition(-4, -1);
    test.isNull(c1);


    c1 = plateau.getCaseAtPosition(0, 0);
    test.isNotNull(c1);
    test.isTrue(c1.isForbidden());
    c1 = plateau.getCaseAtPosition(0, 1);
    test.isTrue(c1.isForbidden());

    var tabTests = {
            'forbidden': {
                0: [
                    0, 1, 5, 6
                ],
                1: [
                    0, 1, 5, 6
                ],
                5: [
                    0, 1, 5, 6
                ],
                6: [
                    0, 1, 5, 6
                ]
            },
            'empty': {
                3: [
                    3
                ]
            }
        };

    var tabForbidden = tabTests['forbidden'];
    var tabAllCasesTmp = [];
    var a = 0;
    var b = 0;
    var aMax = 6;
    var bMax = 6;
    while (a <= aMax) {
        tabAllCasesTmp[a] = [];
        while (b <= bMax) {
            tabAllCasesTmp[a][b] = 'TODO';
            b++;
        }
        a++;
        b = 0;
    }

    for (x in tabForbidden) {
        var j = 0;
        var jMax = tabForbidden[x].length;
        while (j < jMax) {
            var y = tabForbidden[x][j];
            var cXY = plateau.getCaseAtPosition(x, y);
            test.isTrue(cXY.isForbidden(), 'x : ' + x + ' - y : ' + y + ' - ' + cXY.getType());
            tabAllCasesTmp[x][y] = 'DONE';
            j++;
        }
    }

    test.isTrue(plateau.getCaseAtPosition(3, 3).isEmpty());

    var ii = 0;
    var jj = 0;
    while (ii < aMax) {
        while (jj < bMax) {
            if (tabAllCasesTmp[ii][jj] != 'DONE') {
                test.isTrue(plateau.getCaseAtPosition(ii, jj).isFull());
            }
            jj++;
        }
        ii++
    }

});

Tinytest.add('Plateau inverserX', function (test) {
    var grille = [];

    var iMax = 4;
    var jMax = 4;
    var i = 0;
    var j = 0;
    while (i <= iMax) {
        grille[i] = [];
        while (j <= jMax) {
            grille[i][j] = i + '-' + j;
            j++;
        }
        j = 0;
        i++;
    }

    test.equal(grille[0][0], '0-0');
    test.equal(grille[3][1], '3-1');
    test.equal(grille[4][4], '4-4');

    var newGrille = inverserX(grille);
    test.equal(newGrille[0][4], '4-4');
    test.equal(newGrille[1][1], '3-1');
    test.equal(newGrille[4][0], '0-0');
});

Tinytest.add('Plateau inverserY', function (test) {
    var grille = [];

    var iMax = 4;
    var jMax = 4;
    var i = 0;
    var j = 0;
    while (i <= iMax) {
        grille[i] = [];
        while (j <= jMax) {
            grille[i][j] = i + '-' + j;
            j++;
        }
        j = 0;
        i++;
    }

    test.equal(grille[0][0], '0-0');
    test.equal(grille[3][1], '3-1');
    test.equal(grille[4][4], '4-4');

    var newGrille = inverserY(grille);
    test.equal(newGrille[4][0], '4-4');
    test.equal(newGrille[3][3], '3-1');
    test.equal(newGrille[0][4], '0-0');
});

Tinytest.add('Plateau deplacerCase', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();

    test.isNotNull(plateau);
    
    var xFrom = 0;
    var yFrom = 1;
    var xTo = 3;
    var yTo = 3;
    var cF = plateau.getCaseAtPosition(xFrom, yFrom);
    var cT = plateau.getCaseAtPosition(xTo, yTo);
    test.isFalse(plateau.moveIsPossible(cF, cT), 'this move is not possible');
    test.isFalse(plateau.movePawn(cF, cT));
    
    var xFrom = 3;
    var yFrom = 1;
    var xTo = 3;
    var yTo = 3;
    var cF = plateau.getCaseAtPosition(xFrom, yFrom);
    var cT = plateau.getCaseAtPosition(xTo, yTo);
    test.isTrue(plateau.moveIsPossible(cF, cT), 'this move is possible');
    test.isTrue(plateau.movePawn(cF, cT));
    test.isTrue(plateau.getCaseAtPosition(3, 3).isFull());
    test.isTrue(plateau.getCaseAtPosition(3, 1).isEmpty());
    test.isTrue(plateau.getCaseAtPosition(3, 2).isEmpty());
    

});

