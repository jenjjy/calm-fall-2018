(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');
    let subMenu = $('.sub-menu');

    console.log(mobileWidth);

    if ($('#site-navigation') && location.href.indexOf('#') != -1) {
      event.preventDefault();
      console.log('dog');
    }

    if (mobileWidth < 600) {
      subMenu.parent().click(function() {
        console.log('less than 600');
        subMenu.empty();
        event.preventDefault();

        subMenu.children().slideToggle('show');
        console.log('sliding yet?');
      }); // end of .sub-menu
    } else {
    }

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });

    $('.testimony-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 8000
    }); //carousel testimony

    $('.entry-content .main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 8000
    }); //flickity for our-founder

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
  }); // end of doc ready
})(jQuery);
