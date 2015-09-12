Template.grid.helpers({
    grill:function(){
        console.log('in the helper');
        plateau = Session.get(SOLCORE.session.plateau);
        return plateau.grille;
    },
    caseStatus: function (case_status) {
        return SOLGAMEUI.CASE_STATUS[case_status];
    }   
});

