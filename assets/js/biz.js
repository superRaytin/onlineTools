/**
 * biz.
 * User: raytin
 * Date: 13-10-24
 */
$(function(){
    var trig_down = $('.down i');

    trig_down.click(function(e){
        e.stopPropagation();
        var that = $(this),
            ul = that.next();
        ul.toggleClass('hide');
    });

    $('html').on('click', function(){
        trig_down.siblings('ul').addClass('hide');
    });
});