const isCookieEnabled = function() {
  isEnabled:true;
  cookieisenabled:function(){
    if(navigator.cookiesEnabled){alert("cookies are enabled")}else{isCookieEnabled.isEnabled = false;}
    if(isEnabled == false){alert("Enabke cookies");}
  }
};

const iscookieenabled = Object.create(isCookieEnabled);
