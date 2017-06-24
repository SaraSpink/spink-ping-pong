
var PingPongResult = function(result) {
  return userNumber;
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#inputNumber").val());
    var result = PingPongResult(inputNumber);
    $("#result").text(result);

  });
});
