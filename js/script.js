$(document).ready(function(){

    $('.examples-carousel').slick({
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: false,
        dots: true    
    });


    $(".questions__item").each(function(i){
        $(this).on("click", function(e){
            e.preventDefault();
            $('.questions__item').eq(i).toggleClass('questions__item_active');
        })
    })

    let type = 2450, home = 1.1, rooms = 1, metres = 35; date = 18

    $(".calculator__type__item").each(function(i){
        $(this).on('click', function(){
            $(".calculator__type__item").eq(i).addClass("calculator__type__item_active").siblings().removeClass("calculator__type__item_active");
            if (i == 0){
                date = 18;}
                if (i== 1){
                    date = 34;}
                    if (i == 2){
                        date = 56;}
                        if (i == 3){
                            date = 88;}
            $("#date").text("до " + date + " дней");

        })
    });
    
    $(".calculator__home__item").each(function(i){
        $(this).on('click', function(){
            $(".calculator__home__item").eq(i).addClass("calculator__home__item_active").siblings().removeClass("calculator__home__item_active");
        })
    });

    $(".calculator__rooms__item").each(function(i){
        $(this).on('click', function(){
            $(".calculator__rooms__item").eq(i).addClass("calculator__rooms__item_active").siblings().removeClass("calculator__rooms__item_active");
        })
    });

    $("#calc_slider").on( "input change", function() {
        metres = (this.value);
        price = Math.round(type * home * rooms * metres);
        $(".calculator__slider__value").text(metres);
        $("#price").text((price).toLocaleString('ru') + " руб");
    })

    $("calculator__slider").on("change", function(){
        $(this).addClass(calculator__slider_active);
    });

    let price = type * home * rooms * metres;
    $("#price").text((price).toLocaleString('ru') + " руб");
    $(".remont").each(function(i){
        $(this).on("click", function(){
            type = this.value;
            price = Math.round(type * home * rooms * metres);
            $("#price").text((price).toLocaleString('ru') + " руб");
            // $("#date").text(date);
        })
    });
    $(".home").each(function(i){
        $(this).on("click", function(){
            home = this.value;
            price = Math.round(type * home * rooms * metres);
            $("#price").text((price).toLocaleString('ru') + " руб");
        })
    });
    $(".room").each(function(i){
        $(this).on("click", function(){
            rooms = this.value;
            price = Math.round(type * home * rooms * metres);
            $("#price").text((price).toLocaleString('ru') + " руб");
        })
    });

    $("#first_item").on('click', function(e){
        $(this).toggleClass("sub-header__item_active");
        e.preventDefault();
        $("#second_item").removeClass("sub-header__item_active");
        $("#third_item").removeClass("sub-header__item_active");
        $("#first_sub-menu").toggleClass("sub-header__sub-menu_active");
        $("#second_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#forth_item").removeClass("sub-header__item_active");
        $("#fifth_item").removeClass("sub-header__item_active");
    })

    $("#second_item").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item").removeClass("sub-header__item_active");
        $("#third_item").removeClass("sub-header__item_active");
        $("#first_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu").toggleClass("sub-header__sub-menu_active");
        $("#third_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#forth_item").removeClass("sub-header__item_active");
        $("#fifth_item").removeClass("sub-header__item_active");
    })

    $("#third_item").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#second_item").removeClass("sub-header__item_active");
        $("#first_item").removeClass("sub-header__item_active");
        $("#first_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu").toggleClass("sub-header__sub-menu_active");
        $("#forth_item").removeClass("sub-header__item_active");
        $("#fifth_item").removeClass("sub-header__item_active");
    })
    $("#forth_item").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item").removeClass("sub-header__item_active");
        $("#fifth_item").removeClass("sub-header__item_active");
        $("#second_item").removeClass("sub-header__item_active");
        $("#third_item").removeClass("sub-header__item_active");
        $("#first_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu").removeClass("sub-header__sub-menu_active");
    })
    $("#fifth_item").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item").removeClass("sub-header__item_active");
        $("#forth_item").removeClass("sub-header__item_active")
        $("#second_item").removeClass("sub-header__item_active");
        $("#third_item").removeClass("sub-header__item_active");
        $("#first_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu").removeClass("sub-header__sub-menu_active");
    })

    $("#first_item_mobile").on('click', function(e){
        $(this).toggleClass("sub-header__item_active");
        e.preventDefault();
        $("#second_item_mobile").removeClass("sub-header__item_active");
        $("#third_item_mobile").removeClass("sub-header__item_active");
        $("#first_sub-menu_mobile").toggleClass("sub-header__sub-menu_active");
        $("#second_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#forth_item_mobile").removeClass("sub-header__item_active");
        $("#fifth_item_mobile").removeClass("sub-header__item_active");
    })

    $("#second_item_mobile").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item_mobile").removeClass("sub-header__item_active");
        $("#third_item_mobile").removeClass("sub-header__item_active");
        $("#first_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu_mobile").toggleClass("sub-header__sub-menu_active");
        $("#third_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#forth_item_mobile").removeClass("sub-header__item_active");
        $("#fifth_item_mobile").removeClass("sub-header__item_active");
    })

    $("#third_item_mobile").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#second_item_mobile").removeClass("sub-header__item_active");
        $("#first_item_mobile").removeClass("sub-header__item_active");
        $("#first_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu_mobile").toggleClass("sub-header__sub-menu_active");
        $("#forth_item_mobile").removeClass("sub-header__item_active");
        $("#fifth_item_mobile").removeClass("sub-header__item_active");
    })
    $("#forth_item_mobile").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item_mobile").removeClass("sub-header__item_active");
        $("#fifth_item_mobile").removeClass("sub-header__item_active");
        $("#second_item_mobile").removeClass("sub-header__item_active");
        $("#third_item_mobile").removeClass("sub-header__item_active");
        $("#first_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    })
    $("#fifth_item_mobile").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("sub-header__item_active");
        $("#first_item_mobile").removeClass("sub-header__item_active");
        $("#forth_item_mobile").removeClass("sub-header__item_active")
        $("#second_item_mobile").removeClass("sub-header__item_active");
        $("#third_item_mobile").removeClass("sub-header__item_active");
        $("#first_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#second_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $("#third_sub-menu_mobile").removeClass("sub-header__sub-menu_active");
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    })

    $(".mobile-menu .nav a").on('click', function(){
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    })

    $(".mobile-menu .sub-header__sub-menu__item").on('click', function(){
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    })

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"/></button>',
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false
              }
            }]
    })

    $('.carousel-1').slick({
        infinite: true,
        slidesToShow: 3, 
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"/></button>',
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false
              },
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }]});

    
    $('.examples__tab').each(function(i){
        $(this).on('click', function(){
            $('.examples__tab').eq(i).addClass("examples__tab_active").siblings().removeClass("examples__tab_active")
            .closest('div.container').find('div.examples__content').removeClass('examples__content_active')
            .eq(i).addClass('examples__content_active');
        })
    });

    function formValid(form){
        $(form).validate({
          rules : {
            name: 'required',
            phone: 'required',
            email: {
              required : true,
              email: true
            }
          }, 
          messages: {
            name: "Пожалуйста, введите Ваше имя!",
            phone: "Пожалуйста, введете Ваш номер телефона!",
            email:{
              required: "Пожалуйста введите Ваш e-mail!",
              email: "Неверный e-mail!"
            }
          }
        });
      };

      formValid('.feed-form');
      formValid('.calculator');

    $('#modal, #modal1, #modal2').on('click', function(){
        $('.overlay, #consulting').fadeIn()
    });

    $('#modal-succes').on('click', function(e){
        e.preventDefault();
        if (!$('.feed-form').valid()){
            return;}
        $('#consulting').fadeOut();
        $('#thanks').fadeIn();
        $('.feed-form').trigger('reset');
    });

    $('.modal-window__cross').on('click', function(){
        $('.overlay, #consulting , #order, #thanks').fadeOut()
    })

    $('#main-succes').on('click', function(e){
        if (!$('form.calculator').valid()){
            return;
        }
        else{
            e.preventDefault();
            $(".overlay, #thanks").fadeIn();
            $("#consulting , #order").fadeOut();
            $('form').trigger('reset');
        }
    });

    $(".burger").on('click', function(){
        $(".mobile-menu").addClass("mobile-menu_active");
        $(".mobile-overlay").addClass("mobile-overlay_active");
    })

    $(".modal-window__cross_mobile").on('click', function(){ 
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    });    

    $(".mobile-overlay:not(.mobile-menu .sub-header)").on('click', function(){ 
        $(".mobile-menu").addClass('animate__fadeOutRight');
        $(".mobile-overlay").addClass('animate__fadeOut');
        setTimeout(function() {
            $(".mobile-menu_active").removeClass("mobile-menu_active");
            $(".mobile-overlay_active").removeClass("mobile-overlay_active");
            $(".mobile-menu").removeClass('animate__fadeOutRight');
            $(".mobile-overlay").removeClass('animate__fadeOut');
          }, 1000);
    });    


    new WOW().init();
});