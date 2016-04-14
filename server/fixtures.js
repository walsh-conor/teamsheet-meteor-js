if (Fixtures.find().count() === 0) {
  fixture = {
    team1: 'Clonea',
    team2: 'Portlaw',
    venue: 'Tramore',
    date: '01/04/2015',
    time: '21.30',
    t1score: '--.--',
    t2score: '--.--',
    info: 'Intermediate Semi-Final',
    t1players:[],
    t2players:[]
  };
  Fixtures.insert(fixture);
}


 Meteor.methods({
  addFixture: function (team1, team2, venue, date, time, info, t1players, t2players) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }

    var comments = [
      ];
 
    Fixtures.insert({
        team1: team1,
        team2: team2,
        venue: venue,
        date: date,
        time: time,
        info: info,
        t1score: '--.--',
        t2score: '--.--',
        comments:comments,
        t1players: t1players,
        t2players: t2players,
        createdAt: new Date(), // current time
        owner: Meteor.userId()         // _id of logged in user
      });
  },
  deleteFixture: function (fixtureId, owner) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    if (Meteor.userId() != owner) {
      throw new Meteor.Error("you do not have pemission to delete this fixture");
    }
    Fixtures.remove(fixtureId);
  },
  editFixture: function (fixtureId, team1, team2, venue, date, time, info, owner) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    if (Meteor.userId() != owner) {
      throw new Meteor.Error("you do not have pemission to delete this fixture");
    }

      Fixtures.update(fixtureId, {$set: {team1: team1, team2: team2, venue: venue, date: date, time: time, info: info} });
    
  }
});
