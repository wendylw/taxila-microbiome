var MODES = {
  MASONRY: 'masonry',
  CLASSIC: 'classic'
};

(function(){
  $('input[type="checkbox"]').on('click', function(e){
    var isChecked = $(this).is(':checked');

    if (isChecked) {
      $(this).parent('.checkbox').addClass('active');
    } else {
      $(this).parent('.checkbox').removeClass('active');
    }
  });

  $('.header__search, .header__search input').on('mouseenter', function(e) {
    $('.header__search').addClass('active');
  });

  $('.header__search, .header__search input').on('mouseout', function(e) {
    if (!$('.header__search input').is(":focus")) {
      $('.header__search').removeClass('active');
    }
  });

  $('.header__switch-button').on('click', function() {
    var mode = $('.header__mode-text').data('value');

    if (mode === MODES.MASONRY) {
      $('body').addClass('classic');
      $('.header__mode-text').data('value', MODES.CLASSIC);
      $('.header__logo').attr('src', './img/logo.png');
    } else {
      $('body').removeClass('classic');
      $('.header__mode-text').data('value', MODES.MASONRY);
      $('.header__logo').attr('src', './img/logo-white.png');
    }
  });

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    resizeable: true
  });
})();

window.onload = function(){};