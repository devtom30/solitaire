Template.cuteSquare.helpers({
    drawCuteSquare: function(square){
        return square;
    },
  //  rendered: 
});

Template.cuteSquare.rendered = function(){
    var self = this;
    var canvas = self.$("canvas").get(0);
    var ctx=canvas.getContext("2d");
    ctx.rect(1,1,20,20);
    ctx.stroke();
};

var f = function() {
    
    var c=Template.cuteSquare.cuteSquareCanvas;
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.stroke();
};
