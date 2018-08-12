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
})();