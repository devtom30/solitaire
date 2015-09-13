Template.cuteSquare.helpers({
    squareStatus: function(square) {
        return square;
    },
    //  rendered: 
});

Template.cuteSquare.rendered = function() {
    var self = this;
    var canvas = self.$("canvas").get(0);
    if ($(canvas).data('status') != SOLCORE.Case.TypeEnum.FORBIDDEN) {
        var canvasWidth = canvas.width;
        var rectWidth = canvasWidth;
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(0, 0, rectWidth, rectWidth);
        ctx.stroke();
        if ($(canvas).data('status') == SOLCORE.Case.TypeEnum.FULL) {
            var centerX = rectWidth / 2;
            var centerY = centerX;
            var radius = rectWidth * 30 / 100; 
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.strokeStyle = '#003300';
            ctx.stroke();
        }
        
    }
};
