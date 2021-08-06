function go(){
  var s = document.getElementById("s").value;
  window.location.assign("search.html?s=" + s);
  if(window.location.href ="search.html?s="+s){alert("loading");}
  if(s.value !=""){document.write("search bar must be filled");}
}
