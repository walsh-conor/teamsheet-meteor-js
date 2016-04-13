 Meteor.methods({
  addComment: function (fixtureId,commentText, imageURL, fileType) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }

   Fixtures.update(fixtureId, 
               {$push: {comments: {
                                   commentOwner: Meteor.user().services.twitter.screenName,
                                   commentOwnerImage: Meteor.user().services.twitter.profile_image_url,
                                   commentText: commentText,
                                   imageURL: imageURL,
                                   fileType: fileType,
                                   createdAt: new Date()
                                  }
                        } 
                });
 

 

  }
});

