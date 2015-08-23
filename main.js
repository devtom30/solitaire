Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    var title = 'Fantastic Solitaire Board game !';
    this.layout('ApplicationLayout', {
        data: function() {
            return {
                'title': title
            };
        }
    });

    var collectionCasesPlateau = Mongo.Collection.get('cases_plateau');

    console.log(SOLCORE);
    var plateauFactory = SOLCORE.PlateauFactory.getInstance();

    plateau = plateauFactory.createPlateau();
    Session.set(SOLCORE.session.plateau, plateau);
    console.log(plateau);
    this.render('board');

    /*
    var tabCasesForSession = plateau.exportGrilleCasesForSession();

    for (var sessionCaseId in tabCasesForSession) {
        Session.set(sessionCaseId, tabCasesForSession[sessionCaseId]);
    }
*/
/*
    var tabElements = plateau.exportToCollection();
    var i = 0;
    var tabElementsLength = tabElements.length;
    while (i < tabElementsLength) {
        collectionCasesPlateau.insert(tabElements[i]);
        i++;
    }
*/
    console.log(collectionCasesPlateau.find().count());


    myVar = setTimeout(function(){
        plateau.grille[0][0] = 'alorrrrrrs';
        console.log(plateau.grille[0][0]);
        Session.set(SOLCORE.session.plateau, plateau);
    }, 3000);

});
