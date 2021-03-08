$(document).ready(function() {
  $("#toggleone").click(function() {
    var elem = $("#toggleone").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggleone").text("Read Less");
      $("#textone").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggleone").text("Read More");
      $("#textone").slideUp();
    }
  });
  $("#toggletwo").click(function() {
    var elem = $("#toggletwo").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggletwo").text("Read Less");
      $("#texttwo").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggletwo").text("Read More");
      $("#texttwo").slideUp();
    }
  });
    $("#togglethree").click(function() {
    var elem = $("#togglethree").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#togglethree").text("Read Less");
      $("#textthree").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#togglethree").text("Read More");
      $("#textthree").slideUp();
    }
  });
});