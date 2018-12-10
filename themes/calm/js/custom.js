(function ($) {
  $(function () {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

<<<<<<< HEAD
    // if (mobileWidth > 600) {
    //   console.log('hihihi');
    //   mobileMenu.removeClass('menu-slide show');
    //   mobileMenu.blur();
    //   //   desktopHeader();
    // }
=======
    console.log(mobileWidth);

    if (mobileWidth <= 600) {
      event.preventDefault();

      //add prevent default, toggle class, target parent of submenu
      $('.sub-menu')
        .parent()
        .click(function() {
          $(this).slideToggle('show');
          console.log('afternoon');
        });
      //   $('#primary-menu')
      //     .children()
      //     .click(function() {
      //       $(this)
      //         .children('.sub-menu')
      //         .slideToggle('show');
      //     });
    }
>>>>>>> 38867c64ce764a41d071257a95429333c3b2cb89

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