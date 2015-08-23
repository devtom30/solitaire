Meteor.startup(function () {
    var collections = Mongo.Collection.getAll();
    var colName = 'cases_plateau';
    var collectionCasesPlateau;

    var collNumber = collections.length;
    var i = 0;
    while (i < collNumber) {
        if (collections[i]['name'] === colName) {
            collectionCasesPlateau = Mongo.Collection.get(colName);
        }
        i++;
    }

    if (!collectionCasesPlateau) {
        collectionCasesPlateau = new Mongo.Collection(colName);
    }
});