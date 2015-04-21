$(function(){

    var openToggle = function() {
        $( "header > nav > ul .mode-option" ).addClass("hovered");
        $( "header > nav > ul li:nth-last-child(1)" ).css("visibility","visible");
    };

    var closeToggle = function() {
        $( "header > nav > ul .mode-option" ).removeClass("hovered");
        $( "header > nav > ul li:nth-last-child(1)" ).css("visibility","hidden");
    };

    //Check for touch device
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
        //Behaviour and events for pointing device like mouse
        $( "header > nav > ul .mode-option" ).hover(
            function() {
                openToggle();
            }, function() {
                closeToggle();
            }
        );
    };

})

