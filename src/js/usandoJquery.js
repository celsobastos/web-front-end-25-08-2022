$(function() {

    let config = {
        color: '#fff',
        backgroundColor: '#0000ff',
        fontSize: '1rem',
    };
    let configOut = {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: '1rem',
    };
    // $('div').hover(function () {
    //     $('div:even').css(config);
    // });

    $('div').on({
        mouseover : function () {
            $('div').css(configOut);
        },
        mouseout : function () {
            $('div').css(config);
        },
        click : function () {
            $('div').css('color', '#ffff00');
        },
    });

    $('div').on('click', function () {
        $(this).hide();
    });

    $('button').on('click', function () {
        $('div').fadeOut();
    })

});