var x = SOLCORE.Case.TypeEnum.FORBIDDEN;
var o = SOLCORE.Case.TypeEnum.FULL;
var e = SOLCORE.Case.TypeEnum.EMPTY;

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

Tinytest.add('solitaire.tools doQuarterTurn', function (test) {
        var possGridStep1_1 = [
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
        [o, o, o, o, o, o, o],
        [o, e, e, o, o, o, o],
        [o, o, o, o, o, o, o],
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
    ];

    var possGridStep1_2 = [
        [x, x, o, o, o, x, x],
        [x, x, o, e, o, x, x],
        [o, o, o, e, o, o, o],
        [o, o, o, o, o, o, o],
        [o, o, o, o, o, o, o],
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
    ];

    var possGridStep1_1_quarterTurned = Array;
    try{
        possGridStep1_1_quarterTurned = CoordinatesManipulation.doQuarterTurn(possGridStep1_1);
    } catch (err) {
        console.log('Exception : ' + err);
    }

    test.isTrue(possGridStep1_1_quarterTurned.equals(possGridStep1_2));
});

Tinytest.add('solitaire.tools yet an other test', function (test) {

    var possGridStep1_1 = [
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
        [o, o, o, o, o, o, o],
        [o, e, e, o, o, o, o],
        [o, o, o, o, o, o, o],
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
    ];

    var possGridStep1_2 = [
        [x, x, o, o, o, x, x],
        [x, x, o, e, o, x, x],
        [o, o, o, e, o, o, o],
        [o, o, o, o, o, o, o],
        [o, o, o, o, o, o, o],
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
    ];

    var possGridStep1_3 = [
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
        [o, o, o, o, o, o, o],
        [o, o, o, o, e, e, o],
        [o, o, o, o, o, o, o],
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
    ];

    var possGridStep1_4 = [
        [x, x, o, o, o, x, x],
        [x, x, o, o, o, x, x],
        [o, o, o, o, o, o, o],
        [o, o, o, o, o, o, o],
        [o, o, o, e, o, o, o],
        [x, x, o, e, o, x, x],
        [x, x, o, o, o, x, x],
    ];



});
