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
       Meteor.call("addComment",fixtureCommentedOn, commentText, imagesURL);
      }

      // FS.Utility.eachFile(event, function(file) {
      //   Images.insert(file, function (err, fileObj) {
      //     if (err){          } else {
      //       var imagesURL = { "profile.image": "/cfs/files/images/" + fileObj._id };
      //     }
      //     })
      //      });


 
      // Clear form
  	  event.target.commentText.value = "";
    }
  });

 