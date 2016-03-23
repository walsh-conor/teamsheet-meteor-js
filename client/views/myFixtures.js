Template.fixtures.helpers({
    myFixtures: function(){
        return Fixtures.find({owner: this.userId}, {sort: {date: 1}});
    }
});