$(document).ready(function () {
  // hide show password
  $(".toggle-password").click(function () {
    $(this).toggleClass("eye-close eye-open");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // $(".height-1").matchHeight();
  // $(".height-2").matchHeight();
  // $(".height-3").matchHeight();
});

//! adjust Main-Content Height
function adjustMainContentHeight() {
  var headerHeight = document.querySelector(".topbar").offsetHeight;
  var footerHeight = document.querySelector("footer").offsetHeight;
  var windowHeight = window.innerHeight;

  var mainContentHeight = windowHeight - headerHeight - footerHeight;
  document.querySelector(".main-content").style.height =
    mainContentHeight + "px";
}

window.onload = function () {
  adjustMainContentHeight(); // Initial adjustment on page load
};

window.addEventListener("resize", adjustMainContentHeight); // Adjust main content height when window is resized
