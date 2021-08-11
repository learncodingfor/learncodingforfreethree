const CookiesEnabled = {
  isEnabled:true,
  isEnabled:function(){
    if(navigator.cookieEnabled){console.log("enabled")}else{alert("Enable Cookies!")}
  }
}
const cookies = Object.create(CookiesEnabled);
cookies.isEnabled();
