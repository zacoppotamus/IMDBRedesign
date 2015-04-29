(function() {
    var jcarousel = $('.movie-carousel').jcarousel({
        wrap: 'circular'
    });

    $('.movie-carousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=2'
        });

    $('.movie-carousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=2'
        });

    var setup = function(data) {
        var html = '<ul>';

        $.each(data.items, function() {
            html += '<li><img src="' + this.src + '" alt="' + this.title + '"></li>';
        });

        html += '</ul>';

        // Append items
        jcarousel
            .html(html);

        // Reload carousel
        jcarousel
            .jcarousel('reload');
    };

    $.getJSON('./js/posters.json', setup);
    console.log('json got');

})
