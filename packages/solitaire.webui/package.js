Package.describe({
  name: 'solitaire.webui',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('templating');
  api.addFiles('namespaces.js');
  api.export('SOLGAMEUI', ['client', 'server']);
  api.addFiles(['client/board.html', 'client/grid.html', 'client/board.js', 'client/grid.js', 'lib/SolitaireGameUI.js'], 'client');
  
});