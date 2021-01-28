// Change the border color of the form when submit if the field is empty

$("#mySelectBox");

$("#myTextarea");

console.log($("button"));

$("button").on("click", (e) => {
  e.preventDefault();
  $("#mySelectBox").removeClass("empty");
  $("#myTextarea").removeClass("empty");

  console.log($("#mySelectBox").val());
  console.log($("#myTextarea").val());
  //console.log($("#myTextarea").val().length);

  if ($("#mySelectBox").val() === "") {
    $("#mySelectBox").addClass("empty");
  }

  if ($("#myTextarea").val().length < 20) {
    $("#myTextarea").addClass("empty");
  }
});

//--------------- Cat animation --------------

console.log($("footer img"));

$("footer img").hover(function (e) {
  $("footer img").toggleClass("cat-change");
});
