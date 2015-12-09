/**
 * Created by tom on 09/12/15.
 */

CoordinatesManipulation = function(){

};

//changement de repere tableau a deux dimensions
CoordinatesManipulation.changementDeRepere = function (tab, inverserX, inverserY) {
    var tabTmp = tab;
    var newTab = [];

    var xMax = tabTmp.length;
    var yMax = tabTmp[0].length;


};

CoordinatesManipulation.inverserX = function (tab) {
    var tabTmp = tab;
    var newTab = cloneArray(tab);
    //var newTab = tab;

    var xMax = tabTmp.length - 1;
    var yMax = tabTmp[0].length - 1;

    i = xMax;
    j = 0;
    while (i >= 0) {
        while (j <= yMax) {
            newTab[xMax - i][j] = tab[i][j];
            j++;
        }
        j = 0;
        i--;
    }

    return newTab;
};

CoordinatesManipulation.inverserY = function (tab) {
    var tabTmp = tab;
    var newTab = cloneArray(tab);
    //var newTab = tab;

    var xMax = tabTmp.length - 1;
    var yMax = tabTmp[0].length - 1;

    i = 0;
    j = yMax;
    while (i <= xMax) {
        while (j >= 0) {
            newTab[i][yMax - j] = tab[i][j];
            j--;
        }
        j = yMax;
        i++;
    }

    return newTab;
};

/**
 * Takes an array and do a quarter-turn (clockwise direction)
 * X = Y
 * Y = -X
 * @param tab
 * @return new tab
 */
CoordinatesManipulation.doQuarterTurn = function (tab) {
    var tabTmp = tab;
    var newTab = cloneArray(tab);

    var xMax = tabTmp.length - 1;
    var yMax = tabTmp[0].length - 1;

    if (xMax != yMax) {
        throw 'array must have same width and height';
    }

    var i = 0;
    while (i <= xMax) {
        var j = 0;
        while (j <= yMax) {
            newTab[j][xMax - i] = tabTmp[i][j];

            j++;
        }
        i++;
    }

    return newTab;
};

cloneArray = function (tab) {
    var newTab = [];

    var i = 0;
    var j = 0;
    var tabLength = tab.length;
    while (i < tabLength) {
        newTab[i] = [];
        tabJLength = tab[i].length;
        while (j < tabJLength) {
            newTab[i][j] = tab[i][j];

            j++;
        }
        j = 0;
        i++;
    }

    return newTab;
};


SOLTOOLS.CoordinatesManipulation = CoordinatesManipulation;
