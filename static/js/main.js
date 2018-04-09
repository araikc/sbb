(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $("#pin_number").keyup(function(e){
          var txtVal = $(this).val();  
           if(txtVal.length>4)
           {
               $(this).val(txtVal.substring(0,4) )
           }
        });

      // When the user clicks on <span> (x), close the modal
      $('.imgDialogClose').on('click', function() { 
          var modal = document.getElementById('imgModal');
          modal.style.display = "none";
      });

      $('#regNumber').on('click', function() {
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          captionText.innerHTML = "Company registration number";
          modalImg.src = "static/img/client1.png";
          var modal = document.getElementById('imgModal');
          modal.style.display = "block";
      });

/*--theme swither activation--*/
        
        // $(window).click(function() {
        //   $('.Switcher').removeClass('active');
        // });

        // $('.Switcher').click(function(event){
        //     event.stopPropagation();
        // });

        // $('#Switch-button').click(function(event){
        //     event.stopPropagation();
        // });   

        $(document).on('click','#Switch-button',function(){
            var cname = $('.Switcher').attr('class');
            var length = cname.length;
            if(length == 8){
                $('.Switcher').addClass('active');
            }else{
                $('.Switcher').removeClass('active');
            }  
        });

        $(document).mouseup(function(e) 
        {
            var container = $('.Switcher')[0];
            
            if (!$.contains(container, e.target)) 
            {
                $('.Switcher').removeClass('active');
            }
        });

        $("#calc-amount").on("change paste keyup", function() {
          var perc = $('#calc-percent').val();
           var p = perc.slice(-1);
           if (p === '%') {
            perc = perc.slice(0, perc.length-1);
           }
           $('#calc-out').text( ($('#calc-amount').val()/100) * perc * $('#calc-days').val() );
        });

        $("#calc-percent").on("change paste keyup", function() {
          var perc = $('#calc-percent').val();
           var p = perc.slice(-1);
           if (p === '%') {
            perc = perc.slice(0, perc.length-1);
           }
           $('#calc-out').text(($('#calc-amount').val()/100)*perc*$('#calc-days').val());
        });

        $("#calc-days").on("change paste keyup", function() {
          var perc = $('#calc-percent').val();
           var p = perc.slice(-1);
           if (p === '%') {
            perc = perc.slice(0, perc.length-1);
           }
           $('#calc-out').text(($('#calc-amount').val()/100)*perc*$('#calc-days').val());
        });

        $(document).on('click','.left-menu-btn',function(){
            var cname = $(this).attr('class');

            $(this).removeClass('active');
            $(this).addClass('hidden');
            // $(this).removeClass('active');
            $(".left-menu").addClass('hidden');
            $(".left-menu").removeClass('active');

        });

        $(document).on('click','.menu-close-btn',function(){
            var cname = $(this).attr('class');

            $(this).removeClass('active');
            $(this).addClass('hidden');

            $(".left-menu").removeClass('active');
            $(".left-menu").addClass('hidden');

            $(".left-menu-btn").removeClass('hidden');
            $(".left-menu-btn").addClass('active');

        });
		/*initialize WOW Js*/
		new WOW().init();
        /*--change styleshet--*/
        // $(document).on('click','#colors li',function(){
        //     var cname = $(this).attr('class');
        //     var cid = cname.substr(6);
        //     //alert(cid)
        //     if(cid == 1){
        //     $('head').append('<link href="assets/css/themes/theme-1.css" rel="stylesheet">');
        //     }else if(cid == 2){
        //        $('head').append('<link href="assets/css/themes/theme-2.css" rel="stylesheet">');
        //     }else if(cid == 3){
        //         $('head').append('<link href="assets/css/themes/theme-3.css" rel="stylesheet">');
        //     }else if(cid == 4){
        //         $('head').append('<link href="assets/css/themes/theme-4.css" rel="stylesheet">');
        //     }else if(cid == 5){
        //         $('head').append('<link href="assets/css/themes/theme-5.css" rel="stylesheet">');
        //     }else if(cid == 6){
        //         $('head').append('<link href="assets/css/themes/theme-6.css" rel="stylesheet">');
        //     }else if(cid == 7){
        //         $('head').append('<link href="assets/css/themes/theme-7.css" rel="stylesheet">');
        //     }else if(cid == 8){
        //         $('head').append('<link href="assets/css/themes/theme-8.css" rel="stylesheet">');
        //     }else if(cid == 9){
        //         $('head').append('<link href="assets/css/themes/theme-9.css" rel="stylesheet">');
        //     }else if(cid == 10){
        //         $('head').append('<link href="assets/css/themes/theme-10.css" rel="stylesheet">');
        //     }else if(cid == 11){
        //         $('head').append('<link href="assets/css/themes/theme-11.css" rel="stylesheet">');
        //     }else if(cid == 12){
        //         $('head').append('<link href="assets/css/themes/theme-12.css" rel="stylesheet">');
        //     }else if(cid == 13){
        //         $('head').append('<link href="assets/css/themes/theme-13.css" rel="stylesheet">');
        //     }else{
        //         $('head').append('<link href="assets/css/themes/theme-14.css" rel="stylesheet">');
        //     }
        //     return false;
        // });
        /*Accordian Management*/
        var toogleAccordian = $(".toggle-accordion")
        toogleAccordian.on("click", function() {
            var accordionId = $(this).attr("accordion-id"),
              numPanelOpen = $(accordionId + ' .collapse.in').length;

            $(this).toggleClass("active");

          })
        
     
        /*--project counter activation--*/
          var projectCounter = $('.counter');
          projectCounter.each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 5000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
              });  
            });
         /*--testimonial carousel slider activation--*/
          var testimonialCaoursel = $('.slider-activation');
          testimonialCaoursel.owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 1
              },
              960 : {
                  items: 1
              },
              1200 : {
                  items: 1
              },
              1920 : {
                  items: 1
              }
            }
        });     
          /*--Header carousel slider activation--*/
          var headerCaoursel = $('.head-slider');
          headerCaoursel.owlCarousel({
            loop:true,
            dots:true,
            nav:true,
            navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 1
              },
              960 : {
                  items: 1
              },
              1200 : {
                  items: 1
              },
              1920 : {
                  items: 1
              }
            }
        });     
        
        headerCaoursel.on("translate.owl.carousel", function(){
            $(".single-header h1, .single-header p").removeClass("animated fadeInUp").css("opacity", "0");
            //$(".single-slide-item .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        headerCaoursel.on("translated.owl.carousel", function(){
            $(".single-header h1, .single-header p").addClass("animated fadeInUp").css("opacity", "1");
            //$(".single-slide-item .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
       /*--slick Nav Responsive Navbar activation--*/
          var SlicMenu = $('#menu-bar');
         SlicMenu.slicknav();
        /*--scroll to top activation--*/
        $(document).on('click', '.scroll-to-top a', function (e) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            }, 3000);
            
        });
        });
        
       

        /*--window Scroll functions--*/
        $(window).on('scroll', function () {
            /*--show and hide scroll to top --*/
            var ScrollTop = $('.scroll-to-top i');
            if ($(window).scrollTop() > 500) {
                ScrollTop.fadeIn(1000);
            } else {
                ScrollTop.fadeOut(1000);
            }
            /*--sticky menu activation--*/
            var mainMenuTop = $('.main-menu');
            if ($(window).scrollTop() > 300) {
                mainMenuTop.addClass('nav-fixed');
            } else {
                mainMenuTop.removeClass('nav-fixed');
            }
            /*--sticky menu activation--*/
            var slickNavTop = $('.slicknav_menu');
            var logoFixed = $('.mobile-logo')
            if ($(window).scrollTop() > 300) {
                slickNavTop.addClass('nav-fixed');
                logoFixed.addClass('fixed');
            } else {
                slickNavTop.removeClass('nav-fixed');
                logoFixed.removeClass('fixed');
            }
        });
           
/*--window load functions--*/
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });


}(jQuery));	