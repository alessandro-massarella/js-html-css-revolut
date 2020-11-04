$(document).ready(function(){



  $('.nav_right ul li').click(function() {
    $('.nav_right ul').children().removeClass('active');
    $(this).next().addClass('active');
  })










})
