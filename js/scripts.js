// Business Logic

var pingPongArr = [];
var pingPong = function(userInput) {
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      pingPongArr.push("PingPong!");
    }
    else if (i % 5 === 0 && i % 15 !== 0) {
      pingPongArr.push("Pong");
    }
    else if (i % 3 === 0 && i % 15 !== 0) {
      pingPongArr.push("Ping");
    } else {
    pingPongArr.push(i);
    }
  }
}

// User Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var pingPongInput = parseInt($("input#pingPongNum").val());
    var result = pingPong(pingPongInput);


  console.log(pingPongArr)
  $("#answer").empty();
  pingPongArr.forEach(function(list) {
      $("#answer").append("<li>" + list + "</li>");
    });
  });
});
