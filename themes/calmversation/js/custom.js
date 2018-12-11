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

    $('.entry-content .main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true
<<<<<<< HEAD
    }); //flickity for our-company & our-founder




=======
    }); //flickity for our-company

    $('.entry-content .main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true
    }); //flickity for our-founder
>>>>>>> b53eee92b46b52c4eba5d79ff136bb171dc37474
  }); // end of doc ready
})(jQuery);
