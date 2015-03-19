chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create('mail0.html',{
      bounds: {
        left: 0,
        top: 0,
        width: screen.availWidth,
        height: screen.availHeight
      }
    },function(win) {
      win.contentWindow.onload = function() {
        var mail0 = win.contentWindow.document.querySelector('#mail-0');
        mail0.addEventListener('newwindow', function(e) {
          e.preventDefault();
          window.open(e.targetUrl, '_blank');
        });
      };
    }
  );

  chrome.app.window.create('mail1.html',{
      bounds: {
        left: 0,
        top: 0,
        width: screen.availWidth,
        height: screen.availHeight
      }
    },function(win) {
      win.contentWindow.onload = function() {
        var mail1 = win.contentWindow.document.querySelector('#mail-1');
        mail1.addEventListener('newwindow', function(e) {
          e.preventDefault();
          window.open(e.targetUrl, '_blank');
        });
      };
    }
  );
});