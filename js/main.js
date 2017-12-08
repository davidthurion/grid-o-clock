(function() {
  "use strict";

  function removeClass() {
    $(".number").removeClass(function(index, className) {
      return (className.match(/\bnumber-\S+/g) || []).join(" ");
    });
  }

  function addTime(elementClass, digitsType) {
    // Convert to string to know str length
    digitsType = digitsType.toString();
    // add zero padding if < 0
    digitsType = ("00" + digitsType).substring(digitsType.length);

    $(elementClass + "0").addClass("number-" + digitsType[0]);
    $(elementClass + "1").addClass("number-" + digitsType[1]);
  }

  function pulse() {
    removeClass();

    var d = new Date();
    addTime(".second-", d.getSeconds());
    addTime(".minute-", d.getMinutes());
    addTime(".hour-", d.getHours());
  }

  pulse();
  setInterval(pulse, 1000);
})();
