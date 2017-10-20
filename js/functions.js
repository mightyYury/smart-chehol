$(document).ready(function () {
    $('.choose-city__close').click(function () {
        $('.choose-city').slideUp();
    })
});

$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $("body").scrollTop();

        if ( bo < 500) { $("#back_to_top").css("display", "block"); }
        else { $("#back_to_top").css("display", "none"); };
    })
});

