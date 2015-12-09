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

Tinytest.add('Plateau initial grid', function (test) {
    var initialGridRef = [
        [
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN
        ],
        [
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN
        ],
        [
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL
        ],
        [
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.EMPTY,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL
        ],
        [
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL
        ],[
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN
        ],
        [
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FULL,
            Case.TypeEnum.FORBIDDEN,
            Case.TypeEnum.FORBIDDEN
        ]
    ];

    var plateau = new Plateau();
    test.isTrue(SOLTOOLS.ArrayCompare.equals(plateau.getGrille(), initialGridRef));
    test.isTrue(plateau.isInitial());
});

Tinytest.add('Plateau create', function (test) {
    var plateau = new Plateau();
    test.isNotNull(plateau);
    test.isTrue(plateau.getCaseAtPosition(3, 3).isEmpty());
    test.isTrue(plateau.getCaseAtPosition(2, 3).isFull());
    test.isTrue(plateau.getCaseAtPosition(3, 4).isFull());
    test.isTrue(plateau.getCaseAtPosition(2, 2).isFull());
    test.isTrue(plateau.getCaseAtPosition(4, 4).isFull());

    test.isTrue(plateau.isInitial());

    var grille = plateau.getGrille();
    test.isNotNull(grille);
});

Tinytest.add('Plateau Factory', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    //plateauFactory = SOLGAM.PlateauFactory;
    test.isNotNull(plateauFactory);
    //console.log('plateauFactory', plateauFactory);
    var plateau = plateauFactory.createPlateau();
    test.isNotNull(plateau);
});

Tinytest.add('Plateau init', function (test) {
    var plateauFactory = PlateauFactory.getInstance();
    var plateau = plateauFactory.createPlateau();

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
    var plateau = new Plateau();
    test.isNotNull(plateau);
    test.isTrue(plateau.getCaseAtPosition(3, 3).isEmpty());
    test.isTrue(plateau.getCaseAtPosition(2, 3).isFull());
    test.isTrue(plateau.getCaseAtPosition(3, 4).isFull());
    test.isTrue(plateau.getCaseAtPosition(2, 2).isFull());
    test.isTrue(plateau.getCaseAtPosition(4, 4).isFull());

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

    testWithArraySquares(plateau, test, tabTests);
    /*
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
*/
});

Tinytest.add('Plateau deplacerCase', function (test) {
    var plateau = new Plateau();
    test.isNotNull(plateau);
    test.isTrue(plateau.getCaseAtPosition(3, 3).isEmpty());
    test.isTrue(plateau.getCaseAtPosition(2, 3).isFull());
    test.isTrue(plateau.getCaseAtPosition(3, 4).isFull());
    test.isTrue(plateau.getCaseAtPosition(2, 2).isFull());
    test.isTrue(plateau.getCaseAtPosition(4, 4).isFull());
    test.isTrue(plateau.isInitial());

    test.isNotNull(plateau);
    
    var xFrom = 0;
    var yFrom = 1;
    var xTo = 3;
    var yTo = 3;
    var cF = plateau.getCaseAtPosition(xFrom, yFrom);
    var cT = plateau.getCaseAtPosition(xTo, yTo);
    test.isFalse(plateau.moveIsPossible(cF, cT), 'this move is not possible');
    test.isFalse(plateau.movePawn(cF, cT));
    test.isTrue(plateau.isInitial(), 'plateau should be initial');

    var xFrom = 3;
    var yFrom = 1;
    var xTo = 3;
    var yTo = 3;
    var cF = plateau.getCaseAtPosition(xFrom, yFrom);
    var cT = plateau.getCaseAtPosition(xTo, yTo);
    test.isTrue(plateau.isInitial(), 'plateau should be initial');
    test.isTrue(plateau.moveIsPossible(cF, cT), 'this move is possible');
    test.isTrue(plateau.isInitial(), 'plateau should be initial');
    test.isTrue(plateau.movePawn(cF, cT));
    test.isTrue(plateau.getCaseAtPosition(3, 3).isFull());
    test.isTrue(plateau.getCaseAtPosition(3, 1).isEmpty());
    test.isTrue(plateau.getCaseAtPosition(3, 2).isEmpty());
    console.log('alors');
    test.isFalse(plateau.isInitial(), 'plateau should not be initial');
    console.log('alors');
    
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
                    1, 2
                ]
            }
        };
    // on teste toutes les cases du plateau
    testWithArraySquares(plateau, test, tabTests);
});

/**
* Fonction pour tester toutes les cases d'après un tableau
* des cases forbidden et empty
*/
function testWithArraySquares (plateau, test, tabTests) {
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

    var tabForbidden = tabTests['forbidden'];
    for (x in tabForbidden) {
        var j = 0;
        var jMax = tabForbidden[x].length;
        while (j < jMax) {
            var y = tabForbidden[x][j];
            var cXY = plateau.getCaseAtPosition(x, y);
            test.isTrue(cXY.isForbidden(), 'x : ' + x + ' - y : ' + y + ' - ' + cXY.getType() + ' should be forbidden', 'case ' + x + ', ' + y + ' should be forbidden');
            tabAllCasesTmp[x][y] = 'DONE';
            j++;
        }
    }

    var tabEmpty = tabTests['empty'];
    for (x in tabEmpty) {
        var j = 0;
        var jMax = tabEmpty[x].length;
        while (j < jMax) {
            var y = tabEmpty[x][j];
            var cXY = plateau.getCaseAtPosition(x, y);
            test.isTrue(cXY.isEmpty(), 'x : ' + x + ' - y : ' + y + ' - ' + cXY.getType() + ' should be empty', 'case ' + x + ', ' + y + ' should be empty');
            tabAllCasesTmp[x][y] = 'DONE';
            j++;
        }
    }
    
    var ii = 0;
    var jj = 0;
    while (ii < aMax) {
        while (jj < bMax) {
            if (tabAllCasesTmp[ii][jj] != 'DONE') {
                test.isTrue(plateau.getCaseAtPosition(ii, jj).isFull(), 'case ' + ii + ', ' + jj + ' should be full');
            }
            jj++;
        }
        ii++
    }
}
