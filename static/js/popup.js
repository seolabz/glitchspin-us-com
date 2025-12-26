document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('offer-popup');

  if (!popup) {
    return;
  }

  var close = document.getElementById('popup-close');
  var pathKey = 'popupShown_' + window.location.pathname;
  var delayAttr = parseInt(popup.getAttribute('data-delay'), 10);
  var delay = isNaN(delayAttr) ? 30000 : delayAttr;

  if (!sessionStorage.getItem(pathKey)) {
    setTimeout(function() {
      popup.classList.add('popup-visible');
      sessionStorage.setItem(pathKey, '1');
    }, delay);
  }

  if (close) {
    close.addEventListener('click', function() {
      popup.classList.remove('popup-visible');
    });
  }
});
