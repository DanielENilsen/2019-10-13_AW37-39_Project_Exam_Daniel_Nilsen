
// varibales 
var submitbutton = document.getElementById('contactButton');

submitbutton.addEventListener('click', function() {


  var firstname = document.getElementById('name').value;
  var lastname = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phonenr = document.getElementById('tlfNumber').value;

  //regex 
  var MailValidate = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var firstNameAndLastName =  /^[a-zA-Z ]+$/;
  var PhoneNumber = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{4})+$/g;


  
  if(firstNameAndLastName.test(firstname)) {
      document.getElementById('errorname').style.display = "none";  
    } else {
      document.getElementById('errorname').style.display = "block";
  }

  if(firstNameAndLastName.test(lastname)) { 
      document.getElementById('lastnameerror').style.display = "none";
    } else { 
    document.getElementById('lastnameerror').style.display = "block";
  }

  if(MailValidate.test(email)) { 
      document.getElementById('emailerror').style.display = "none";
    } else { 
      document.getElementById('emailerror').style.display = "block";
  }

  if(PhoneNumber.test(phonenr)) { 
    document.getElementById('phoneerror').style.display = "none";
    } else { 
       document.getElementById('phoneerror').style.display = "block";
  }

});






