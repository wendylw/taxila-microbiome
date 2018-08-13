(function(){
  $('input[type="checkbox"]').on('click', function(e){
    var isChecked = $(this).is(':checked');

    if (isChecked) {
      $(this).parent('.checkbox').addClass('active');
    } else {
      $(this).parent('.checkbox').removeClass('active');
    }
  });

  $('body').on('click', '.news-info__dropdown-button', function(e) {
    $(this).siblings('.news-info__sub-list').slideToggle();

    e.stopPropagation();
  });

  $('.news-content .grid-item').on('click', function() {
    $('.side-menu__backdrop').show();
    $('.article__container').addClass('active');
  });

  $('body').on('click', '.side-menu__backdrop', function() {
    $('.side-menu__backdrop').hide();
    $('.article__container').removeClass('active');

    e.stopPropagation();
  });

  $('.side-dropup__button').on('click', function(e) {
    $(this).parent('.side-dropup').toggleClass('active');
    e.preventDefault();
  });

  $('.side-dropup__item').on('click', function() {
    var itemText = $(this).text();
    var $channelEL = '<li class="tag__item"><span class="text-middle">'+ itemText +'</span><img class="text-middle tag__item-close" src="./img/close.png" alt=""></li>';

    $(this).parents('.side-dropup').removeClass('active');
    $('.tag__list').append($channelEL);
  });

  $('.filter-popular').on('click', function() {
    var popularHeight = $('.news-content__popular-bg').height() + 67;

    $('.news-content').addClass('popular');
    $('.news-topics__container').css('top', popularHeight + 'px');
  });

  $('.filter-timeline').on('click', function() {
    $('.news-content').removeClass('popular');
    $('.news-topics__container').css('top', 0);
  });

  $( window ).resize(function() {
    var popularHeight = $('.news-content__popular-bg').height() + 67;

    $('.news-topics__container').css('top', popularHeight + 'px');
  });
})();