const saDefaultMargin = 300;
  let saTriggerMargin = 0;
  let saTriggerHeight = 0;
  const saElementList = document.querySelectorAll('.intro_box');

const saFunc = function () {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
//------------------------------------------------------------------메뉴바--------------------------------------
let main_pic = document.getElementById("main_pic");
main_pic.addEventListener("click", function () {
  location.href = "Start Page.html";
});
let meal2 = document.querySelector(".menu1");
meal2.addEventListener("click", function () {
  location.href = "Meal.html";
});
let exer2 = document.querySelector(".menu2");
exer2.addEventListener("click", function () {
  location.href = "Exer.html";
});
let help = document.querySelector(".menu4");
help.addEventListener("click", function () {
  location.href = "Help.html";
});
let info = document.querySelector(".menu5");
info.addEventListener("click", function () {
  location.href = "My_info.html";
});
//------------------------------------------------------------------버튼 2개--------------------------------------
let meal = document.getElementById("food_choice");
meal.addEventListener("click", function () {
  location.href = "Meal.html";
});
let exer = document.getElementById("exer_choice");
exer.addEventListener("click", function () {
  location.href = "Exer.html";
});
//------------------------------------------------------------------로그인 창--------------------------------------
let no_info = document.getElementById("no_id");
no_info.addEventListener("click", function(){
  location.href = "members.html";
})
let no_pw = document.getElementById("find_pw");
no_pw.addEventListener("click", function(){
  location.href = "??????.html";        //비밀번호찾기
})
let no_id = document.getElementById("find_id");
no_id.addEventListener("click", function(){
  location.href = "??????.html";        //ID찾기
})
//------------------------------------------------------------------최하단 레이어-------------------------------------
let meal_page = document.getElementById("meal_page");
meal_page.addEventListener("click", function(){
  location.href = "Meal.html";        
})
let exer_page = document.getElementById("exer_page");
exer_page.addEventListener("click", function(){
  location.href = "Exer.html";        
})
let cal_page = document.getElementById("cal_page");
cal_page.addEventListener("click", function(){
  location.href = "calendar.html";                    //달력페이지
})
let help_page = document.getElementById("help_page");
help_page.addEventListener("click", function(){
  location.href = "Help.html";        
})
let info_page = document.getElementById("info_page");
info_page.addEventListener("click", function(){
  location.href = "My_info.html";        
})
let search_page = document.getElementById("search_page");
search_page.addEventListener("click", function(){
  location.href = "search.html";                     //검색페이지
})
let insta = document.getElementById("insta");
insta.addEventListener("click", function(){
  location.href = "https://www.instagram.com/lookin_min/";                     
})
let app1 = document.getElementById("app1");
app1.addEventListener("click", function(){
  location.href = "https://play.google.com/store/apps/details?id=com.Bodyplanner.bodyplanner";                     
})
let app2 = document.getElementById("app2");
app2.addEventListener("click", function(){
  location.href = "https://play.google.com/store/apps/details?id=com.Weather.weather";                  
})

let ref1 = document.getElementById("ref1");
ref1.addEventListener("click", function(){
  window.open("https://picjumbo.com/");       
})
let ref2 = document.getElementById("ref2");
ref2.addEventListener("click", function(){
  window.open("https://burst.shopify.com/");       
})
let ref3 = document.getElementById("ref3");
ref3.addEventListener("click", function(){
  window.open("https://unsplash.com/");       
})
let ref4 = document.getElementById("ref4");
ref4.addEventListener("click", function(){
  window.open("https://www.pexels.com/ko-kr/");       
})
let ref5 = document.getElementById("ref5");
ref5.addEventListener("click", function(){
  window.open("https://pixabay.com/ko/");       
})