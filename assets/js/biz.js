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

    var tempalte_simple = _.template($('#J-tmpl-simple').html());
    var tempalte_complicate = _.template($('#J-tmpl-complicate').html());
    $('.category').each(function(){
        var cate = $(this);
        var cateid = cate.attr('data-id');
        var config = configJson[cateid];
        var type = config.type;

        if(type == 1){
            config.subCategory = null;
            config.describe = config.describe || null;
            cate.html(tempalte_simple(config));
        }
        else{
            config.items = config.items || null;
            config.describe = config.describe || null;
            cate.html(tempalte_complicate(config));
        }
    });
});