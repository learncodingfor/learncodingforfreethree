function WriteCookie(){
  
    if(document.signup.username.value ==""){
      alert("enter a username")
      return;
  }
  cookievalue = escape(document.signup.username.value) + ";"
  document.cookie = cookievalue;
  document.write("Settings Cookies:" + cookievalue);
}
