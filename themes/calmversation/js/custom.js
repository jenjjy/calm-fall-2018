(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

    console.log(mobileWidth);

    // Sub-Menu toggle
    $('.menu-item a').on('click', function(event) {
      let $select = $(this);
      let hasLink = $select.attr('href');

      if (hasLink === '#') {
        event.preventDefault();
        console.log('link exists');
        $select.slideToggle('fast');

        console.log('menu toggling yet?');
      } else {
        return true;
      }
    }); // end of sub-menu toggle

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });

    if (mobileWidth > 600) {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
        // prevNextButtons: false
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

    $(window).resize(function() {
      if ($(window).width() < 600) {
        $('.main-carousel').flickity({
          cellAlign: 'left',
          contain: true,
          wrapAround: true
        });
      }
    }); //flickity for our-company & our-founder
  }); // end of doc ready
})(jQuery);
