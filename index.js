
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

function not_full() {
    var tex = document.getElementById('twit-text-input').value;
    if (tex == "") {
        alert("Please fill both twit content and author to submit");
        return;
    }

    var _author = document.getElementById('twit-attribution-input').value;
    if (_author == "") {
        alert("Please fill both twit content and author to submit");
        return;
    }
    make_twit(tex,_author);
    var twit_obj = {text: tex, author: _author};
    twit_arr.push(twit_obj);
}

function make_twit(twit_text, twit_author)
{
    var content = document.getElementById("twit-text-input").textContent;
    var author = document.getElementById("twit-attribution-input").textContent;
    var article = document.createElement("ARTICLE");
    var div1 = document.createElement("DIV");
    var div2 = document.createElement("I");
    var twit_aut = document.createElement("P");
    var ref = document.createElement("A");
    var div3 = document.createElement("DIV");
    var div4 =  document.createElement("p");

    article.classList.add("twit");
    div1.classList.add("twit-icon");
    div2.classList.add("fas");
    div2.classList.add("fa-bullhorn");
    div3.classList.add("twit-content");
    div4.classList.add("twit-text");
    twit_aut.classList.add("twit-author");
    ref.setAttribute('href',"#");
    div4.textContent = twit_text;
    ref.textContent = twit_author;

    twit_aut.appendChild(ref);
    article.appendChild(div1);
    div1.appendChild(div2);
    div3.appendChild(div4);
    div3.appendChild(twit_aut);
    article.appendChild(div3)

    document.querySelector('.twit-container').appendChild(article);

    hide();
}

var search_bar = document.getElementById('navbar-search-input');
search_bar.addEventListener('input',text_search);
search_bar.addEventListener('input',author_search);
var twits = document.getElementsByClassName("twit");
var twit_arr = [];

while (twits.length > 0) {
    var text = twits[0].querySelector(".twit-text").textContent;
    var author = twits[0].querySelector(".twit-author").textContent;
    var twit_obj = {text: text, author: author};
    twit_arr.push(twit_obj);
    console.log(twit_arr);
    twits[0].remove();
    }

twit_arr.forEach(function(twit) {
    make_twit(twit.text,twit.author);
});
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
