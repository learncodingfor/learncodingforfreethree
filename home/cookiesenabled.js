const cookie = {
  isenabled: true,
  cookiesenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled == true){console.log("cookies Enabled!")}else{alert("Enable cookies")}
  }
};

const cookiesenabled = Object.create(cookie);
// "name" is a property set on "me", but not on "person"
// inherited properties can be overwritten
cookiesenabled.cookieenabled();
