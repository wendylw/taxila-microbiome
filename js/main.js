function hidedropback() {
  if ($('body').hasClass('open-toggle-side') || $('body').hasClass('open-side')) {
    $('.side-backdrop').hide();
  }
}

function showDropback() {
  if ($('body').hasClass('open-toggle-side') || $('body').hasClass('open-side')) {
    $('.side-backdrop').show();
  }
}

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
    $('body').toggleClass('open-side');
    $('.side').toggleClass('active');
    $('.side-backdrop').toggleClass('side__backdrop');

    if (!$('.side').hasClass('active')) {
      $('.side__subnav').removeClass('show');
      $('.side__nav-item').removeClass('active');
      $('.side__subnav .side__item').fadeOut('fast');
    }
  });

  $('.side-backdrop').on('click', function() {
    if ($('.side-backdrop').hasClass('toggle-side__backdrop')) {
      $('.header__channel .header__nav-link').removeClass('active');
      $('.side-backdrop').removeClass('toggle-side__backdrop');
      $('body').removeClass('open-toggle-side');
      $('.side__subnav').removeClass('show');
      $('.side__nav-item').removeClass('active');
      $('.side__subnav .side__item').fadeOut('fast');
    }

    if ($('.side-backdrop').hasClass('side__backdrop')) {
      $('.header__catalog .header__nav-link').removeClass('active');
      $('.side').removeClass('active');
      $('.side-backdrop').removeClass('side__backdrop side-backdrop__subnav');
      $('body').removeClass('open-side');
      $('.side__subnav').removeClass('show');
      $('.side__nav-item').removeClass('active');
      $('.side__subnav .side__item').fadeOut('fast');
    }

    if ($('.side-backdrop').hasClass('user-side__backdrop')) {
      $('.user-side').removeClass('active');
      $('.side-backdrop').removeClass('user-side__backdrop');
    }

    if ($('.side-backdrop').hasClass('article-side__backdrop')) {
      $('.article-side').removeClass('active');
      $('.side-backdrop').removeClass('article-side__backdrop');
    }
  });

  $('.side__nav-item').on('click', function() {
    const id = $(this).data('item');
    const $sideItems = $('#' + id).find('.side__item');

    $('.side__nav-item').removeClass('active');
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

  $('.header__user, .header__user-m').on('click', function() {
    $('.user-side').toggleClass('active');
    $('.side-backdrop').toggleClass('user-side__backdrop');
  });

  $('.grid__article-button').on('click', function() {
    $('.article-side').toggleClass('active');
    $('.side-backdrop').toggleClass('article-side__backdrop');
  });

  $('.article-operation__link').on('click', function() {
    const id = $(this).attr('name').replace('-link', '');

    $('#' + id).modal();
  });

  $('.tab__item').on('click', function() {
    const id = $(this).attr('name');

    $(this).parent('.tab').find('.tab__item').removeClass('active');
    $('#' + id).siblings('.tab-pane').removeClass('active');

    $(this).addClass('active');
    $('#' + id).addClass('active');
  });

  $('.tags__item').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.home-modal__select-all').on('click', function() {
    const id = $(this).attr('name');

    $('#' + id).find('.tags__item').addClass('active');
  });

  $('.home-modal__add-item').on('click', function() {
    const addItemText = $(this).text();

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).text('+ ' + addItemText);
    } else {
      $(this).text(addItemText.replace('+ ', ''));
    }

  });

  $('.header__article').on('mouseover', function() {
    hidedropback();
  });

  $('.header__article').on('mouseout', function() {
    showDropback();
  });

  $('.header__menu-m, .header__close-button img, .header__user-m').on('click', function() {
    $('.header__navs').slideToggle();
  });

  $('.change-password__button').on('click', function() {
    $('.change-password__content').toggle();
  });

  $('body').on('click', '.change-password__content', function(e) {
    e.stopPropagation();

    if (!$(e.target).parents('.change-password__form-container').length || $(e.target).hasClass('change-password__form-container')) {
      $('.change-password__content').toggle();
    }
  });

  $('.analysis__item').on('click', function() {
    const id = $(this).attr('name');

    $('#' + id).toggleClass('active');
    $('.side-backdrop').toggleClass('analysis-backdrop');
  });

  $('body').on('click', '.analysis-backdrop', function() {
    const $analysisItem = $('.analysis__item');

    $('.side-backdrop').toggleClass('analysis-backdrop');

    $analysisItem.each(function() {
      const id = $(this).attr('name');

      $('#' + id).removeClass('active');
    });
  });
})();