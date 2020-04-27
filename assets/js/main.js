/* $ global */

// when scroll add this class to navbar

    
    $(window).scroll(function () {
        // will appear
        if ($(window).scrollTop() >= 50) {
            $('.nav').addClass('navbar-scroll')
        }
        // disappear
        else{
            $('.nav').removeClass('navbar-scroll')
        }
    });
   
    //link to section
    $('.side-menu  a','.full-nav a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
        });
    });



    //li add active class
    $(function(){
            $('#header .nav .middle ul li').on('click', function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            $('.full-nav .middle ul li').on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });


// menu icon in navbar in small media


// close icon and menu icon
    $(function () {
        $('.menu-icon').on('click', function() {
            $('.close').css('display','block');
            $('.menu-icon').css('display','none');
            $('#header .nav .middle,.full-nav .middle').addClass('open');

        $('.close').on('click', function() {
            $('.menu-icon').css('display','block');
            $('.close').css('display','none');
            $('#header .nav .middle,.full-nav .middle').removeClass('open');

        });


    $('#header .nav .middle li').on('click', function() {

        $(this).toggleClass('op');

        var subMenuHeight=$(this).find('.second-menu').outerHeight();       

        $(this).find('.second-menu').slideToggle();


        if($(this).hasClass('op')){
            $(this).css('margin-bottom','0');
        }else{
            $(this).css('margin-bottom',subMenuHeight+'px');

        
    }

        
    });

    $('.full-nav .middle li').on('click', function() {

        $(this).toggleClass('op');

        var subMenuHeight=$(this).find('.second-menu').outerHeight();       

        $(this).find('.second-menu').slideToggle();


        if($(this).hasClass('op')){
            $(this).css('margin-bottom','0');
        }else{
            $(this).css('margin-bottom',subMenuHeight+'px');

        
    }

        
    });



});

});
