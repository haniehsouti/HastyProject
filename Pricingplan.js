//part1 navbar
$(document).ready(function(){
    $('.current-page').addClass('text-blue1');
})
//part5//footer
$(document).ready(function(){
    $('.icon1').mouseenter(function(){
        $('.bg-icon1').removeClass('bg-blue3'),
        $('.bg-icon1').addClass('bg-blue1');
    }),
    $('.icon1').mouseleave(function(){
        $('.bg-icon1').removeClass('bg-blue1'),
        $('.bg-icon1').addClass('bg-blue3');
    }),
    $('.icon2').mouseenter(function(){
        $('.bg-icon2').removeClass('bg-blue3'),
        $('.bg-icon2').addClass('bg-blue1');
    }),
    $('.icon2').mouseleave(function(){
        $('.bg-icon2').removeClass('bg-blue1'),
        $('.bg-icon2').addClass('bg-blue3');
    }),
    $('.icon3').mouseenter(function(){
        $('.bg-icon3').removeClass('bg-blue3'),
        $('.bg-icon3').addClass('bg-blue1');
    }),
    $('.icon3').mouseleave(function(){
        $('.bg-icon3').removeClass('bg-blue1'),
        $('.bg-icon3').addClass('bg-blue3');
    }),
    $('.icon4').mouseenter(function(){
        $('.bg-icon4').removeClass('bg-blue3'),
        $('.bg-icon4').addClass('bg-blue1');
    }),
    $('.icon4').mouseleave(function(){
        $('.bg-icon4').removeClass('bg-blue1'),
        $('.bg-icon4').addClass('bg-blue3');
    })
})