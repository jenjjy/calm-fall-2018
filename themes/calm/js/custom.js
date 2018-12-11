(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

<<<<<<< HEAD

=======
    console.log(mobileWidth);
>>>>>>> 3c3ff27a967f9005879a35d112f779ba6c22e5e1

    if (location.href.indexOf('#') != -1) {
      event.preventDefault();
      console.log('dog');
      navBar();
    }

    function navBar() {
      $('.sub-menu')
        .parent()
        .click(function() {
          if (mobileWidth <= 600) {
            event.preventDefault();

<<<<<<< HEAD
            //add prevent default, toggle class, target parent of submenu
            $(this).slideToggle('show');
            console.log('afternoon');
          }
        }); // end of .sub-z
    }
=======
<<<<<<< HEAD
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
          $('.sub-menu').slideToggle('show');
          console.log('afternoon');
        }
      }); // end of .sub-menu
>>>>>>> 3c3ff27a967f9005879a35d112f779ba6c22e5e1
>>>>>>> 0c0394f20d6ce464644fc7b9f732c96cab18e9cf

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function() {
      mobileMenu.removeClass('menu-slide show');
    });

    $('.our-company .main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true
    }); //flickity for our-company and our-founder
  }); // end of doc ready
})(jQuery);
