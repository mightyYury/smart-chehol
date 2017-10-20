(function($) {
    $(function() {

        $('ul.tabs').delegate('li:not(.active)', 'click', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .parents('div.item__tabs').find('div.item__tab-item').hide().eq($(this).index()).fadeIn(350);
        })

    })
})(jQuery);

(function($) {
    $(function() {

        $('ul.image-tabs').delegate('li:not(.active)', 'click', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .parents('div.item__images').find('div.item__image').hide().eq($(this).index()).fadeIn(350);
        })

    })
})(jQuery);