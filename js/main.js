(function() {
  "use strict";

  function addTime(elementClass, digitsType) {
    // Convert to string to know str length
    digitsType = digitsType.toString();
    // add zero padding if < 0
    digitsType = ("00" + digitsType).substring(digitsType.length);

    $(elementClass + "0").attr("data-number", digitsType[0]);
    $(elementClass + "1").attr("data-number", digitsType[1]);
  }

  function pulse() {
    var d = new Date();
    addTime(".second-", d.getSeconds());
    addTime(".minute-", d.getMinutes());
    addTime(".hour-", d.getHours());
  }

  pulse();
  setInterval(pulse, 1000);
})();
