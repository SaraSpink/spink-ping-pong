var PingPong = function(pingPongInput) {
  if ((pingPongInput % 3 === 0) && (pingPongInput % 5 === 0)) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var pingPongInput = parseInt($("input#pingPongNum").val());
    var result = PingPong(pingPongInput);

    // $(".myNum").text(pingPongInput);

    // if (!result) {
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    $("#result").show();
  });
});






// var userNum = function(userNum) {
//   if (userNum % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function() {
//   $("form#ping-pong").submit(function(event) {
//     event.preventDefault();
//     var userNumber = parseInt($("input#inputNumber").val());
//     var result = PingPongResult(inputNumber);
//
//     $(".myNum").text(userNumber);
//     $("#result").show();
//
//   });
// });
