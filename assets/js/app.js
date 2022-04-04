jQuery(document).on("click", "#formSubmit", function(e){
    e.preventDefault();
    jQuery(".error").html("");
    jQuery("#result").html(result)
    var userName = jQuery("#userName").val();
    var email = jQuery("#email").val();
    var phone = jQuery("#phone").val();
    var age = jQuery("#age").val();
    var pwd = jQuery("#pwd").val();
    var go_had = true;

    var checkUserName = /^[A-Za-z]+$/;
    var checkPhone = /^[0-9]+$/;
    var checkEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   

    if(userName == ""){
        jQuery(".errorUser").html("enter your name ! Try Again")
    } else if(!checkUserName.test(String(userName))){
        jQuery(".errorUser").html("Your username must have letters only ! Try Again")
        go_had = false;
    }

    if(email == ""){
        jQuery(".errorEmail").html("enter your email id ! Try Again")
    } else if(!checkEmail.test(String(email).toLowerCase())){
        jQuery(".errorEmail").html("Please enter vailed email id ! Try Again")
        go_had = false;
    }

    
    if(phone == ""){
        jQuery(".errorPhone").html("enter your mobile no. ! Try Again")
    } else if(!checkPhone.test(phone)){
        jQuery(".errorPhone").html("Please enter mobile no in digite ! Try Again")
        go_had = false;
    } else if(phone.length != 10){
        jQuery(".errorPhone").html("Please enter 10 number mobile  ! Try Again")
        go_had = false;
    }

    if(age == ""){
        jQuery(".errorAge").html("enter your age. ! Try Again")
    } else if(!checkPhone.test(age)){
        jQuery(".errorAge").html("Please enter age in digite ! Try Again")
        go_had = false;
    } else if( (16 > age ) || ( age > 100 ) ){
        jQuery(".errorAge").html("Please enter minmum age 16 or maximum 100  ! Try Again")
        go_had = false;
    }


    if(pwd == ""){
        jQuery(".errorPwd").html("enter your password ! Try Again")
    } else if( pwd.length < 8 ){
        jQuery(".errorPwd").html("Please enter minimum 8 length password ! Try Again")
        go_had = false;
    }

    if(userName && email && phone && age && pwd && go_had == true){
        jQuery.post("./response.php",{
            userName, email, phone, age, pwd
        }, 
        function(result){
            jQuery("#result").html(result)
            setTimeout(function(){
                jQuery(".success").remove();
            }, 2000)
        })
    }

})

