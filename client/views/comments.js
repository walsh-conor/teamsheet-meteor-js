Template.addComment.events({
    "submit .new-comment": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      var fixtureCommentedOn = this._id;
 
      // Get value from form element
  	  var commentText = event.target.commentText.value;

	  // Insert a fixture into the collection
	   Meteor.call("addComment",fixtureCommentedOn, commentText);
 
      // Clear form
  	  event.target.commentText.value = "";
    }
  });

 