$(document).ready(function(){
  $('[type=text]').each(function(){
    $(this).focus(function() {
      $(this).filepass();
    })
  })
});
