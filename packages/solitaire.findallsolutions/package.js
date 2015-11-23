Package.describe({
  name: 'solitaire.findallsolutions',
  summary: ' Package that will find all solutions ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.export('SOLFINDALLSOLUTIONS', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
});
