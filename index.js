function display()
{
  var display = document.getElementsByClassName("hidden");
  if (display.style.display === "none") {
    display.style.display = "block";
  } else {
    display.style.display = "none";
  }
}
