<<<<<<< HEAD
(function($) {
  $(document).ready(function() {
    // slide menu
    // let mobileMenu = $('#side-menu');
    // let mainMenu = $('#main');

    // function openSlideMenu() {
    //   mobileMenu.style.width = '100%';
    //   // mainMenu.style.marginLeft = '250px';
    // }

    // function closeSlideMenu() {
    //   mobileMenu.style.width = '0';
    //   // mainMenu.style.marginLeft = '0';
    // }

    // $('.open-menu').on('click', function() {
    //   // event.preventDefault();
    //   openSlideMenu();
    // });
    // $('.btn-close').on('click', function() {e
    //   // event.preventDefault();
    //   closeSlideMenu();
    // });

    $('#nav-icon').click(function() {
      $(this).toggleClass('open');
    });
  }); // end of document
=======
(function ($) {
    $(document).ready(function () {
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

        $('.open-menu').on('click', function () {
            // event.preventDefault();
            openSlideMenu();
        });
        $('.btn-close').on('click', function () {
            // event.preventDefault();
            closeSlideMenu();
        });
    }); // end of document
>>>>>>> 1c8fbaebe4a310f0f998be2cfe03e2b621291a9b
});
