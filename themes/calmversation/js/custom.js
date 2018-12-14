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
        $select.addClass('about-us-border');
        $select.parent().addClass('about-us-padding');

        console.log('false');
        // return false;
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
        wrapAround: true
        // autoPlay: 8000
      });
    } else {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false
        // autoPlay: 8000
      });
    } //carousel testimony

<<<<<<< HEAD

<<<<<<< HEAD
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      }); //flickity for our-company & our-founder
    }

    //course-page readmore
    let extraText = $('.course-text-more');
    let readMore = $('.readmore .wp-block-button__link');

    readMore.click(function() {
      console.log('asdf');
      extraText.toggleClass('hide-text');
    });
=======

    $(window).resize(function () {
=======
    $(window).resize(function() {
>>>>>>> f8ad1f30b9772943aabcd1cc07a8baf251c8b716
      if ($(window).width() < 600) {
        $('.main-carousel').flickity({
          cellAlign: 'left',
          contain: true,
          wrapAround: true
        });
      }
    }); //flickity for our-company & our-founder
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cfb883b596a284ac4217ab6d2c5aff58513eb29d
=======
>>>>>>> f8ad1f30b9772943aabcd1cc07a8baf251c8b716
=======

    //course-page readmore
    let extraText = $('.course-text-more');
    let readMore = $('.readmore .wp-block-button__link');

    readMore.click(function() {
      console.log('asdf');
      extraText.toggleClass('hide-text');
    });
>>>>>>> c9dae1cf2e738c5407f3150b26161e0bb60a7e50
  }); // end of doc ready
})(jQuery);
