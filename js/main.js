$(function(){
    var $container = $('#container');
    // initialize Masonry after all images have loaded
    $container.imagesLoaded( function() {
        $container.masonry();
    });

    var openToggle = function() {
        $( "header > nav > ul .mode-option" ).addClass("hovered");
        $( "header > nav > ul li:nth-last-child(1)" ).css("visibility","visible");
    };

    var closeToggle = function() {
        $( "header > nav > ul .mode-option" ).removeClass("hovered");
        $( "header > nav > ul li:nth-last-child(1)" ).css("visibility","hidden");
    };

    // Check for touch device
    if (!!('ontouchstart' in window)){
        // Behaviour and events for touch device
        $( "header > nav > ul li:nth-last-child(1)" ).toggle(
            function() {
                openToggle();
            }, function() {
                closeToggle();
            }
        );
    } else {
        // Behaviour and events for pointing device like mouse
        $( "header > nav > ul .mode-option" ).hover(
            function() {
                openToggle();
            }, function() {
                closeToggle();
            }
        );
    };

    // Slider changes
    var modeSwitch = function() {
        switch ($('#mode-slider').val()) {
            case '1':
                $('.mode-option:first > span').text("Casual User");
                resizeCarousels(1);
                $('.junkie').addClass('display-none');
                $('.pro').addClass('display-none');
                $('.casual').removeClass('display-none');
                break;
            case '2':
                $('.mode-option:first > span').text("Movie Junkie");
                resizeCarousels(2);
                $('.casual').addClass('display-none');
                $('.pro').addClass('display-none');
                $('.junkie').removeClass('display-none');
                break;
            case '3':
                $('.mode-option:first > span').text("Film Pro");
                resizeCarousels(3);
                $('.casual').addClass('display-none');
                $('.junkie').addClass('display-none');
                $('.pro').removeClass('display-none');
                break;
        }
    };

    var resizeCarousels = function() {
        switch($('#mode-slider').val()) {
            case '1':
                $('.carousel-container').animate({'width': '100%'}, 500);
                break;
            case '2':
                $('.carousel-container').animate({
                    'width': '53%',
                    'margin-right': '3%'
                }, 500);
                setTimeout(function() {
                    $('.news').animate({
                        // 'position': 'absolute',
                        'padding-top': '25px'
                    }, 500);
                }, 500);
                break;
            case '3':
                $('.carousel-container').animate({
                    'width': '53%',
                    'margin-right': '3%'
                }, 500);
                $('.news').animate({
                    'position': 'absolute',
                    'padding-top': '25px'
                }, 500);
                $('.box-office').animate({
                    'margin-top': '280px'
                }, 500);
                break;
        }
    };

    modeSwitch();
    $('#mode-slider').on('input', function(){
        modeSwitch();
        $container.masonry();
    });

    $(window).resize(function(){
        $container.masonry();
    });
})

