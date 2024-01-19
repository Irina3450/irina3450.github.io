$(function(){
  $('.header-menu-bth').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.container-header-minu').removeClass('open');
    } else {
        $(this).addClass('active');
        $('.container-header-minu').addClass('open');
    }
  })  
});