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
});
