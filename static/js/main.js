$(document).ready(() => {
  $(".ui.dropdown").dropdown();

  // Change input content
  $("#input").on("input", function () {
    const newText = $(this).val();

    $(".preview-text").text(newText);
  });

  // Change font size
  $(".item-menu-font-size").click(function () {
    const newFontSizeValue = $(this).data("value");

    $(".preview-text").css("font-size", `${newFontSizeValue}px`);
  });
});
