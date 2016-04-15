// this.Fixtures = new Meteor.Collection('fixtures');

this.Fixtures = new Mongo.Collection('fixtures'),
  FixturesIndex = new EasySearch.Index({
    collection: Fixtures,
    fields: ['team1', 'team2', 'venue', 'date', 'info'],
    engine: new EasySearch.Minimongo()
  });


  UsersIndex = new EasySearch.Index({
    collection: Meteor.users,
    fields: ['username', 'profile.name'],
    engine: new EasySearch.Minimongo()
  });