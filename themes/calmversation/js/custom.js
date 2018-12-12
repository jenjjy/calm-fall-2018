(function ($) {
  $(function () {
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
      subMenu.parent().click(function () {
        console.log('less than 600');
        subMenu.empty();
        event.preventDefault();

        subMenu.children().slideToggle('show');
        console.log('sliding yet?');
      }); // end of .sub-menu
    } else {}

    hamburger.on('click', function () {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    $('a').click(function () {
      mobileMenu.removeClass('menu-slide show');
    });

    $('.testimony-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false
      // autoPlay: 8000
    }); //carousel testimony


    // if (screen.width <= 600) {
    //   $('.main-carousel').flickity({
    //     cellAlign: 'left',
    //     contain: true,
    //     wrapAround: true
    //   });
    // } else {
    //   //do something else
    // }



    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      }); //flickity for our-company & our-founder
    }
  }); // end of doc ready
})(jQuery);