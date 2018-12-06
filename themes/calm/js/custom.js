(function($) {
  $(document).ready(function() {
    // hamburger menu yum yum
    $('.hamburger').click(function() {
      $(this).toggleClass('open');
    });
    // About Us sub-menu
    $('.sub-menu').click(function() {
      $(this).toggleClass('open');
    });
  }); // end of document
});
