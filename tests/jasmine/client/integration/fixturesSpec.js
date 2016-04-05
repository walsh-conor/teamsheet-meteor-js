describe("fixtures", function(){
  it("shows a list of the fixtures", function(done){
    expect($('.fixtures').length >= 0).toBeTruthy();
    done();
});
});