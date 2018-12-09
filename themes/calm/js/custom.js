(function($) {
  $(document).ready(function() {
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
      // event.preventDefault();
      openSlideMenu();
    });
    $('.btn-close').on('click', function() {
      // event.preventDefault();
      closeSlideMenu();
    });

    // Hover Sub Menu
    $('li.menu-item').hover(
      function() {
        $(this)
          .find(' > .sub-menu')
          .show(); // display immediate child
      },
      function() {
        // mouse leave
        if (!$(this).hasClass('current_page_item')) {
          // check if current page
          $(this)
            .find('.sub-menu')
            .hide(); // hide if not current page
        }
      }
    ); // end of sub-menu hover
  }); // end of document
});
