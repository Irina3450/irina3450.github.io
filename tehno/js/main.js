// Шапрка сайта
$(function(){
  $('.header-menu-bth').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.container-header-minu, .overwlay').removeClass('open');
        
    } else {
        $(this).addClass('active');
        $('.container-header-minu, .overwlay').addClass('open');
    }
  })  
  $('.overwlay.open').click(function(){
    $(this).removeClass('open');
    $('.container-header-minu').removeClass('open');
  })
});