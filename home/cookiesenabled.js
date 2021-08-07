const cookie = {
  isenabled: true,
  cookieenabled: function() {
    if(navigator.cookieEnabled = true){console.log("cookies Enabled!")}else{alert("Enable coolies")}
  }
};

const cookiesenabled = Object.create(cookie);
// "name" is a property set on "me", but not on "person"
// inherited properties can be overwritten

//checks if cookies are enabled if not it displays a message telling the user to enable cookies
cookiesenabled.cookieenabled();
