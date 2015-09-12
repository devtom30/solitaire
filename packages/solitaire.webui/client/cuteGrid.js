Template.cuteGrid.helpers({
    grill:function(){
        console.log('in the helper');
        plateau = Session.get(SOLCORE.session.plateau);
        return plateau.grille;
    },
    cuteSquare: function (case_status) {
//    return SOLGAMEUI.CASE_STATUS[case_status];
    return f();
    }
});

var f = function() {
    var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.stroke();
};
