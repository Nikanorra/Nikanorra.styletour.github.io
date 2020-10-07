$(function() {
  $('#elastislide').elastislide();
})
//в сайдбаре слайдер. Измеряем ширину картинки, по первой картинке задаем ширину остальных картинко в слайдере и по ширине картинок выравниваем блок с текстом
$(window).load(function() {
  let carouselCaptionWidth = $('#carouselSidebar .active img').width();
  $('#carouselSidebar img').each(function(){
    $(this).attr('width', carouselCaptionWidth); //остальные картинки по ширине приравниваем ширине первой
  });
  $('#carouselSidebar .carousel-caption-sitebar').css('max-width', carouselCaptionWidth + 'px');
  $('#carouselSidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
  $('.sidebar .banner').css('max-width', carouselCaptionWidth + 'px');
  $('.sidebar .about').css('max-width', carouselCaptionWidth + 'px');
});
