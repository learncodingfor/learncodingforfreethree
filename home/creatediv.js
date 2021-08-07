const createDiv = function() {
  div:false;
  displaydiv:function(){
    var d = document.createElement("div");
    d.innerHTML = "this is a div element";
    document.body.appendChild(d);
  }
}
