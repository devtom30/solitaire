var PlateauFactory = (function(){
    /*// att privé
    var factory ;

    // fonction privée
    function pipi(){

    }

    // constructeur
    function constructor(){
	toto = 'coucou';
    };

    return {
	// att public
	att:true,
	// methode public
	getInstance : function(){
	    return toto;
	},
    create : function(){
        plateau = new SOLGAM.Plateau();
        return plateau;
    }
    };*/

    var factoryInstance;

    var createFactory;
    createFactory = function () {
        var createPlateau = function () {
            plateau = new SOLGAM.Plateau();
            return plateau;
        };

        return {
            createPlateau: createPlateau
        };
    };

    return {
        getInstance: function(){
            if(!factoryInstance){
                factoryInstance = createFactory();
            }
            return factoryInstance;
        }
    }
})();

SOLGAM.PlateauFactory = PlateauFactory;

