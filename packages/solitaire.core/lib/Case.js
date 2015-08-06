
Case = function (type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;

    this.color = "red";
}

Case.TypeEnum = {
    FORBIDDEN : 'forbidden',
    EMPTY : 'empty',
    FULL : 'full'
}

Case.prototype.getType = function() {
    return this.type;
};

Case.prototype.toString = function() {  
    return this.type + ' - ' + this.color;
};

function ensureTypeIsAllowed( t, typesAllowed) {
    ok = false;
    for (var k in typesAllowed) {
	if (t == typesAllowed[k]) {
	    ok = true;
	    break;
	}
    }
    return ok;
}

