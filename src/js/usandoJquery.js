$(function() {

    // let config = {
    //     color: '#fff',
    //     backgroundColor: '#0000ff',
    //     fontSize: '1rem',
    // };
    // let configOut = {
    //     color: '#fff',
    //     backgroundColor: '#000',
    //     fontSize: '1rem',
    // };
    // $('div').hover(function () {
    //     $('div:even').css(config);
    // });

    // $('div').on({
    //     mouseover : function () {
    //         $('div').css(configOut);
    //     },
    //     mouseout : function () {
    //         $('div').css(config);
    //     },
    //     click : function () {
    //         $('div').css('color', '#ffff00');
    //     },
    // });

    // $('div').on('click', function () {
    //     $(this).hide();
    // });

    // $('div').on('click', function () {
    //     $(this).fadeOut();
    // })

    // $('button').on('click', function() {
    //     $('div').fadeIn();
    // });

    // $('div').hide();
    // $('button').on('click', function() {
    //     $('div').slideDown();
    // });

    // $('button').on('click', function() {
    //   $('div').slideToggle();
    // });

    // $('button').on('click', function() {
    //     $('.caixa').animate({
    //         left: '400px',
    //         opacity: '0.4',
    //         width: '150px',
    //         height: '150px',
    //     }, 'slow');
    // });

    // $('button').on('click', function() {
    //     $('div').hide('slow', function(){
    //         $('div.caixa').slideDown('slow', function () {
    //             $('.caixa').animate({
    //                 left: '400px',
    //                 opacity: '0.4',
    //                 width: '150px',
    //                 height: '150px',
    //         }, 'slow');
    //         });
    //     });
    // });

    // Methods Getters
    // html, text, val 
    // let conteudo = $('.div1').text();
    // console.log(conteudo);
    // //setter
    // $('.div2').text(conteudo);
    // let contentCaixa = $('.input-text').val();
    // console.log(contentCaixa);
    $('.input-text').val('Testando 123');
    $('.input-text').on('keyup',function () {
        let texto = $(this).val();
        $('.contador').html(texto.length);
        if(texto.length > 10) {
            $(this).css({
                backgroundColor: '#ff0000',
            });
        }
        else {
            $(this).css({
                backgroundColor: '#fff',
            });
        }
    });

    // mouseout
    $('img').on({
        'mouseover': function() {
            $(this).attr('src', './img/banner_img_02.jpg');
        },
        'mouseout': function() {
            $(this).attr('src', './img/banner_img_01.jpg');
        },
    });


    $('#cep').mask('00.000.000/0000-00', {reverse: true});

});