const CookiesEnabled = {
  Enabled: true,
  isenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled){console.log("cookies enabled!")}else{alert("Enable Cookies!")}
  }
};
const cookies = Object.create(CookiesEnabled);
cookies.isenabled();
