Meteor.publish('fixtures', function() {
  return Fixtures.find({}, {sort: {date: 1}});
});

// Meteor.publish('fixtures', function() {
//   return Fixtures.find({date: {$gt: modifiedDate }}, {sort: {date: 1}});
// });

Meteor.publish('tsUsers', function() {
  return Meteor.users.find({});
});


// Meteor.publish('myFixtures', function publishFunction() {
//    return Fixtures.find({owner: this.userId}, {sort: {date: 1}});
//  });

//  Meteor.publish('fixtures-by-user', function publishFunction(someUser) {
//    return Fixtures.find({owner: someUser._id}, {sort: {date: -1}});
//  });