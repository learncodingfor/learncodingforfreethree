const cookie = {
  isenabled: true,
  cookieenabled: function() {
    if(navigator.cookieEnabled = true){alert("yea")}else{person.isenabled = false}
if(cookie.isenabled = false){alert("enable cookies")}
  }
};

const cookiesenabled = Object.create(cookie);
// "name" is a property set on "me", but not on "person"
// inherited properties can be overwritten

cookiesenabled.cookieenabled();
// expected output: "My name is Matthew. Am I human? true"
