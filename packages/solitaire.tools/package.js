Package.describe({
  name: 'solitaire.tools',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use('templating');
    api.addFiles('namespaces.js');
    api.export('SOLTOOLS', ['client', 'server']);
    api.addFiles([

    ],
        'client'
    );

});