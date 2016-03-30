Template.myFixtures.helpers({
  myFixtures: Fixtures.find({owner: Meteor.userId()}, {sort: {date: -1}})
});
