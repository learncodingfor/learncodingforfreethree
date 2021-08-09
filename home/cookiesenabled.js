const CookiesEnabled = {
  Enabled: true,
  isenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled = true){alert("cookies Enabled");}else{alert("Enable cookies");}
  }
};
const cookies = Object.create(CookiesEnabled);
cookies.isenabled();
const displaymessage = {
  Enabled:true,
  displaymessage: function(){
    if(navigator.cookieEnabled = true){console.log("cookies enabled")}else{document.write("Enable Cookies");}
  }
};
var displayMes = object.create(displaymessage);
