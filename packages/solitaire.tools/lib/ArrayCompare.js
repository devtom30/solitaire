ArrayCompare = function () {

};

ArrayCompare.equals = function (a1, a2) {

    // if the other array is a falsy value, return
    if (!a1 || !a2)
        return false;

    // compare lengths - can save a lot of time
    if (a1.length != a2.length)
        return false;

    for (var i = 0, l = a1.length; i < l; i++) {
        // Check if we have nested arrays
        if (a1[i] instanceof Array && a2[i] instanceof Array) {
            // recurse into the nested arrays
            if (! (ArrayCompare.equals(a1[i], a2[i])))
                return false;
        }else if (a1[i] != a2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

SOLTOOLS.ArrayCompare = ArrayCompare;