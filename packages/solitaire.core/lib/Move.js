
Move = function (from, to) {
    this.squareFrom = from;
    this.squareTo = to

}

Move.prototype.getSquareFrom = function () {
    return this.squareFrom;
}

Move.prototype.getSquareTo = function () {
    return this.squareTo;
}

