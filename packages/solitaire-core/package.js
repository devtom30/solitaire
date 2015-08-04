Package.describe({
  name: 'devtom:solitaire-game',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('namespaces.js');
  api.export('SOLCORE', ['client', 'server']);
//    api.addFiles('lib/Case.js');
//  api.addFiles('solitaire-core.js');
//  api.addFiles('server/classes/Case.js');
//    api.addFiles('lib/Case.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('namespaces.js');
//  api.export('SOLCORE', ['client', 'server']);
  api.addFiles('lib/Case.js');
  api.addFiles('lib/Plateau.js');
    api.addFiles('lib/PlateauFactory.js');

    api.addFiles('solitaire-core-tests.js');
//  api.addFiles('server/classes/Case.js');
//    api.addFiles('lib/Case.js');
});
