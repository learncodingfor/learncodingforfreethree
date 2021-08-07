const CookiesEnabled = {
  Enabled: true,
  isenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled = true){alert("cookies Enabled Enable cookies!")}else{alert("Enable cookies")}
   }
 };
const cookies = Object.create(CookiesEnabled);
cookies.isenabled();
