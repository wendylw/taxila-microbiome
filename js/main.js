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

  $('.header__channel .header__nav-link, .toggle-side__header-title img').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('open-toggle-side');
    $('.side-backdrop').toggleClass('toggle-side__backdrop');
  });

  $('.header__catalog .header__nav-link, .side__header-title img').on('click', function() {
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

  $('.toggle-side__header-title img, .side__header-title img').on('click', function() {
    if ($(window).width() <= 1024) {
      $('.header__navs').addClass('active');

      setTimeout(function() {
        $('.side-backdrop').addClass('header-menu-dropback');
      }, 400);
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

      if ($(window).width() <= 1024) {
        $('.header__navs').addClass('active');

        setTimeout(function() {
          $('.side-backdrop').addClass('header-menu-dropback');
        }, 400);
      }
    }

    if ($('.side-backdrop').hasClass('side__backdrop')) {
      $('.header__catalog .header__nav-link').removeClass('active');
      $('.side').removeClass('active');
      $('.side-backdrop').removeClass('side__backdrop side-backdrop__subnav');
      $('body').removeClass('open-side');
      $('.side__subnav').removeClass('show');
      $('.side__nav-item').removeClass('active');
      $('.side__subnav .side__item').fadeOut('fast');

      if ($(window).width() <= 1024) {
        $('.header__navs').addClass('active');

        setTimeout(function() {
          $('.side-backdrop').addClass('header-menu-dropback');
        }, 400);
      }
    }

    if ($('.side-backdrop').hasClass('user-side__backdrop')) {
      $('.user-side').removeClass('active');
      $('.side-backdrop').removeClass('user-side__backdrop');
    }

    if ($('.side-backdrop').hasClass('geo-articles__backdrop')) {
      $('.geo-articles').removeClass('active');
      $('.side-backdrop').removeClass('geo-articles__backdrop');
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

    if ($(window).width() > 1024) {
      $('#' + id).toggleClass('show');
    } else {
      $('#' + id + '-m').slideToggle();
    }

    if ($('#' + id).hasClass('show')) {
      if ($(window).width() > 1024) {
        $sideItems.each(function(index) {
          $(this).delay((index + 1) * 600).slideDown('fase');
        });
        $('.side-backdrop').addClass('side-backdrop__subnav');
      }
    } else {
      if ($(window).width() > 1024) {
        $sideItems.fadeOut('fast');
        $('.side-backdrop').removeClass('side-backdrop__subnav');
      }
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

  $('.home-modal__select-all, .analysis-side__select-all').on('click', function() {
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

  $('.header__menu-m, .header__nav-link').on('click', function() {
    $('.header__navs').toggleClass('active');
    $('.side-backdrop').toggleClass('header-menu-dropback');
    $('body').toggleClass('open-side');
  });

  $('body').on('click', '.header-menu-dropback', function() {
    $('.header__navs').removeClass('active');
    $('.side-backdrop').removeClass('header-menu-dropback');
    $('body').removeClass('open-side');
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

  $('.analysis-side__container .home-modal__close-button-m').on('click', function() {
    $('.analysis-side__container').removeClass('active');
    $('.side-backdrop').removeClass('analysis-backdrop');
  });

  $('body').on('click', '.analysis-backdrop', function() {
    const $analysisItem = $('.analysis__item');

    $('.side-backdrop').toggleClass('analysis-backdrop');

    $analysisItem.each(function() {
      const id = $(this).attr('name');

      $('#' + id).removeClass('active');
    });
  });

  $('.article-side__tag-add').on('click', function() {
    $('.article-side__tag-input').show();
    $('.article-side__tag-add').hide();
    $('.article-side__tag-input-delete').show();
  });

  $('.article-side__tag-input-delete').on('click', function() {
    $('.article-side__tag-input').hide();
    $('.article-side__tag-add').show();
    $('.article-side__tag-input-delete').hide();
  });

  $('.filter__item.taxila').on('click', function() {
    const top = 180 + $('.filter-detail').height();

    if (!$('.filter-detail').is(':visible')) {
      $('.filter-detail').slideDown();
      if ($(window).width() > 1024) {
        $('.filter ~ .news-content').animate({top: top + 'px'}, 400);
      }
    } else {
      $('.filter-detail').slideUp();
      if ($(window).width() > 1024) {
        $('.filter ~ .news-content').animate({top: '180px'}, 400);
      }
    }
  });

  let setTimeoutObject = null;

  $('.news-content__remove').on('click', function(e) {
    e.stopPropagation();

    $('.article-delete').show();

    setTimeoutObject = setTimeout(function() {
      $('.article-delete').hide();
    }, 3000);
  });

  $('.article-delete__undo').on('click', function(e) {
    e.stopPropagation();

    $('.article-delete').hide();
    clearTimeout(setTimeoutObject);
  });

  $('.message__close-button').on('click', function(e) {
    e.stopPropagation();

    $('.message').hide();
    clearTimeout(setTimeoutObject);
  });

  $('.detail-pane__remove').on('click', function() {
    const id = $(this).attr('name');

    $('#' + id).remove();
    $(this).remove();
  });

  $('.map').on('click', function() {
    $('.geo-articles').addClass('active');
    $('.side-backdrop').addClass('geo-articles__backdrop');
  });

  $('.home-modal__batch-upload-button').on('click', function() {
    $('#add-new-resource').addClass('batch-upload');
  });

  $('.add-new-resource__hint').on('click', function() {
    $('#add-new-resource').removeClass('batch-upload');
  });

  $('.article-operation__title').on('click', function() {
    $('.article-operation__nav-container').slideToggle();
  });

  if ($(window).width() <= 1024) {
    $('.header__search').on('touch click', function() {
      $('.header__search input').show();
      $('.header__search').addClass('show');
      $('.side-backdrop').addClass('search-backdrop');
    });

    $('body').on('touch click', '.search-backdrop', function() {
      $('.header__search input').hide();
      $('.header__search').removeClass('show');
      $('.side-backdrop').removeClass('search-backdrop');
    });
  }
})();

$(window).on('load', function() {
  $('.loader').removeClass('loading');
  $('.analysis-side__container, .analysis-side__container, .toggle-side, .side, .user-side, .geo-articles').show();
});