(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');
    let subMenu = $('.sub-menu');

    // Sub-Menu toggle
    $('.menu-item a').on('click', function(event) {
      let $select = $(this);
      let hasLink = $select.attr('href');

      if (hasLink === '#' && mobileWidth < 600) {
        event.preventDefault();

        subMenu.slideToggle('fast');
        $select.toggleClass('about-us-border');
        subMenu.parent().toggleClass('about-us-padding');
      } else {
        return true;
      }
    }); // end of sub-menu toggle

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    if (mobileWidth > 600) {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 8000
      });
    } else {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: 8000
      });
    } //carousel testimony

    $(window).resize(function() {
      // console.log('carousel');
      if ($(window).width() < 600) {
        $('.main-carousel').flickity({
          cellAlign: 'left',
          contain: true,
          wrapAround: true
        });
      }
    }); //flickity for our-company & our-founder

    //course-page readmore
    let extraText = $('.course-text-more');
    let readMore = $('.readmore .wp-block-button__link');

    readMore.click(function() {
      // console.log('asdf');
      extraText.toggleClass('hide-text');
    });

    $('.bubble').on('click', function() {
      $('.bubble').removeClass('active');
      $(this).addClass('active');
      let id = $(this).attr('data-id');
      // console.log(id);
      $('.themes').hide();

      $(`[data-id=${id}]`).show();
    });
  }); // end of doc ready
})(jQuery);
