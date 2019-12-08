$(window).scroll(function(){

    var sv = $(this).scrollTop();

    $('.content').css("transform",'translate(0px,-'+sv/2+'%)');
    $('.hero').css("transform",'translate(0px,-'+sv/2+'%)');
    $('.action-btn').css("transform",'translate(0px,-'+sv/2+'%)');
});