 // 全屏功能
 (function () {
  var triggerEle = document.querySelector(".fullscreen");
  var targetEle = document.querySelector(".video-box");

  fullscreen(targetEle, triggerEle)
  function fullscreen(tarEle, triEle) {
      // 任何元素都有全屏api，但目前并不是所有的浏览器都实现了API的无前缀版本
      var reqFullscreen =
          tarEle.requestFullscreen ||
          tarEle.webkitRequestFullscreen ||
          tarEle.mozRequestFullScreen ||
          tarEle.msRequestFullscreen;
      triEle.addEventListener('click', function () {
          if (reqFullscreen) {
              reqFullscreen.call(tarEle)
          } else {
              // ie11以下未支持
              window.confirm('您的浏览器版本过低,请升级版本或更换浏览器！')
          }
      });
  };

  screenChange();
  function screenChange() {
      var methodName = getonfullscreenevt();
      document[methodName] = function () {
          // 全屏模式下隐藏或显示元素
          if (isElementFullScreen()) {
              $('.fullscreen').hide();
              $('.scale-btn').show();
              $('.video-box div[data-sort]').children('.shot-cut').remove();
              $('.video-play-box').css({ width: '100%', height: '100%' });
              // 退出全屏
              $('.scale-btn').on('click', function() {
                  var root = document;
                  var exitFullscreenEvts = ['exitFullscreen', 'webkitExitFullscreen', 'msExitFullscreen', 'mozCancelFullScreen'];
                  exitFullscreenEvts.forEach(function(method) {
                      if (root[method]) {
                          root[method]();
                      }
                  })
              });
          } else {
              $('.fullscreen').show();
              $('.scale-btn').hide();
              $('.video-box div[data-sort]').append('<div class="shot-cut"></div>')
              $('.video-play-box').css({ width: 1300, height: 740 });
          }
      }
  }

  // 获取兼容事件
  function getonfullscreenevt() {
      var root = document.documentElement
      var fullscreenevts = {
          'requestFullscreen': 'onfullscreenchange',
          'webkitRequestFullscreen': 'onwebkitfullscreenchange',
          'mozRequestFullScreen': 'onmozfullscreenchange',
          'msRequestFullscreen': 'onmsfullscreenchange'
      }
      for (var method in fullscreenevts) {
          if (root[method]) {
              return fullscreenevts[method]
          }
      }
      return undefined
  };

  // 判断当前有无元素在全屏状态
  function isElementFullScreen() {
      var fullscreenElement =
          document.fullscreenElement ||
          document.msFullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement;
      if (fullscreenElement === null) {
          return false;
      } else {
          return true;
      }
  };
})();