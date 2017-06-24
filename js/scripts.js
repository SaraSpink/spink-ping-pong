var PingPong = function(pingPongInput) {
  if (pingPongInput % 15 === 0) {
    $(".myNum").text("PingPong!");
  } else if ((pingPongInput % 3 === 0) && (pingPongInput % 5 !== 0)) {
    $(".myNum").text("Ping");
  } else if ((pingPongInput % 5 === 0) && (pingPongInput % 3 !== 0)) {
    $(".myNum").text("Pong");
  } else {
    $(".myNum").text(pingPongInput);
  }
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var pingPongInput = parseInt($("input#pingPongNum").val());
    var result = PingPong(pingPongInput);
    var pingPongArr = []

    $("#result").show();
  });
});
