function dispatchEvent(el, type, char) {
  el.trigger(type, {charCode: char});
}

function sendkey(el, char) {
  dispatchEvent(el, "keydown", char);
  dispatchEvent(el, "keypress", char);
  dispatchEvent(el, "input");
  dispatchEvent(el, "keyup", char);
}

function sendkeys(el, text) {
  el.focus();
  if (el.setActive) {
    el.setActive();
  }

  var originalValue = el.val();

  if (text.length === 0) {
    sendkey(el, '');
    el.val('');
  } else {
    for (var n = 0; n < text.length; ++n) {
      var char = text[n];
      var value = text.substring(0, n + 1);
      el.val(value);
      sendkey(el, char);
    }
  }

  if (originalValue !== text){
    dispatchEvent(el, 'change');
  }
};

sendkeys.html = function(el, html) {
  el.innerHTML = html;
  dispatchEvent(el, "input");
};

module.exports = sendkeys;
