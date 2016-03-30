Template.fixtures.helpers({
  fixtures: Fixtures.find()
});

Template.addFixture.events({
    "submit .new-fixture": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var team1 = event.target.team1.value;
  	  var team2 = event.target.team2.value;
  	  var date = event.target.date.value;
  	  var venue = event.target.venue.value;
  	  var time = event.target.time.value;
  	  var info = event.target.info.value;
  	  var t1players = [];
      var t2players = [];

	  // Insert a fixture into the collection
	  Meteor.call("addFixture", team1, team2, venue, date, time, info, t1players, t2players);

 
      // Clear form
      event.target.team1.value = "";
  	  event.target.team2.value = "";
  	  event.target.venue.value = "";
  	  event.target.date.value = "";
  	  event.target.time.value = "";
  	  event.target.info.value = "";
      Router.go('fixtures');
    }
  });
  
  Template.myFixture.events({
   "click .delete": function () {
    fixtureToDelete = this._id;
    new Confirmation({
        message: "Are you sure?",
        title: "Delete This Fixture",
        cancelText: "Cancel",
        okText: "Delete",
        success: true // wether the button should be green or red
      }, function (ok) {
         if(ok)
         {
          Meteor.call("deleteFixture", fixtureToDelete);
          Router.go('myFixtures');
         }
      });      
    }
  });


Template.editFixture.events({
    "submit .edit-fixture": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      fixtureToEdit = this._id;
      // Get value from form element
      var team1 = event.target.team1.value;
      var team2 = event.target.team2.value;
      var date = event.target.date.value;
      var venue = event.target.venue.value;
      var time = event.target.time.value;
      var info = event.target.info.value;
      var t1players = [];
      var t2players = [];

    // Insert a coffee into the collection
     Meteor.call("editFixture", fixtureToEdit, team1, team2, venue, date, time, info, t1players, t2players);
      
      // Clear form
      event.target.team1.value = "";
      event.target.team2.value = "";
      event.target.venue.value = "";
      event.target.date.value = "";
      event.target.time.value = "";
      event.target.info.value = "";
      Router.go('myFixtures');
    }
  });
 