Meteor.publish('teams', function() {
  return Teams.find();
});

Meteor.publish('fixtures', function() {
  return Fixtures.find({}, {sort: {date: -1}});
});