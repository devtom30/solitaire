Template.grid.helpers({
    grill:function(){
        console.log('in the helper');
        plateau = Session.get(SOLCORE.session.plateau);
        return plateau.grille;
    }
});