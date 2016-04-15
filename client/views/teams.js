Template.teams.helpers({
  tsUsers: Meteor.users.find()
});

Template.searchUsers.helpers({
  usersIndex: () => UsersIndex
});