 var i=1;
 var j=1;
Template.editPlayers.events({
  "click #t1_add_row":function(event, template){
     template.$('#addr'+i).html("<input type='number' name='number'  placeholder='Number' class='form-control small-input'/> <input type='text' name='name' placeholder='Name' class='form-control'/> <input type='text' name='position' placeholder='Position' class='form-control'/> <input type='number' name='age' placeholder='Age' class='form-control small-input'/> <input type='text' name='height' placeholder='Height' class='form-control'/>");
      template.$('#edit-t1players').append(' <div class="form-group" id="addr'+(i+1)+'"></div><br>');
      i++; 
  },
  "click #t1_delete_row":function(event, template){
    if(i>1){
         template.$("#addr"+(i-1)).html('');
         i--;
         }
  },
  "click #t2_add_row":function(event, template){
     template.$('#t2addr'+j).html("<input type='number' name='number'  placeholder='Number' class='form-control small-input'/> <input type='text' name='name' placeholder='Name' class='form-control'/> <input type='text' name='position' placeholder='Position' class='form-control'/> <input type='number' name='age' placeholder='Age' class='form-control small-input'/> <input type='text' name='height' placeholder='Height' class='form-control'/>");

      template.$('#edit-t2players').append('<div class="form-group" id="t2addr'+(j+1)+'"></div><br>');
      j++; 
  },
  "click #t2_delete_row":function(event, template){
    if(j>1){
         template.$("#t2addr"+(j-1)).html('');
         j--;
         }
  },
   "click #save-players": function (event, template) {
     
       var t1data = template.$('#edit-t1players div:has(input)').map(function(index) {
        var $input =  $('input', this);
                return {
                         id: ++i,
                         number: $input.eq(0).val(),
                         name: $input.eq(1).val(),
                         position: $input.eq(2).val(),
                         age: $input.eq(3).val() ,
                         height: $input.eq(4).val()             
                       }
        }).get();

         console.log(t1data);

         var t2data = $('#edit-t2players div:has(input)').map(function(i, v) {
            var $input =  $('input', this);
                return {
                         id: ++i,
                         number: $input.eq(0).val(),
                         name: $input.eq(1).val(),
                         position: $input.eq(2).val(),
                         age: $input.eq(3).val() ,
                         height: $input.eq(4).val()             
                       }
        }).get();

         console.log(t2data);


       var fixtureid = this._id; //id of fixture to add players to

       Meteor.call("editPlayers", fixtureid, t1data, t2data);
       Router.go('fixtures');
    }
});

