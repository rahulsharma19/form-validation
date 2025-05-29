//email validation function
function valid_email(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
//password validation funtion
function validatePassword(password) {
     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
     return regex.test(password);
   }
//password show and hide function
function myFunction(a) {
  var x = document.getElementById(a);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//form validation function
function formvalidation(){
    var error = '';
    var success = 'You are registered.';
    
    if($("#email").val()=='')
    {
        error += "Please insert an email.<br>";
    }
    else if(valid_email($("#email").val()) == false)
    {
        error += "Please insert a valid email.<br>";
    }
    if($("#phoneno").val()=='')
    {
        error += "Please insert phone number.<br>";
    }
    else if($.isNumeric($("#phoneno").val()) == false)
    {
        error += "Please insert a valid phone number.<br>";
    }
    if($("#password").val()=='')
    {
        error += "Please insert password.<br>";
    }
    else if(validatePassword($("#password").val()) ==  false){
        error += "Please insert a valid password including minimum length 8, uppercase, lowercase, special character and number.<br>";
    }
    else if($("#crmpassword").val()==''){
        error += "Please insert confirm password.<br>";
    }
    else if($("#password").val()!=$("#crmpassword").val()){
        error += "Password does not match.<br>";
    }
    
    if(error!='')
        {
            $("#errormsg").html(error);
            $("#successmsg").show();
        }
    if(error=='')
        {
            $("#errormsg").hide();
            $("#successmsg").html(success);
        }
}       
jQuery(document).ready(function () {
  jQuery("#phoneno").keypress(function (e) {
   var length = jQuery(this).val().length;
   if(length > 9) {
      return false;
   } else if(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
   } else if((length == 0) && (e.which == 48)) {
      return false;
   }
  });
});