$(document).ready(() => {
  $(".ui.dropdown").dropdown();

  $("#input").on("input", function () {
    // Print entered value in a div box
    // $("#result").text($(this).val());
    console.log($(this).val())
  });
});
