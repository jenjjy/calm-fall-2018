(function ($) {
  $(function () {
      // slide menu
      let mobileMenu = $('#menu-slide');
      let mobileWidth = $('#page').width();
      let hamburger = $('#nav-icon');

<<<<<<< HEAD
      console.log(mobileWidth);

      if (location.href.indexOf('#') != -1) {
        event.preventDefault();
        console.log('dog');
        navBar();
      }

      function navBar() {
        $('.sub-menu')
          .parent()
          .click(function () {
            if (mobileWidth <= 600) {
              event.preventDefault();


              //add prevent default, toggle class, target parent of submenu
              $(this).slideToggle('show');
              console.log('afternoon');
            }
          }); // end of .sub-z
      }

      //add prevent default, toggle class, target parent of submenu
      $('.sub-menu')
        .parent()
        .click(function () {
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
=======
    console.log(mobileWidth);

    if (location.href.indexOf('#') != -1) {
      event.preventDefault();
      console.log('dog');
      //   navBar();
    }

    //add prevent default, toggle class, target parent of submenu
    $('.sub-menu')
      .parent()
      .click(function() {
        $(this).slideToggle('show');
        console.log('afternoon');
      }); // end of .sub-menu
>>>>>>> ef7bcce0063a840923e3c86ac1c0d214e52db17d

    $('.sub-menu').slideToggle('show'); console.log('afternoon');
  }
}); // end of .sub-menu


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
});
})(jQuery);