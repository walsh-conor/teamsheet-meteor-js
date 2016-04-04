 var i=1;
 var j=1;
Template.editPlayers.events({
  "click #t1_add_row":function(event, template){
     template.$('#addr'+i).html("<td><input name='number' type='number' placeholder='Number' required class='form-control input-md'  /></td><td><input required name='name' type='text' placeholder='Name'  class='form-control input-md'></td><td><input  name='position' type='text' placeholder='Position'  class='form-control input-md'></td><td><input  name='age' type='number' placeholder='Age'  class='form-control input-md'></td><td><input name='height' type='text' placeholder='Height' class='form-control input-md'  /></td>");

      template.$('#edit-t1players').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  },
  "click #t1_delete_row":function(event, template){
    if(i>1){
         template.$("#addr"+(i-1)).html('');
         i--;
         }
  },
  "click #t2_add_row":function(event, template){
     template.$('#t2addr'+j).html("<td><input name='number' type='number' placeholder='Number' required class='form-control input-md'  /></td><td><input required name='name' type='text' placeholder='Name'  class='form-control input-md'></td><td><input  name='position' type='text' placeholder='Position'  class='form-control input-md'></td><td><input  name='age' type='number' placeholder='Age'  class='form-control input-md'></td><td><input name='height' type='text' placeholder='Height' class='form-control input-md'  /></td>");

      template.$('#edit-t2players').append('<tr id="t2addr'+(j+1)+'"></tr>');
      j++; 
  },
  "click #t2_delete_row":function(event, template){
    if(j>1){
         template.$("#t2addr"+(j-1)).html('');
         j--;
         }
  },
   "click #save-players": function (event, template) {
     
       var data = template.$('#edit-t1players tr:has(td)').map(function(index) {
        var $td =  $('td', this);
        console.log($td);
                return {
                         id: ++i,
                         number: $td.eq(0).text(),
                         name: $td[1].text(),
                         position: $td.eq(2).text(),
                         age: $td.eq(3).text() ,
                         height: $td.eq(4).text()             
                       }
        }).get();

         console.log(data);

         var tbl2 = $('#edit-t2players tr:has(td)').map(function(i, v) {
            var $td =  $('td', this);
                return {
                         id: ++i,
                         number: $td.eq(0).text(),
                         name: $td.eq(1).text(),
                         position: $td.eq(2).text(),
                         age: $td.eq(3).text() ,
                         height: $td.eq(4).text()             
                       }
        }).get();

         console.log(tbl2);
    }
});

