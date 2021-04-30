function display()
{
  var display = document.getElementsByClassName("hidden")[0];
    if (display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
}
