function display()
{
  var display = document.getElementsByClassName("hidden");
  for(var i = 0; i < display.length; i++) { 
    display[i].style.display='block'
  }
}

function hide() 
{
    var hide = document.getElementsByClassName("hidden");
    for(var i = 0; i < hide.length; i++) { 
      hide[i].style.display='none'
  }
}

function make_twit() 
{
  var content = document.getElementById("twit-text-input").value;
  var author = document.getElementById("twit-attribgution-input").value;
  var twit = document.createElement("ARTICLE");
  var twit_icon = document.createElement("DIV");
  var bullhorn = document.createElement("DIV");
  twit_icon.appendChild(bullhorn);
  var twit_content = document.createElement("DIV");
  var twit_text =  document.createElement("DIV");
  document.getElementByClassName("twit_text").value = content;
  var twit_author = document.createElement("DIV");
  document.getElementByClassName("twit_author").value = author;
  document.getElementByClassName("twit_content").appendChild(twit_text);
  document.getElementByClassName("twit_content").appendChild(twit_author);
  document.getElementByClassName("twit-container").appendChild(twit)
  var close = document.getElementsByClassName("hidden");
  for(var i = 0; i < close.length; i++) { 
    close[i].style.display='none'
  }
}
