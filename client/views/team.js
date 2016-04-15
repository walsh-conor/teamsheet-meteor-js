// Template.oneUser.onCreated( function() {
//   this.subscribe( 'userFixtures', this );
// });

// Template.oneUser.helpers({
//   userFixtures: Fixtures.find({owner: this.userId}, {sort: {date: -1}})
// });


Template.oneUser.helpers({
  userFixtures: function () {
  	console.log('this user id = ' + this._id)
    return Fixtures.find({owner: this._id}, {sort: {date: -1}})
  }
});
