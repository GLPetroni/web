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
    var div2 = document.createElement("I");
    var twit_author = document.createElement("P");
    var ref = document.createElement("A");
    var div3 = document.createElement("DIV");
    var div4 =  document.createElement("p");
    
    article.classList.add("twit");
    div1.classList.add("twit-icon");
    div2.classList.add("fas");
    div2.classList.add("fa-bullhorn");
    div3.classList.add("twit-content");
    div4.classList.add("twit-text");
    twit_author.classList.add("twit-author");
    ref.setAttribute('href',"#");

    var tex = document.getElementById('twit-text-input').value;
    if (tex == "") {
        alert("Please fill both twit content and author to submit");
        return;
    }
    div4.textContent = tex;

    var _author = document.getElementById('twit-attribution-input').value;
    if (_author == "") {
        alert("Please fill both twit content and author to submit");
        return;
    }
    ref.textContent = _author;

    twit_author.appendChild(ref);
    article.appendChild(div1);
    div1.appendChild(div2);
    div3.appendChild(div4);
    div3.appendChild(twit_author);
    article.appendChild(div3)

    document.querySelector('.twit-container').appendChild(article);

    hide();
}

var search_bar = document.getElementById('navbar-search-input');
search_bar.addEventListener('input',text_search);
search_bar.addEventListener('input',author_search);
var twits = document.getElementsByClassName("twit");

//while (twits.length > 0) {
//    var _text = twits[0].querySelector(".twit-text").textContent;
//    var _author = twits[0].querySelector(".twit-author").textContent;
//    var twit_obj = {text: _text, author: _author};
//    var twit_arr = [];
//    twit_arr.push(twit_obj);
//    console.log(twit_arr);
//    }
function author_search() {
    var input = search_bar.value;
    var filter = input.toUpperCase();
    var twit = document.getElementsByClassName("twit");
    var author = document.getElementsByClassName("twit-author");
    console.log(author);
    var a, txtValue, i;

    for (i = 0; i < author.length; i++) {
        a = author[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innertext;
        if (txtValue.toUpperCase().includes(filter)) {
            twit[i].style.display = "";
        } else {
            twit[i].style.display = "none";
        }
    }
}

function text_search() {
    var input = search_bar.value;
    var filter = input.toUpperCase();
    var twit = document.getElementsByClassName("twit");
    var _text = document.getElementsByClassName("twit-text");
    var a, txtValue, i;
    console.log(_text);
    for (i = 0; i < _text.length; i++) {
        txtValue = _text[0].textContent || _text[0].innertext;
        if (txtValue.toUpperCase().includes(filter)) {
            twit[i].style.display = "";
        } else {
            twit[i].style.display = "none";
        }
    }
}
