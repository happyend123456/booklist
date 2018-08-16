$(function () {
    // 图书分类
    var bookTypes = JSON.parse(localStorage.getItem("bookTypes"));
    for (var i in bookTypes) {
        var div = $("<div class='book1' num='" + i + "'><div>");
        var p1 = $('<p>' + '<a class="title1">' + bookTypes[i].title + '</a>' + '<i class="iconfont icon-arrow-right-copy">' + '</i>' + '</p>');
        div.append(p1);
        $("#books").append(div);
        for (var j = 0; j < bookTypes[i].list.length; j++) {
            var p = $("<p class='p2'>&nbsp;</p>");
            var a = $("<a href=''>" + bookTypes[i].list[j].name + "</a>");
            p.append(a);
            $(div).append(p);
        }
    }
    //左边栏悬浮事件显示右边内容：	
    $('.book1').mouseover(function () {
        $(".display1").html("");
        var num = $(this).attr("num");
        $(this).css("background", "#ffe4dc");
        for (var i in bookTypes[num].list) {
            var div1 = $("<div class='novels'><a href=''>" + bookTypes[num].list[i].name + "</a></div>");
            $(".display1").append(div1);
            var div2 = $("<div class='novelpost'><div>");
            for (var j in bookTypes[num].list[i].content) {
                var p = $("<span class='novel'><a class='types'>" + bookTypes[num].list[i].content[j] + "</a></span>");
                div2.append(p);
                $(".display1").append(div2);
            }
            $(".display1").css("display", "block");
        }
    }).mouseout(function () {
        $(this).css("background", "white");
        $(".display1").css("display", "none");
    });
    $('.display1').mouseover(function () {
        $(".display1").css("display", "block");
    }).mouseout(function () {
        $(".display1").css("display", "none");
    });
    // 猜你喜欢事件调用
    likes("guessLikes");
    // 轮播图
    var slides = JSON.parse(localStorage.getItem("slides"));
    for (var m in slides) {
        var divpic = $("<div class='swiper-slide'></div>");
        var imgs = $('<img src="imgs/slides/' + slides[m] + '">')
        divpic.append(imgs);
        $(".swiper-wrapper").append(divpic);
    }

    new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    // 图书畅销榜
    var bestSelling = JSON.parse(localStorage.getItem("bestSelling"));
    for (var n in bestSelling) {
        var divSell = $("<div class='sadness'></div>");
        if (n < 9) {
            var popular = $('<p>' + '<a class="headers">' + "0" + (n * 1 + 1) + '.' + bestSelling[n] + '</a>' + '</p>');
        } else {
            var popular = $('<p>' + '<a class="headers">' + (n * 1 + 1) + '.' + bestSelling[n] + '</a>' + '</p>');
        }
        var i = $("<i class='iconfont icon-arrow-right-copy'></i>");

        divSell.append(popular);
        divSell.append(i);
        $(".hotKind").append(divSell);
    }
    // 淘书团
    var taoshutuan = JSON.parse(localStorage.getItem("taoshutuan"));
    for (var q in taoshutuan) {
        var divAl = $("<div class='divAl'></div>");
        var div1 = $("<div class='buyP'></div>");
        var img = $("<img src=" + 'imgs/taoshu/' + taoshutuan[q].img + ">");
        div1.append(img);
        var div2 = $("<div class='buyT'></div>");
        article = $("<a href=''>" + taoshutuan[q].desc + "</a>");
        div2.append(article);
        var div3 = $("<div class='buyD'></div>");
        var pSpan = $("<p class='pSpan'></p>")
        var dis = $("<p class='dis'>" + ((taoshutuan[q].newPrice * 1 / taoshutuan[q].oldPrice * 1) * 10).toFixed(1) + "折</p>")
        var team1 = $("<span>团购价:￥" + taoshutuan[q].newPrice + "</span>");
        var team2 = $("<span>￥" + taoshutuan[q].oldPrice + "</span>");
        pSpan.append(team1);
        pSpan.append(team2);
        div3.append(pSpan);
        div3.append(dis);
        divAl.append(div1);
        divAl.append(div2);
        divAl.append(div3);
        $(".taoPics").append(divAl);
    }
    // 新书上架获取数据
    var newbooks = JSON.parse(localStorage.getItem("newbooks"));
    for (var e = 0; e < newbooks.length; e++) {
        var div = $("<div class='divNew'></div>");
        var spNew1 = $("<p class='pNew1'>" + newbooks[e].title + "</p>");
        var spNew2 = $("<p class='pNew2'>" + newbooks[e].author + "</p>");
        var spPrice1 = $("<p class='pPrice1'>" + '￥' + newbooks[e].newPrice + "</p>");
        var spPrice2 = $("<p class='pPrice2'>" + '￥' + newbooks[e].oldPrice + "</p>");
        var imgNew = $('<div class="imgNew">' + '<img src="imgs/newbooks/' + newbooks[e].img + '">' + '</div>');
        div.append(spNew1);
        div.append(spNew2);
        div.append(spPrice1);
        div.append(spPrice2);
        div.append(imgNew);
        $(".newBook").append(div);
    }
    // 自营标题
    var selfSupport = JSON.parse(localStorage.getItem("selfSupport"));
    for (var i in selfSupport) {
        var div = $("<div class='dTitle' nums='" + i + "'>" + selfSupport[i].title + "</div>");
        $(".selfLright").append(div);
    }
    $(".selfLright>div:first").attr("name", "novel");
    $(".selfLright>div:eq(1)").attr("name", "poetry");
    $(".selfLright>div:eq(2)").attr("name", "suspense");
    $(".selfLright>div:eq(3)").attr("name", "youth");
    // 自营左边
    var img = $("<img src='imgs/selfSupport/novel/" + selfSupport[0].list[0].img + "'>");
    $(".left1>div:nth-child(2)").html("<p class='novelP'>" + selfSupport[0].list[0].title + "/" + selfSupport[0].list[0].author + "</p>" + "<p" + selfSupport[0].list[0].publishing + "</p>");
    $(".left1>div:nth-child(3)").html("<span>" + '￥' + selfSupport[0].list[0].newPrice + "</span><span>" + '￥' + selfSupport[0].list[0].oldPrice + "</span>");
    $(".left1>div:first-child").append(img);
    // 自营右边
    selfshow(0, "novel");
    $(".dTitle").mouseover(function () {
        var index = $(this).index();
        $(".p10").html("");
        var num = $(this).attr("nums");
        var sum = $(this).attr("name");
        var img = $("<img src='imgs/selfSupport/"+sum+"/" + selfSupport[index].list[0].img + "'>");
        $(".left1>div:nth-child(2)").html("<p class='novelP'>" + selfSupport[index].list[0].title + "/" + selfSupport[index].list[0].author + "</p>" + "<p" + selfSupport[index].list[0].publishing + "</p>");
        $(".left1>div:nth-child(3)").html("<span>" + '￥' + selfSupport[index].list[0].newPrice + "</span><span>" + '￥' + selfSupport[0].list[0].oldPrice + "</span>");
        $(".left1>div:first-child").empty();
        $(".left1>div:first-child").append(img);
        $(this).css("border-top", "4px solid #b17f4a");
        $(".dTitle").not(this).css("border-top", "4px solid transparent");
        selfshow(num, sum);
    });
    // 出版社左边
    var pressList = JSON.parse(localStorage.getItem("pressList"));
    for (var j in pressList) {
        var p = $("<p class='pressTitle' nums='" + j + "'>" + pressList[j].name + "<i class='icon iconfont icon-arrow-right-copy'></i></p>");
        $(".directT").append(p);
    }
    // 出版社悬浮点击事件
    pressshow(0);
    $(".pressTitle").mouseover(function () {
        $(".directR1").html("");
        $(".directR2").html("");
        var nums = $(this).attr("nums");
        pressshow(nums);
        $(".dTop").click(function () {
            $(".pressTitle").animate({
                "top": "-500px"
            }, 30);

        });
        $(".dBottom").click(function () {
            $(".pressTitle").animate({
                "top": "0"
            }, 30);
        });
    });
});
// 猜你喜欢获取数据
function likes(obj) {
    $("div[onclick*='" + obj + "']").css({
        color: "#ff5000",
        "border-top":"4px solid orange"
    });
    $("div[onclick]").not($("div[onclick*='" + obj + "']")).css({
        color: "#666",
        "border-top":"4px solid white"
    });
    $(".guessU").html("");
    $(".picsFour").html("");
    var bookstyles = JSON.parse(localStorage.getItem(obj));
    var bluePic = $("<img src='imgs/" + obj + "/" + bookstyles[0].img + "'>");
    $(".guessU").append(bluePic);
    var div11 = $("<div class='blueRight'></div>");
    $(".guessU").append(div11);
    var p11 = $("<p class='titles'>" + bookstyles[0].title + "</p>");
    var span1 = $("<span class='price1'>" + '￥' + bookstyles[0].newPrice + "</span>");
    var span2 = $("<span class='price2'>" + '￥' + bookstyles[0].oldPrice + "</span>");
    var p21 = $("<p class='sp2'></p>");
    $(div11).append(p11);
    $(div11).append(p21);
    var contents = $("<p class='stories'>" + bookstyles[0].desc + "</p>");
    $(p21).append(span1);
    $(p21).append(span2);
    $(div11).append(contents);
    for (var x = 1; x < bookstyles.length; x++) {
        var div22 = $("<div class='div4'></div>");
        var div221 = $('<img src="imgs/' + obj + '/' + bookstyles[x].img + '">');
        var p22 = $("<p class='titles2'>" + bookstyles[x].title + '/' + bookstyles[x].author + "</p>");
        var span1 = $('<span class="price3">' + "￥" + bookstyles[x].newPrice + '</span>')
        var span2 = $("<span class='price4'>" + '￥' + bookstyles[x].oldPrice + "</span>");
        var p12 = $("<p class='sp3'></p>")
        $(div22).append(div221);
        $(div22).append(p22);
        $(div22).append(p12);
        $(p12).append(span1);
        $(p12).append(span2);
        $(".picsFour").append(div22);
    }
}
// 自营右边函数
function selfshow(obj, sum) {
    var selfSupport = JSON.parse(localStorage.getItem("selfSupport"));
    for (var i in selfSupport[obj].list) {
        var div = $("<div class='allSelf'></div>");
        var picDiv = $("<div class='picDiv'><img src='imgs/selfSupport/" + sum + "/" + selfSupport[obj].list[i].img + "'></div>").appendTo(div);
        var p1 = $("<p class='ptitle'>" + selfSupport[obj].list[i].title + selfSupport[obj].list[i].publishing + "</p>").appendTo(div);
        var p2 = $("<p>" + "<span class='redS'>" + "￥" + selfSupport[obj].list[i].newPrice + "</span>" + "<span class='greyS'>" + "￥" + selfSupport[obj].list[i].oldPrice + "</span>" + "</p>").appendTo(div);
        $(".p10").append(div);
    };
}
// 出版社函数
function pressshow(obj) {
    var pressList = JSON.parse(localStorage.getItem("pressList"));
    var pD1 = $("<p class='datas1'>" + pressList[obj].name + "</p>");
    var pD2 = $("<p class='datas2'>" + pressList[obj].desc + "</p>");
    $(".directR1").append(pD1, pD2);
    for (var j in pressList[obj].list) {
        var picPress = $("<div class='picPress'></div>");
        var picPress1 = $("<div class='picPress1'><img src='imgs/press/" + pressList[obj].list[j].img + "'></div>");
        var pPress1 = $("<p class='pPress1'>" + pressList[obj].list[j].title + "</p>");
        var pPress2 = $("<p>" + "<span class='pPress21'>" + "￥" + pressList[obj].list[j].newPrice + "</span>" + "<span class='pPress22'>" + "￥" + pressList[obj].list[j].oldPrice + "</span>" + "</p>");
        picPress.append(picPress1, pPress1, pPress2);
        $(".directR2").append(picPress);
    }
}