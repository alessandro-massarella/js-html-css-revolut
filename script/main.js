$(document).ready(function(){



  // $('.nav_right ul li').click(function() {
  //   $('.nav_right ul').children().removeClass('active');
  //   $(this).next().addClass('active');
  // })

  // chiusura del menu
  $('.nav_right ul li').click(function(){
    if ($(this).next().hasClass('active')) {
      $(this).next().removeClass('active')
    } else {
      $('.nav_right ul').children().removeClass('active');
      $(this).next().addClass('active');
    }
  })










})
