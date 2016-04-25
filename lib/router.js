Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/fixtures', {
  name: 'fixtures'
});

Router.route('/teams', {
  name: 'teams'
});

Router.route('/fixture/:_id', {
    template: 'oneFixture',
    name: 'oneFixture',
    data: function(){
        var currentFixture = this.params._id;
        return Fixtures.findOne({ _id: currentFixture });
    }
});

Router.route('/user/:_id', {
    template: 'oneUser',
    name: 'oneUser',
    data: function(){
        var currentUser = this.params._id;
        return Meteor.users.findOne({ _id: currentUser });
    }
});



  Router.route('/myFixtures', {
    name: 'myFixtures',
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
      this.next();
    }
  });

  Router.route('/addFixture', {
    name: 'addFixture',
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
      this.next();
    }
  });

Router.route('/editFixture/:_id', {
    template: 'editFixture',
    data: function(){
        var currentFixture = this.params._id;
        return Fixtures.findOne({ _id: currentFixture });
    },
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
      this.next();
    }
});

Router.route('/editPlayers/:_id', {
    template: 'editPlayers',
    data: function(){
        var currentFixture = this.params._id;
        return Fixtures.findOne({ _id: currentFixture });
    },
    onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
      this.next();
    }
});


var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('home');
    } else {
        this.next();
    }
};