Template.addComment.events({
    "submit .new-comment": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      var fixtureCommentedOn = this._id;
 
      // Get value from form element
  	  var commentText = event.target.commentText.value;
      
      var file = $('#fileInput').get(0).files[0];
      if(file){       
        console.log(file);
                filefs = new FS.File(file);
                Images.insert(filefs, function (err, fileObj) {
                   if(!err){     
                   var imagesURL =  "/cfs/files/images/" + fileObj._id ;
                   var fileType =  fileObj.type() ;


                    // Insert a fixture into the collection
                     Meteor.call("addComment",fixtureCommentedOn, commentText, imagesURL,fileType);
                    
                   }else{ 
                      console.log('error getting file');
                      }
                });
      }
      else{ 
        console.log(' no file');
       var imagesURL = '/images/trans.png';
       var fileType =  'no image';

      // Insert a fixture into the collection
       Meteor.call("addComment",fixtureCommentedOn, commentText, imagesURL, fileType);
      }

 
      // Clear form
  	  event.target.commentText.value = "";
    }
  });


  Template.comment.events({
   "click .deletecomment": function () {
    fixtureToEdit = this.fixtureId;
    createdAt = this.createdAt;
    commentOwner = this.commentOwner;
    new Confirmation({
        message: "Are you sure?",
        title: "Delete This Comment",
        cancelText: "Cancel",
        okText: "Delete",
        success: true // wether the button should be green or red
      }, function (ok) {
         if(ok)
         {
          console.log('fixtureToEdit = ' + fixtureToEdit);
          console.log('createdAt = ' + createdAt);
          console.log('commentOwner = ' + commentOwner);
          Meteor.call("deleteComment", fixtureToEdit, createdAt, commentOwner);
         }
      });      
    }
  });