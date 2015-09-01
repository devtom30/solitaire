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
    console.log(SOLGAMEUI);

    var plateauFactory = SOLCORE.PlateauFactory.getInstance();

    plateau = plateauFactory.createPlateau();
    console.log(plateau);
    
    var sgui = new SOLGAMEUI.SolitaireGameUI(plateau, SOLCORE.session.plateau);
    sgui.loadGame();

    var possMoves = sgui.plateau.findAllPossibleMoves();
    console.dir('possMoves : ' + possMoves);
    
    setTimeout(function () {
        var xFrom = 3;
        var yFrom = 1;
        var xTo = 3;
        var yTo = 3;
        var cF = sgui.plateau.getCaseAtPosition(xFrom, yFrom);
        var cT = sgui.plateau.getCaseAtPosition(xTo, yTo);
        if (sgui.plateau.movePawn(cF, cT)) {
            sgui.recordInSession();
        }
        possMoves = sgui.plateau.findAllPossibleMoves();
        console.dir('possMoves : ' + possMoves);
    }, 3000);    
    this.render('board');

});


