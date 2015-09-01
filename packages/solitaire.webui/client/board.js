Template.board.helpers({
    board:function(){
        console.log('in the helper');
        return Session.get(SOLCORE.session.plateau);
    },
    name: function(){
        console.log('in the helper');
        plateau = Session.get(SOLCORE.session.plateau);
        return plateau.name;
    }
});

