(function ($) {
    $(function () {
        // slide menu
        let mobileMenu = $('#menu-slide');
        let mobileWidth = $('#page').width();
        let hamburger = $('#nav-icon');

        console.log(mobileWidth);

<<<<<<< HEAD
    // if (mobileWidth > 600) {
    //   console.log('hihihi');
    //   mobileMenu.removeClass('menu-slide show');
    //   mobileMenu.blur();
    //   //   desktopHeader();
    // }
=======
        if (mobileWidth > 600) {
            console.log('hihihi');
            mobileMenu.removeClass('menu-slide show');
            mobileMenu.blur();
            //   desktopHeader();
        }
>>>>>>> 5d8ab853b923ba4a7bdc4df90379139cf2ed6f95

        hamburger.on('click', function () {
            $(this).toggleClass('open');
            mobileMenu.toggleClass('menu-slide show');
        });

<<<<<<< HEAD
    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });

    $('.sub-menu').toggle();
  }); // end of doc ready
=======
        $('a').click(function () {
            mobileMenu.removeClass('menu-slide show');
        });
    }); // end of doc ready
>>>>>>> 5d8ab853b923ba4a7bdc4df90379139cf2ed6f95
})(jQuery);
