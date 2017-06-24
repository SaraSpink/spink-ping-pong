var pingPong = function(pingPongInput) {
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
    var result = pingPong(pingPongInput);
    var pingPongArr = []
    for (i = 1; i <= pingPongInput; i++) {
        pingPongArr.push(i);
    }

    $.each(pingPongArr,function(index,value) {
      if (value % 15 === 0) {
        pingPongArr[index] = "PingPong!";
      }
      if (value % 3 === 0 && value % 15 !== 0) {
        pingPongArr[index] = "Ping";
      }
      if (value % 5 === 0 && value % 15 !== 0) {
        pingPongArr[index] = "Pong";
      }
    });

console.log(pingPongArr)

pingPongArr.forEach(function(list) {
    $("#answer").append("<li>" + list + "</li>");
  });

    // $(".nyNum").show();
  });
});
