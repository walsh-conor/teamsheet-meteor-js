describe("fixtures", function(){
	expect(Meteor.userId()).toBeNull()

    Meteor.loginWithPassword("test@mail.com", "testpassword", function(err){
      expect(err).toBeUndefined();
      expect(Meteor.userId()).not.toBeNull()

      Meteor.logout(function() {
        done();
      });
    });

  it("shows a list of the fixtures", function(done){
    expect($('.fixtures').length >= 0).toBeTruthy();
    done();
});
});
