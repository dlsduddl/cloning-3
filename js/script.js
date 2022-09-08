console.clear();

// 메뉴바 팝업1
function Menu1Popup__show() {
  $('.menu-popup').addClass("popup-active");
 }

 function Menu1Popup__hide() {
   $('.menu-popup').removeClass("popup-active");
 }

 function Menu1Popup__init() {
   $('.top-bar > .top-bar-right > .menu-open-btn').click(function() {
     Menu1Popup__show();
   });
  
   $('.menu-popup > .menu-popup-bg > .menu-popup-wrap > .menu-popup-head > .btn-close').click(function() {
     Menu1Popup__hide();
   });
}

 Menu1Popup__init();


 // 배너슬라이드 
document.querySelector('.button1').addEventListener('click',function(){
  document.querySelector('.slides').style.transform = 'translate(0vw)';
})
document.querySelector('.button2').addEventListener('click',function(){
  document.querySelector('.slides').style.transform = 'translate(-100vw)';
})
document.querySelector('.button3').addEventListener('click',function(){
  document.querySelector('.slides').style.transform = 'translate(-200vw)';
})
document.querySelector('.button4').addEventListener('click',function(){
  document.querySelector('.slides').style.transform = 'translate(-300vw)';
})
document.querySelector('.button5').addEventListener('click',function(){
  document.querySelector('.slides').style.transform = 'translate(-400vw)';
})

// section-1-2 슬라이드 버튼
document.querySelector('.button-left-1').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(0)';
})
document.querySelector('.button-right-1').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-665px)';
})

// 반응형 태블릿
document.querySelector('.button-right-1m').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-530px)';
})

// 반응형 스마트폰 
document.querySelector('.s-button1').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(0)';
})
document.querySelector('.s-button2').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-330px)';
})
document.querySelector('.s-button3').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-655px)';
})
document.querySelector('.s-button4').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-980px)';
})
document.querySelector('.s-button5').addEventListener('click',function(){
  document.querySelector('.section-slide-1').style.transform = 'translate(-1305px)';
})

// section-3-2 슬라이드 버튼
document.querySelector('.button-left-3').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(0)';
})
document.querySelector('.button-right-3').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-665px)';
})

// 반응형 태블릿
document.querySelector('.button-right-3m').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-530px)';
})
// 반응형 스마트폰 
document.querySelector('.s-button3-1').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(0)';
})
document.querySelector('.s-button3-2').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-330px)';
})
document.querySelector('.s-button3-3').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-655px)';
})
document.querySelector('.s-button3-4').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-980px)';
})
document.querySelector('.s-button3-5').addEventListener('click',function(){
  document.querySelector('.section-slide-3').style.transform = 'translate(-1305px)';
})