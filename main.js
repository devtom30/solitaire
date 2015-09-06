Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
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

    setTimeout(function() {
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

    var intervalMilliSeconds = 2000;
    var intervalId = Meteor.setInterval(function(){
        var chosenMove = sgui.playRandomlyOnce();
        if (! chosenMove) {
            Meteor.clearInterval(intervalId);
        }
    }, intervalMilliSeconds);

    this.render('board');
    if (Meteor.isClient) {
        Template.body.events = ({
            'keyup': function(evt) {
                console.log('keyup');
                if (evt.which == 32) {
                    console.log('space bar !');
                    sgui.playRandomlyOnce();
                }
            },
            'click': function(evt) {
                console.log('click');
                sgui.playRandomlyOnce();

            }
        });
    }
});
