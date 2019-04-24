var MODES = {
  MASONRY: 'masonry',
  CLASSIC: 'classic'
};

function getGridLayout(options) {
  $('.grid').masonry(options);
}

function resetGridLayout() {
  getGridLayout({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    resizeable: true
  });
}

(function(){
  $('.header__search, .header__search input').on('mouseenter', function(e) {
    $('.header__search').addClass('active');
  });

  $('.header__search, .header__search input').on('mouseout', function(e) {
    if (!$('.header__search input').is(":focus")) {
      $('.header__search').removeClass('active');
    }
  });

  $('.switch-button').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.mode-button').on('click', function() {
    var mode = $('.switch-button__mode-text').data('value');

    if (mode === MODES.MASONRY) {
      $('body').addClass('classic');
      $('.switch-button__mode-text').data('value', MODES.CLASSIC);
      $('.header__logo').attr('src', './img/logo.png');

      getGridLayout();

      $('.news-topics__container').delay(200).fadeIn(400);
    } else {
      $('body').removeClass('classic');
      $('.switch-button__mode-text').data('value', MODES.MASONRY);
      $('.header__logo').attr('src', './img/logo-white.png');

      resetGridLayout();

      $('.news-topics__container').hide();
    }
  });

  resetGridLayout();
})();

window.onload = function(){
  resetGridLayout();
};