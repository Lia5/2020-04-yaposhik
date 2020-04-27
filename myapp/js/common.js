$(function() {
    $('.js-preloader').preloadinator({
        minTime: 2000,
        afterRemovePreloader: function() {
            // $(this).remove();
            $('body').removeClass('body-modal-open');
        }
    });
    //menu
    if(jQuery('.menu-toggle').length) {
        var menu = $('.menu-toggle');
        menu.on('click', function(){
            $('.main-menu').toggleClass('active');
            $('.menu-toggle').toggleClass('active');
            $('body').toggleClass('body-modal-open');
        });
        $('.main-menu').mouseup(function (e){ // событие клика по веб-документу
            var div = $(".main-menu ul"); // тут указываем ID элемента
            var close = $('.menu-toggle');
            if (close.is(e.target)) {
        
            } else if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main-menu').toggleClass('active');
                $('.menu-toggle').toggleClass('active');
                $('body').toggleClass('body-modal-open');
              
            }
        });
    }
    // slider

    if(jQuery('.home-slider__items').length) {
        $('.home-slider__nav-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        focusOnSelect: true,
        infinite: false,
        arrows: false,
        dots: false,
        rtl: true,
        vertical: true,
        asNavFor: '.home-slider__items'
        });

        $('.home-slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        fade: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        asNavFor: '.home-slider__nav-items'
        });

        $(".home-slider__items").on('afterChange', function(event, slick, currentSlide){
            $(".current").text(currentSlide + 1);
         });

    }

    if ( window.innerWidth < 1081 || window.screen.width < 1081) {
        if(jQuery('.catalog__items').length) {
            $('.catalog__items').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
            responsive: [
                {
                  breakpoint: 1081,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: false
                  }
                }
            ]
            });
        }
    }




    //animation-text
    if(jQuery('.letters').length) {
        $.fn.animate_Text = function() {
            this.addClass('active');
            var string = this.text();
            return this.each(function(){
                var $this = $(this);
                $this.html(string.replace(/./g, '<span class="animated">$&</span>'));
                // $this.find('span.new').each(function(i, el){
                // setTimeout(function(){ $(el).addClass('fadeIn'); }, 40 * i);
                // });
            });
        };
        var letters = $('.letters');
        for (var j=0; j<=letters.length; j++) {
            $(letters[j]).animate_Text();
        }
    }

    //animation
    setTimeout(function(){  
            
        var introLetter = $(".promo-home__title").find('.animated');
        introLetter.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeIn'); },i*20);
        });
        
        var introLetter = $(".animated-parent").find('.animated');
        introLetter.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeIn'); },i*20);
        });

        var IntroLinks = $(".promo-home__links").find('.animated');
        IntroLinks.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeInUp'); },i*200);
        });

        var IntroLinks = $(".home__text.animated");
        IntroLinks.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeInUp'); },i*200);
        });
        
    },500);



});

