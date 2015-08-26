
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

Case.prototype.getX = function() {
    return this.x;
}

Case.prototype.getY = function() {
    return this.y;
}

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

Case.prototype.isForbidden = function() {
    return this.getType() === Case.TypeEnum.FORBIDDEN;
}

Case.prototype.isEmpty = function() {
    return this.getType() === Case.TypeEnum.EMPTY;
}

Case.prototype.isFull = function() {
    return this.getType() === Case.TypeEnum.FULL;
}
