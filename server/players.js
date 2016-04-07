Meteor.methods({
  editPlayers: function (fixtureId, t1players, t2players) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }

      Fixtures.update(fixtureId, {$set: {t1players: t1players, t2players: t2players} });
    
  }
});
