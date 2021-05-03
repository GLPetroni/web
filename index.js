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
  var content = document.getElementById("twit-text-input").textContent;
  var author = document.getElementById("twit-attribution-input").textContent;
  
  var article = document.createElement("ARTICLE");
  var div1 = document.createElement("DIV");
  var div2 = document.createElement("DIV");
  
  twit_icon.appendChild(bullhorn);
  
  var div3 = document.createElement("DIV");
  var div4 =  document.createElement("DIV");
  
  twit_text.value = content;
  
  var twit_author = document.createElement("DIV");
  
  twit_author.value = author;
  twit_content.appendChild(twit_text);
  twit_content.appendChild(twit_author);
  twit.appendChild(twit_content);
  
  document.querySelector('.twit-container').appendChild(twit);
  
  hide();
}
