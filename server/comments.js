 Meteor.methods({
  addComment: function (fixtureId,commentText, imageURL, fileType) {

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }

    if (!  Meteor.user().username) {
        var commentOwner = Meteor.user().services.twitter.screenName
        var commentOwnerImage = Meteor.user().services.twitter.profile_image_url
      }
    else {
        var commentOwner = Meteor.user().username;
        var commentOwnerImage = 'http://thesocialmediamonthly.com/wp-content/uploads/2015/08/photo.png';
      }
     

   Fixtures.update(fixtureId, 
               {$push: {comments: {
                                   commentOwner: commentOwner,
                                   commentOwnerImage: commentOwnerImage,
                                   commentText: commentText,
                                   imageURL: imageURL,
                                   fileType: fileType,
                                   createdAt: new Date(),
                                   fixtureId: fixtureId
                                  }
                        } 
                });

  },
  deleteComment: function (fixtureId,createdAt, commentOwner) {


    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not logged in");
    }

   Fixtures.update(fixtureId, 
               {$pull: {comments: {
                                   createdAt: createdAt
                                  }
                        } 
                });
  }
});

