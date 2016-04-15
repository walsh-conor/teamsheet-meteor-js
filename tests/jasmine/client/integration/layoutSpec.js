describe("layout", function(){
    it("shows 'Foosboom' heading", function(){
      expect($('h1').text()).toEqual('Foosboom');
    });
});