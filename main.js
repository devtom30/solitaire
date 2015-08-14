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

    console.log(SOLCORE);
    var plateauFactory = SOLCORE.PlateauFactory.getInstance();

    plateau = plateauFactory.createPlateau();
    Session.set(SOLCORE.session.plateau, plateau);
    console.log(plateau);
    this.render('board');

    myVar = setTimeout(function(){
        plateau.grille[0][0] = 'alorrrrrrs';
        console.log(plateau.grille[0][0]);
        Session.set(SOLCORE.session.plateau, plateau);
    }, 3000);
});
