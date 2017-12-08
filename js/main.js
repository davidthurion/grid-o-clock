function removeClass() {
  $(".number").removeClass (function (index, className) {
    return (className.match (/\bnumber-\S+/g) || []).join(' ');
  });
}

function addTime( elementClass, digitsType ) {
  if ( digitsType.length === 2 ) {
    $("" + elementClass +"0").addClass("number-" + digitsType[0]);
    $("" + elementClass +"1").addClass("number-" + digitsType[1]);
  } else {
    $("" + elementClass +"0").addClass("number-0");
    $("" + elementClass +"1").addClass("number-" + digitsType[0]);
  }
}

(function pulse() {

  var d = new Date();
  var digitsSeconds = d.getSeconds().toString();
  var digitsMinutes = d.getMinutes().toString();
  var digitsHours = d.getHours().toString();

  removeClass();

  addTime(".second-", digitsSeconds);
  addTime(".minute-", digitsMinutes);
  addTime(".hour-", digitsHours);

  setTimeout(pulse, 1000);

})();
