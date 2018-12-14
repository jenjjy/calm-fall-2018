(function ($) {
    $(function () {
        // slide menu
        let mobileMenu = $('#menu-slide');
        let mobileWidth = $('#page').width();
        let hamburger = $('#nav-icon');
        let subMenu = $('.sub-menu');

        // Sub-Menu toggle

        $('.menu-item a').on('click', function (event) {
            let $select = $(this);
            let hasLink = $select.attr('href');

            if (hasLink === '#' && mobileWidth < 600) {
                event.preventDefault();
                // return subMenuToggle();

                subMenu.slideToggle('fast');
                $select.addClass('about-us-border');
                $select.parent().addClass('about-us-padding');
                // $select.blur().removeClass('about-us-border');
                console.log('false');
                // return false;
            } else {
                return true;
            }
        }); // end of sub-menu toggle
        // subMenu.on('blur', function(){
        //   $select.removeClass('about-us-border');
        // }

        hamburger.on('click', function () {
            $(this).toggleClass('open');
            mobileMenu.toggleClass('menu-slide show');
        });

        if (mobileWidth > 600) {
            $('.testimony-carousel').flickity({
                cellAlign: 'left',
                contain: true,
                wrapAround: true
                // autoPlay: 8000
            });
        } else {
            $('.testimony-carousel').flickity({
                cellAlign: 'left',
                contain: true,
                wrapAround: true,
                prevNextButtons: false
                // autoPlay: 8000
            });
        } //carousel testimony


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

        //course-page readmore
        let extraText = $('.course-text-more');
        let readMore = $('.readmore .wp-block-button__link');

        readMore.click(function () {
            console.log('asdf');
            extraText.toggleClass('hide-text');
        });

        $(window).resize(function () {
            $(window).resize(function () {
                if ($(window).width() < 600) {
                    $('.main-carousel').flickity({
                        cellAlign: 'left',
                        contain: true,
                        wrapAround: true
                    });
                }
            }); //flickity for our-company & our-founder


            //course-page readmore
            let extraText = $('.course-text-more');
            let readMore = $('.readmore .wp-block-button__link');

            readMore.click(function () {
                console.log('asdf');
                extraText.toggleClass('hide-text');
            });
        }); // end of doc ready
    })(jQuery);
