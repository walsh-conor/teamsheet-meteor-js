if (Teams.find().count() === 0) {
  [
    {
      name: 'Clonea'
    }, {
      name: 'Portlaw'
    }
  ].forEach(function(data) {
    return Teams.insert(data);
  });
}

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
    t1players:[
      {
        num: 1,
        name: 'Conor Walsh'
      },
      {
        num: 2,
        name: 'Liam Walsh'
      }
      ],
    t2players:[
    {
        num: 11,
        name: 'John Power'},
      {
        num: 22,
        name: 'Sean Power'
      }]
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
      {
        commentOwner: 'Conor Walsh',
        commentText: 'Going to be a great game',
        commentDate: '12/03/2016'
      },
      {
        commentOwner: 'Niamh Kelly',
        commentText: 'Yes it is!',
        commentDate: '13/03/2016'
      }
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
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });
  },
  deleteFixture: function (fixtureId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }
    Fixtures.remove(fixtureId);
  }
});