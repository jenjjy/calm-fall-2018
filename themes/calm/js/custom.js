(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');

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
