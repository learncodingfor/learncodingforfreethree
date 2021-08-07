const cookie = {
  isenabled: true,
  cookieenabled: function() {
    if(navigator.cookieEnabled = true){console.log("cookies Enabled!")}else{alert("Enable coolies")}
  }
};

const cookiesenabled = Object.create(cookie);
// "name" is a property set on "me", but not on "person"
// inherited properties can be overwritten

cookiesenabled.cookieenabled();
// expected output: "My name is Matthew. Am I human? true"
