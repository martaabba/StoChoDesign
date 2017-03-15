$(document).ready(function(){
    
    
    
   //work section
   for(var i = 0; i < works.length; ++i) { 
      $("#work").append("\
      <div class='col-sm-12 col-md-6'>\
         <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
         </a>\
      </div>\
      ");
 
      $(".work-img").mouseenter(function(){
         $(".info", this).show();
      }).mouseleave(function(){
         $(".info", this).hide();
      });
    
   };

   
   
   
   
});