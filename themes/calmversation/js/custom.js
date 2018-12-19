(function($) {
  $(function() {
    // slide menu
    let mobileMenu = $('#menu-slide');
    let mobileWidth = $('#page').width();
    let hamburger = $('#nav-icon');
    let subMenu = $('.sub-menu');
    let fixedHeader = $('.menu-header-container');
    let headerHeight = $('.site-branding').height();
    let $window = $(window);
    let $scrollTop = $('.scrollTop');

    // Sub-Menu toggle
    $('.menu-item a').on('click', function(event) {
      let $select = $(this);
      let hasLink = $select.attr('href');

      if (hasLink === '#' && mobileWidth < 700) {
        event.preventDefault();

        subMenu.slideToggle('fast');
        $select.toggleClass('about-us-border');
        subMenu.parent().toggleClass('about-us-padding');
      } else {
        return true;
      }
    }); // end of sub-menu toggle

    hamburger.on('click', function() {
      $(this).toggleClass('open');
      mobileMenu.toggleClass('menu-slide show');
    });

    //Scroll Top
    $window.scroll(function() {
      // declare letiable

      let topPos = $(this).scrollTop();

      // if user scrolls down - show scroll to top button
      if (topPos > 150) {
        $scrollTop.css('opacity', '1');
      } else {
        $scrollTop.css('opacity', '0');
      }
    }); // scroll END

    //Click event to scroll to top
    $scrollTop.click(function() {
      $('html, body').animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    }); // click() scroll top EMD

    if (mobileWidth > 700) {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 8000
      });
    } else {
      $('.testimony-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: 8000
      });
    } //carousel testimony

    $window.on('scroll', function(event) {
      event.preventDefault();
      if ($window.scrollTop() > headerHeight) {
        fixedHeader.addClass('fixed-header');
      } else {
        fixedHeader.removeClass('fixed-header');
      }
    }); // end of fixed-header

    if (mobileWidth < 700) {
      $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      });
    } //flickity for our-company & our-founder

    //course-page readmore
    let $extraText = $('.course-text-more');
    let $readMore = $('.readmore .wp-block-button__link');
    let $arrow = $('.fa-caret-down');

    $readMore.click(function() {
      $extraText.toggleClass();
      $arrow.toggleClass('transform');
    });

    // $('.themes').hide();
    $('.bubble')
      .first()
      .addClass('active');

    $('.themes').hide();

    $('.themes')
      .first()
      .show();

    //course-page bubbles on click
    $('.bubble').on('click', function() {
      $('.bubble').removeClass('active');
      $(this).addClass('active');
      let id = $(this).attr('data-id');
      // console.log(id);
      $('.themes').hide();

      $(`[data-id=${id}]`).show();
    });

    // let $bubble = $('.bubble');
    let $bubble1 = $('.bubble41');
    let $bubble2 = $('.bubble109');
    let $bubble3 = $('.bubble111');
    let $bubble4 = $('.bubble113');
    let $bubble5 = $('.bubble115');

    $bubble1.on('click', function() {
      $bubble1.css('order', '3');
      $bubble2.css('order', '4');
      $bubble3.css('order', '5');
      $bubble4.css('order', '1');
      $bubble5.css('order', '2');
    });

    $bubble2.on('click', function() {
      $bubble1.css('order', '2');
      $bubble2.css('order', '3');
      $bubble3.css('order', '4');
      $bubble4.css('order', '5');
      $bubble5.css('order', '1');
    });
    $bubble3.on('click', function() {
      $bubble1.css('order', '1');
      $bubble2.css('order', '2');
      $bubble3.css('order', '3');
      $bubble4.css('order', '4');
      $bubble5.css('order', '5');
    });
    $bubble4.on('click', function() {
      $bubble1.css('order', '5');
      $bubble2.css('order', '1');
      $bubble3.css('order', '2');
      $bubble4.css('order', '3');
      $bubble5.css('order', '4');
    });
    $bubble5.on('click', function() {
      $bubble1.css('order', '4');
      $bubble2.css('order', '5');
      $bubble3.css('order', '1');
      $bubble4.css('order', '2');
      $bubble5.css('order', '3');
    });

    console.log(
      `
 ::::::::::::::::::::::::/+ooo++++/////::::::::::::
-------------------:/osyyhhyyyyyssssyyys+/::::::::
----------------:+osssyyyyyyyyyysssyyyyhyyys+:----
--------------:/osssssyssyyssysyysossssssyyhhyo/:-
.......---..--+syyyhhhhhhhhhhyhhyysyyyyysssyyyyy//
...........:/oyyhhhhhhyhhhhhyyyyyysssyhhhhhhhyyy\`-
.........-//osyhyhyhhyyyhyhhyyyyhyysyhhyhdhhhhhh\`:
........://oyhhyhhhhhhhhhhhhhhhhhyyyyhhhhhhhhhhy\`.
.......--++yhhhyhhhhhhhddmdhhhhhddhyhhhhyhhyhyyy::
....\`.-:/o+yhdddddhhhhhhhhhhhdhhhhhdddhhhhdhhyhh-\`
....\`.:/s+sddhhhhhhyhhhhyyhhyyhhhhyyhhhhhhdddhhyso
\`\`\`\`\`-+ooyhhyyyhhhhhyhhyyhhhyyhhyhyhhhhhhhhhdysyyh
\`\`\`\`.:++osyhhhyyyyyyyhyyhyhhhyyhyyyhhhyhyhyyo/shhh
\`\`\`\`.-+/+shyyyyyyyyyyhyyyysysysyyyyyyhyyyhys \`+hhh
\`\`\`\`.-+:/yyyyysyysssssoosoosossssssssyyyyyy/  /hhh
    .-/-+syssso+sooo+soooooooo+s+ooososssso:  /hhh
    \`./::+ssoooooooo+ooooooooo+sooososoosos:  /syh
    \`.-.:+oo+o+ooosoosoossssooosooosooooooo:  :ysh
\`\`   \`:.-+ooosoyyyyyyhhhhhhyhyyhyyyysssosoo/  :osh
mmdy:\`/.-oyyyhhhhhhhhhyyyyyhhhhhhhhhddhhyyy+  :shh
mmmmd\`+:+yhddddhhyyssyyyssssssyhmdmhdmdddhh+  :yhy
mmmms.+yshdddddmdyhyyyyysssyyyyhhhhyyyyyyyy/  -sso
mmmm--/hhhhyyyysssssyyyo//+oooooooooooo++++:  -yhh
mmmh\`\`/-.ossssooooossyo+:/+++//////////////:  -yhh
mmm+\` \`\` +oo++++++ooso/-.-/+++///////////++:  -yhh
mmm.\`    .+o++++++oss+/:--:/+oo++///////+++/  -yhh
mmy\`     \`-++++++oso++////////oso++++++++++/  -yhh
mm:\`    \`\`.+oo++ooosyysooossooo++oo++++++++/  .yhh
md\`  \`.:/\`.+oooooosyyhhyyhyyyso++++++++++++/  -yhh
mo--//++s/:+oooosyyyyyssssossssssssss+++ooo/  .yhh
m-////+syhs+oooosyyyysysoosssssyyyyyso+oooo+  -yhh
h./++++syhyysooooosssyyyyyyyssooooooo+o+++o+  :yhh`,
      `
MMMMMMMMMhydNhyddNNNNmmddmmNMMMMMMMMMMMMMMMMMMMMMM
MMMMMMNhysssyydmNNNNNNmhddmmdmMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMmddmmNNNNNNNNmmdddmmmdNMMMMMMMMMMMMMMMMMM
MMMMMNmmddhydNNNNNdhmNMMMNmmNmdNMMMMMMMMMMMMMMMMMM
MMMMmNNNmmmmmNNNNNmymMMMMMMNmmNNMMMMMMMMMMMMMMMMMM
MMMmNNNmNNNNNNNNNNdNhMMMMMMMMNNmMMMMMMMMMMMMMMMMMM
MMmmNmmNMMMMNMMmyydmmNNNMNNMMMNNMMMMMMMMMMMMMMMMMM
MMmNmmNMMMMmmmmmmNNNNNNNmmmmNNmNMMMMMMMMMMMMMMMMMM
MmNNmmNMMNhdmmmmdmmddmmNNNNNNNNNNNMMMMMMMMMMMMMMMM
NdNmmNMMNmNNNmmmmmmmNNNNNNNNNNNNNNNNNMMMMMMMMMMMMM
NNNhdmMNNNNdyso++++oyhhhyyyyhddmNNNNNmNMMMMMMMMMMM
NNmNhNNNNms/-..\`\`\`\`\`.---:::/osyhdNNNNNmNMMMMMMMMMM
MmNNNNNNdo:-..\`\`\`\`\`\`\`\`...-::/ossydmNNNNNMMMMMMMMMM
MNmddmNmo:--...\`\`\`\`\`....--://+oosymNNNNNMMMMMMMMMM
MMMNddNh+:--.............-:://+osydmNNNNMMMMMMMMMM
MMMMMddy/--.....\`\`.......--::/+osshmNNNNNMMMMMMMMM
MMMMNdmh/-.............-----:/+ossydNNNNNMMMMMMMMM
MMMMNNNh/::////::::-::::/+ossyhhhysymmNNNNMMMMMMMM
MMMMdNNs/+++/+ooo+/:-:/osso+///++/::/hNNNmNMMMMMMM
MMMMh/:--::::::::--....:/osyhysyys.\`.mNNNNmNMMMMMM
MMMMs\`\`ydmNNNNNdhs.\`.\`-dmmdNmdNNNd..omNmmNmNNMMMMM
MMMMNs-:yddmmNNNNd-+:--yNNNNNNNNh-:sydNhmmmdNMMMMM
MMMMmNd+./sdmNNmh/o:\`.//+hddmdh+:oyhhdmdMNmmmmNNMM
MMNmmmhy/:-/+o+++s/.\`.-/so+++++syhhhhhmmmmmNNmmmmM
Mdhdmdhms/++oooss/-.--://ssssyyyyhhhhhMNNNdmMMMMMM
MNmNMMNmNo////++//osooyhhhs+oosyyyhhhdMMmMMNNMMMMM
MMMMMMMMMm+////::-//+osssso+oossyyhhdNMMMMMMMMMMMM
MMMMMMMMMMd+//::::::::/ooooossssyyhdmMMMNMMMMMMMMM
MMMMMMMMMMMh+////+ssyyhddhyyyysyyhdmMMMMMMMMMMMMMM
MMMMMMMMMMdyso+/+o+/+osso/:/ssyhhdmMMMMMMMMMMMMMMM
MMMMMMMMMMMNmy:://--:++:::--+/shdNMMMMMMMMMMMMMMMM
MMMMMMMMMMMMd:://--:+++//:::yoymMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMh++/:+-:o/////+/ohmMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMNo:/o/-://:sdmNMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMso::://+odMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMNy++ooshNMMMNMMMMMMMMMMMMMMMMMMMMM`
    );

    console.log(
      '%c This website was developed by: JY, NW, VG, FX',
      'font-weight: bold; font-size: 40px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
    );
  }); // end of doc ready
})(jQuery);
