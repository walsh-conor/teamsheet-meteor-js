Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'fixtures'
});

Router.route('/fixtures', {
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


Router.route('/myFixtures', {
  name: 'myFixtures'
});


Router.route('/addFixture', {
  name: 'addFixture'
});

Router.route('/editFixture/:_id', {
    template: 'editFixture',
    data: function(){
        var currentFixture = this.params._id;
        return Fixtures.findOne({ _id: currentFixture });
    }
});