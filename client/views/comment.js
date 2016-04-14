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
    return this.commentOwner == Meteor.user().services.twitter.screenName;
  }
});
