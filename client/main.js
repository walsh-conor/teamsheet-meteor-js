Meteor.subscribe('fixtures');

Meteor.subscribe('myFixtures');

Meteor.subscribe('tsUsers');


// Meteor.subscribe('userFixtures', someUser);


Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',                            // mandatory - path to redirect to after sign-out 
      dashboardRoute: '/',              // mandatory - path to redirect to after successful sign-in 
      passwordSignupFields: 'USERNAME_AND_EMAIL',        // One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default). 
      waitEmailVerification: false
    });
  });