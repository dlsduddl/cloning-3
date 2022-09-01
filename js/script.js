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