Tinytest.add('tools ArrayCompare', function (test) {
    var t1 = ['a', 'b', 'c'];
    var t2 = ['a', 'b', 'c'];

    test.isTrue(t1.equals(t2));

    var t3 = ['a', ['b', 'c']];
    test.isFalse(t1.equals(t3));

    var t4 = ['a', ['b', 'c'], ['b', 'c']];
    test.isFalse(t1.equals(t4));

    var t5 = ['b', 'c'];
    var t6 = ['a', t5, ['b', 'c']];
    test.isTrue(t4.equals(t6));
});

Tinytest.add('solitaire.tools inverserX', function (test) {
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

    var newGrille = SOLTOOLS.CoordinatesManipulation.inverserX(grille);
    test.equal(newGrille[0][4], '4-4');
    test.equal(newGrille[1][1], '3-1');
    test.equal(newGrille[4][0], '0-0');
});

Tinytest.add('solitaire.tools inverserY', function (test) {
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

    var newGrille = SOLTOOLS.CoordinatesManipulation.inverserY(grille);
    test.equal(newGrille[4][0], '4-4');
    test.equal(newGrille[3][3], '3-1');
    test.equal(newGrille[0][4], '0-0');
});
