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
                $('.casual').removeClass('display-none');
                $('.junkie').addClass('display-none');
                $('.pro').addClass('display-none');
                break;
            case '2':
                $('.mode-option:first > span').text("Movie Junkie");
                $('.casual').addClass('display-none');
                $('.junkie').removeClass('display-none');
                $('.pro').addClass('display-none');
                break;
            case '3':
                $('.mode-option:first > span').text("Film Pro");
                $('.casual').addClass('display-none');
                $('.junkie').addClass('display-none');
                $('.pro').removeClass('display-none');
                break;
        }
    };

    modeSwitch();
    $('#mode-slider').on('input', function(){
        modeSwitch();
    });
})

