$(document).ready(function(){
    
    
    
   //work section
   for(var i = 0; i < works.length; ++i) { 
      $("#work").append("\
      <div class='col-sm-12 col-md-6'>\
        <img class='img-responsive' src='" + works[i] + "'>\
      </div>\
      ");
   };
    
    
});