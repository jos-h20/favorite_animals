$(document).ready(function() {
  var animal = prompt("Do you like turtles, snakes, or insects?");

  if (animal === "turtles") {
    $('#turtles').show();
  } else if (animal === "snakes") {
    $('#snakes').show();
  } else if (animal === "insects") {
    $('#insects').show();
  }
});
