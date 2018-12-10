(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

    console.log(mobileWidth);

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      console.log('working?');
      mobileMenu.toggleClass('menu-slide show');
    });

    hamburger.on('blur', function() {
      mobileMenu.removeClass('menu-slide show');
    });

    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });

    if (mobileWidth > 550) {
      mobileMenu.removeClass('menu-slide show');
      mobileMenu.blur();
    }
  }); // end of doc ready
})(jQuery);
