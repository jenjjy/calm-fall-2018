(function($) {
  $(document).ready(function() {
    // slide menu
    let mobileMenu = $('#side-menu');
    let mainMenu = $('#main');

    function openSlideMenu() {
      mobileMenu.style.width = '100%';
      // mainMenu.style.marginLeft = '250px';
    }

    function closeSlideMenu() {
      mobileMenu.style.width = '0';
      // mainMenu.style.marginLeft = '0';
    }

    $('.open-menu').on('click', function() {
      // event.preventDefault();
      openSlideMenu();
    });
    $('.btn-close').on('click', function() {
      // event.preventDefault();
      closeSlideMenu();
    });
  }); // end of document
});