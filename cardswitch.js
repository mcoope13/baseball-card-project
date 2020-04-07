$(document).ready( function() {
$(function(){
  $('#back').on('click', function(){
    $('#big-image').attr('src', '/img/Groshans_back.jpg');
  });
});
 
$(function(){
  $('#front').on('click', function(){
    $('#big-image').attr('src', '/img/Groshans_front.jpg');
  });
});    
    
});