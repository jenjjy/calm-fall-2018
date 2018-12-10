(function ($) {
  $(function () {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

    // if (mobileWidth > 600) {
    //   console.log('hihihi');
    //   mobileMenu.removeClass('menu-slide show');
    //   mobileMenu.blur();
    //   //   desktopHeader();
    // }

    hamburger.on('click', function () {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function () {
      mobileMenu.removeClass('menu-slide show');
    });


    $('.our-company .main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true
    }); //flickity for our-company and our-founder

  }); // end of doc ready 
})(jQuery);