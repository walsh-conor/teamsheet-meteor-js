Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'fixtures'
});

Router.route('/teams', 'teams');

Router.route('/fixture/:_id', {
    template: 'oneFixture',
    data: function(){
        var currentFixture = this.params._id;
        return Fixtures.findOne({ _id: currentFixture });
    }
});