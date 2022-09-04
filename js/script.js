console.clear();

// 메뉴바 팝업1
function Menu1Popup__show() {
  $('.menu-popup').show();
 }

 function Menu1Popup__hide() {
   $('.menu-popup').hide();
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
