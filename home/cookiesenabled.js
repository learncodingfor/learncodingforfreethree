const CookiesEnabled = {
  Enabled: true,
  isenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled = false){alert("Enable cookies");}else{console.lpg("Cookies Enabled!");}
  }
};
const cookies = Object.create(CookiesEnabled);
cookies.isenabled();
