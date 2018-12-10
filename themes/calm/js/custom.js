(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

    console.log(mobileWidth);

    if (mobileWidth > 600) {
      console.log('hihihi');
      mobileMenu.removeClass('menu-slide show');
      mobileMenu.blur();
      //   desktopHeader();
    }

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });
  }); // end of doc ready
})(jQuery);
