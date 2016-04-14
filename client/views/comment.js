Template.comment.helpers({
  searching: function(type){
        if (type.indexOf('image') > -1) {
        		return false
        }
        else if (type.indexOf('video') > -1) {
        		return true
        }
  },
  isOwner: function() {
    var owner = null;
    if(Meteor.user().services.twitter){
            owner = Meteor.user().services.twitter.screenName;
        }
    else {
         owner =  Meteor.user().emails[0].address;
      }
    return this.commentOwner == owner 
  }
});
