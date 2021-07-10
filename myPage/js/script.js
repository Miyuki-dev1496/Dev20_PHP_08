$(function() {
   $("#login-show").click(function(){
     $("#login-modal").fadeIn();
   });
   $('.modal-close').on('click',function(){
    $('.login-modal').fadeOut();
    return false;
});
  });