
/*
**header
--about
--services
--coffee
--hot drinks
--ice drinks
*/
var myHeader = document.querySelector("header");
var btn = document.querySelector("#btn");
var links = document.querySelector(".links");
var myLogo = document.querySelector(".logo")
var button = document.querySelector("#button")

btn.onclick = function() {
    if (links.style.display === "none") {
        links.style.display = "block";
    } else if(links.style.display === "block"){
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
};
window.onscroll = function(){
    if(scrollY >+ 100){
        myHeader.style.position = "fixed";
        myHeader.style.backgroundColor = "hsla(24, 30%, 74%, 0.85)";
        myLogo.src = "image/logo.png"
        button.style.display = 'block';
        
    }else if (window.scrollY > 10) {
        myHeader.style.position = "absolute";
        myHeader.style.backgroundColor = ""; // يمكنك ضبط اللون هنا إذا أردت
        myLogo.src = "image/logo-2.png"
        button.style.display = 'none';
    } else {
        myHeader.style.position = "absolute"; // يمكن تعيين الوضعية إلى الوضع الافتراضي عندما يكون التمرير أقل من 10
        myHeader.style.backgroundColor = ""; // يمكنك إعادة تعيين اللون هنا إذا أردت
        myLogo.src = "image/logo-2.png"
    }
        button.onclick = function(){
            scroll({
                left:0,
                top:0,
                behavior:"smooth"
            })
    }
}
