//回到顶部
$(function(){
    $("#back-to-top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $("#back-to-top").fadeIn(800);
            }
            else{
                $("#back-to-top").fadeOut("fast");
            }
        });
        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0}, 1000);
            return false;
        });
    });
});

/*
$(function(){
    //tips插件
    $("a").tips();
    //翻页插件
    //$(".jquery_pages").pages({'pernum': 5, 'pages': 5, 'extremity': true, 'total': true});
})
*/

$(function(){
    // 展示环形菜单
    $("#home_avatar").click(function(){
        if($("#nav_avatars").is(":hidden")){
            $("#nav_avatars").fadeIn("fast");
            $("#nav_avatar1").animate({
                left: '+150px'
                },'normal');
            $("#nav_avatar2").animate({
                left: '56.24px', top: '+12.24px'
                },'normal');
            $("#nav_avatar3").animate({
                left: '-90px', top: '+50px'
                },'normal');
            $("#home_avatar").attr('class', 'yes');
            // 图片旋转45°
            $("#home_avatar").attr('style', '-webkit-transform:rotate(45deg);');
        }
        else{
            $("#nav_avatar1").animate({
                left: '25px', top:'-75px'
                },'normal');
            $("#nav_avatar2").animate({
                left: '-31px', top: '-75px'
                },'normal');
            $("#nav_avatar3").animate({
                left: '-87px', top: '-75px'
                },'normal');
            $("#nav_avatars").fadeOut("fast");
            $("#home_avatar").attr('class', 'no');
            $("#home_avatar").attr('style', '-webkit-transform:rotate(360deg);');
        }
    });

    // 菜单图标变换
    $("#home_avatar").hover(function(){
        //$("#home_avatar").attr("src", "/images/icon/plus.png");
        $("#home_avatar").css({"opacity": "0.7"});
    });
    $("#home_avatar").mouseleave(function(){
        if($("#home_avatar").attr('class') == 'no'){
            //$("#home_avatar").attr("src", "/images/lion.png");
            $("#home_avatar").css({"opacity": "0"});
        }
    });

    // 显示文章归档页
    $("#nav_avatar2").click(function(){
        $("#floater").fadeIn("fast");
        $("#category").slideDown("fast");
        $(document.body).css({"height":"100%" });
        $(document.body).css({"overflow":"hidden"});
    });
    // 关闭文章归档页
    $(".close_window img").click(function(){
        $("#category").slideUp("fast");
        $("#floater").fadeOut("fast");
        $(document.body).css({"overflow":"scroll"});
    });
})

// disqus加载
$(function(){
    $("#show_disqus").click(function(){
        window.disqus_shortname = 'narsi'; 
        $(this).html('加载中...');
        var that = this;
        $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
    });
    
    //添加Google-code-preffity需要的class
    $('pre').addClass('prettyprint linenums');
    
    $.getScript('/js/prettify/prettify.js',function(){
        prettyPrint();
    });
})

