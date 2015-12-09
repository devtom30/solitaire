Package.describe({
  name: 'solitaire.core',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('solitaire.tools');
  api.addFiles('namespaces.js');
  api.export('SOLCORE', ['client', 'server']);
  api.addFiles('lib/Case.js');
  api.addFiles('lib/Plateau.js');
  api.addFiles('lib/PlateauFactory.js');
  api.addFiles('lib/Move.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('solitaire.tools');
  api.addFiles('namespaces.js');
//  api.export('SOLCORE', ['client', 'server']);
  api.addFiles('lib/Case.js');
  api.addFiles('lib/Plateau.js');
  api.addFiles('lib/PlateauFactory.js');

    api.addFiles('solitaire.core-tests.js');
//  api.addFiles('server/classes/Case.js');
//    api.addFiles('lib/Case.js');
});
