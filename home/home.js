let script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/loadash.js/4.3.0/loadash.js"
document.head.append(script);
script.onload = function(){
  alert(_.VERSION)
}
script.onerror = function(){
  alert("Error loading:"  + this.src);
}
