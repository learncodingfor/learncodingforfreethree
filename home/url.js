var xhr = new XMLHttpRequest();
xhr.open("GET", "home.py?text=" + text, true);
xhr.responseType = "JSON";
xhr.onload = function(e) {
  var arrOfStrings = JSON.parse(xhr.response);
}
xhr.send();
