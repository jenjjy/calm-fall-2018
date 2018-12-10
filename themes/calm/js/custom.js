(function($) {
  $(function() {
    console.log('hihi');
    // slide menu
    let mobileMenu = $('#side-menu');

    function openSlideMenu() {
      mobileMenu.style.width = '100%';
      // mainMenu.style.marginLeft = '250px';
    }
    function closeSlideMenu() {
      mobileMenu.style.width = '0';
      // mainMenu.style.marginLeft = '0';
    }
    $('.open-menu').on('click', function() {
      console.log('test!');
      // event.preventDefault();
      openSlideMenu();
    });
    $('.btn-close').on('click', function() {
      // event.preventDefault();
      closeSlideMenu();
    });

    $('#nav-icon').on('click', function() {
      console.log('working!');
      $(this).toggleClass('open');
    });
  }); // end of doc ready
})(jQuery);
