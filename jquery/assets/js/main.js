$(function(){
    $('*').css("font-size",'13px');
    $("h1").css("color","red");
    $("#firstTitle").css("color","green");
    $(".nextTitle").css("color","blue");
    $(".obj3>li").css("font-weight","bold");
    // css기본
    $(".obj3").children(".theObj1").css("color","purple");
    // 자식요소 선택
    $(".obj5").parent().css("border","dashed 2px #f00");
    // 부모요소선택
    $("#wrap h3").css("font-size","20px").css("background-color","pink");
    // css 연결하는 방식
    $(".obj4").next().css("color","orange");
    // 이전요소를 선택
    $(".obj5").prev().css("text-align","right");
    // 다음요소를 선택
    $(".obj6").siblings("li").css("text-align","center");
    // 나를 제외한 형제요소 선택

    $(":text").css(
        {"background-color":"#ccc","border":"solid 1px #000" , "color":"green"}
    );

});