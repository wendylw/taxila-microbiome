(function(){
  $('input[type="checkbox"]').on('click', function(e){
    var isChecked = $(this).is(':checked');

    if (isChecked) {
      $(this).parent('.checkbox').addClass('active');
    } else {
      $(this).parent('.checkbox').removeClass('active');
    }

    e.stopPropagation();
  });

  $('body').on('click', '.news-info__dropdown-button', function(e) {
    $(this).siblings('.news-info__sub-list').slideToggle();

    e.stopPropagation();
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

    $('.news-content').addClass('popular');
    $('.news-content__popular-bg').show();
  });

  $('.filter-timeline').on('click', function() {
    $('.news-content').removeClass('popular');
    $('.news-content__popular-bg').hide();
    $('.news-topics__container').css('top', 0);
  });

  $('.toggle-side__title.arrow').on('click', function() {
    $(this).parents('.toggle-side__item').toggleClass('open');
    $(this).siblings('.toggle-side__sublist').slideToggle();
  });

  $('.header__channel .header__nav-link').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('open-toggle-side');
    $('.side-backdrop').toggleClass('toggle-side__backdrop');
  });

  $('.header__catalog .header__nav-link').on('click', function() {
    $(this).toggleClass('active');
    $('.side').toggleClass('active');
    $('.side-backdrop').toggleClass('side__backdrop');
  });

  $('.side-backdrop').on('click', function() {
    if ($('.side-backdrop').hasClass('toggle-side__backdrop')) {
      $('.header__channel .header__nav-link').removeClass('active');
      $('.side-backdrop').removeClass('toggle-side__backdrop');
      $('body').removeClass('open-toggle-side');
    } else if ($('.side-backdrop').hasClass('side__backdrop')) {
      $('.header__catalog .header__nav-link').removeClass('active');
      $('.side').removeClass('active');
      $('.side-backdrop').removeClass('side__backdrop side-backdrop__subnav');
    } else if ($('.side-backdrop').hasClass('user-side__backdrop')) {
      $('.user-side').removeClass('active');
      $('.side-backdrop').removeClass('user-side__backdrop');
    }
  });

  $('.side__nav-item').on('click', function() {
    const id = $(this).data('item');
    const $sideItems = $('#' + id).find('.side__item');

    $(this).toggleClass('active');
    $('#' + id).toggleClass('show');

    if ($('#' + id).hasClass('show')) {
      $sideItems.each(function(index) {
        $(this).delay((index + 1) * 600).slideDown('fase');
      });
      $('.side-backdrop').addClass('side-backdrop__subnav');
    } else {
      $sideItems.fadeOut('fast');
      $('.side-backdrop').removeClass('side-backdrop__subnav');
    }
  });

  $('.side').on('click', '.side__subnav .side__main-title', function() {
    const id = $(this).parents('.side__subnav').attr('id');
    const $sideItems = $('#' + id).find('.side__item');

    $('.side__nav-item[data-item="' + id + '"]').removeClass('active');
    $('#' + id).removeClass('show');

    $sideItems.fadeOut('fast');
    $('.side-backdrop').removeClass('side-backdrop__subnav');
  });

  $('.back-to-top').on('click', function() {
    $(".news-content").stop().animate({scrollTop: 0}, 500);
  });

  $('.header__user').on('click', function() {
    $('.user-side').toggleClass('active');
    $('.side-backdrop').toggleClass('user-side__backdrop');
  });

  $('.article-operation__link').on('click', function() {
    const id = $(this).attr('name').replace('-link', '');

    $('#' + id).modal();
  });

  $('.tab__item').on('click', function() {
    const id = $(this).attr('name');

    $('.tab__item').removeClass('active');
    $('#operation-analyse-sentiment .tab-pane').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active');
  });
})();