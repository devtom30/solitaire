Package.describe({
  name: 'solitaire.webui',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use('templating');
    api.use('solitaire.core');
    api.addFiles('namespaces.js');
    api.export('SOLGAMEUI', ['client', 'server']);
    api.addFiles(
        [
            'client/board.html',
            'client/grid.html',
            'client/cuteGrid.html',
            'client/cuteSquare.html',
            'client/board.js',
            'client/grid.js',
            'client/cuteGrid.js',
            'client/cuteSquare.js',
            'lib/SolitaireGameUI.js'
        ],
        'client'
    );

});