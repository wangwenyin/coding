 // rem：设置根节点字体大小
 var timer = null
 setRootFontSize();
 function setRootFontSize(){
   var width = document.documentElement.clientWidth;
   var styleN = document.createElement('style');
   styleN.innerHTML = 'html{font-size:'+ width/14.4 +'px !important}';
   document.head.appendChild(styleN);
 };

 window.addEventListener('resize', function() {
   clearTimeout(timer);
   timer = setTimeout(function() {
     setRootFontSize()
   }, 300)
 })