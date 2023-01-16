var FirstnameError = document.getElementById('FirstnameError');
var LastnameError = document.getElementById('LastnameError');
var PhoneNoError = document.getElementById('PhoneNoError');
var EmailError = document.getElementById('EmailError');
var MessageError = document.getElementById('MessageError');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var formError = document.getElementById('formError');
// Order Variables
var NameError = document.getElementById('NameError');
var FoodError = document.getElementById('FoodError');
var DrinkError = document.getElementById('DrinkError');
var PhoneError = document.getElementById('PhoneError');
var FoodAmountError = document.getElementById('FoodAmountError');
var DrinkAmountError = document.getElementById('DrinkAmountError');
var LocationError = document.getElementById('LocationError');
var formError2 = document.getElementById('formError2');



let DrinksMenu=["a creamy checolate ice cream milkshake","frosted cacoa chocolate milk shake",
"frosted coffe milk shake","a strawberry milk shake",
"special drink 1","special drink 2","special drink 3",]

let FoodMenu=["double layer ham burger with extra cheese","triple layer chicken burger",
"fried chicken legs with frech fries and saus","extra large peperonie pizza",
"special meal 1","special meal 2","special meal 3",]




// First Name Validation
function validateFirstName(){

    var firstName = document.getElementById('firstname1').value;

    if (firstName.length == 0){
        FirstnameError.innerHTML = 'FirstName Is Required!';
        return false;
    }
    FirstnameError.innerHTML = '<i class="fa fa-check"></i>';
    return true;

    
}


// Second Name Validation
function validateLastName(){

    var lastName = document.getElementById('lastname1').value;

    if (lastName.length == 0){
        LastnameError.innerHTML = 'LastName Is Required!';
        return false;
    }
    LastnameError.innerHTML = '<i class="fa fa-check"></i>';
    return true;

    
}


// Phone Number Validation
function validatePhoneNo(){

    var phoneNo = document.getElementById('phoneNo').value;

    if (phoneNo.length == 0){
        PhoneNoError.innerHTML = 'Phone Number Is Required!';
        return false;
    }
    if (phoneNo < 0){
        PhoneNoError.innerHTML = 'Phone Number Is Required!';
        return false;
    }
    if (phoneNo.length !== 10){
        PhoneNoError.innerHTML = 'invalid number!';
        return false;
    }
    if (!phoneNo.match(/^[0-9]{10}$/)){
        PhoneNoError.innerHTML = 'Only Numbers Please';
        return false;
    }
    PhoneNoError.innerHTML = '<i class="fa fa-check"></i>';
    return true;   
}


// Email Validation
function validateEmail(){

    var email = document.getElementById('emailId').value;

    if (email.match(pattern)){
        EmailError.innerHTML = '<i class="fa fa-check"></i>';
        return true;  
    }
    else{
        EmailError.innerHTML = 'A valid email is required!';
        return false;  
        
    }

    

        
    
    
  
    
}


// Comment Section Validation
function validateMessage(){

    var message = document.getElementById('textZone').value;

    if (message.length == 0){
        MessageError.innerHTML = 'Comment Section Is Required!';
        return false;
    }
    MessageError.innerHTML = '<i class="fa fa-check"></i>';
    return true;  
}


function validateContact(){

    if( !validateFirstName()||!validateLastName()||
    !validatePhoneNo()||!validateEmail()||
    !validateMessage()){
        formError.innerHTML = 'Please fill The Required Fields';
        return false;
    }
    return false;

}



// Order page Validation
function validateName(){

    var Name = document.getElementById('name1').value;

    if (Name.length == 0){
        NameError.innerHTML = 'Name Is Required!';
        return false;
    }
    NameError.innerHTML = '<i class="fa fa-check"></i>';
    return true;

    
}

function validateFood(){

    var Food = document.getElementById('fooditem1').value;
    var LowerFood = Food.toLowerCase();

    FoodError.innerHTML = FoodMenu.includes(LowerFood) ? '<i class="fa fa-check"></i>':'Please Select From The Menu';

}
function validateDrink(){

    var Drink = document.getElementById('drinks1').value;
    var LowerDrink = Drink.toLowerCase();

    DrinkError.innerHTML = DrinksMenu.includes(LowerDrink) ? '<i class="fa fa-check"></i>':'Please Select From The Menu';

}

function validatePhone(){

    var phone = document.getElementById('phone1').value;

    if (phone.length == 0){
        PhoneError.innerHTML = 'Phone Number Is Required!';
        return false;
    }
    if (phone < 0){
        PhoneError.innerHTML = 'Invalid number!';
        return false;
    }
    if (phone.length !== 10){
        PhoneError.innerHTML = 'Invalid number!';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = 'Only Numbers Please';
        return false;
    }
    PhoneError.innerHTML = '<i class="fa fa-check"></i>';
    return true;   
}

function validateFoodAmount(){

    var FoodAmount = document.getElementById('amount1').value;

    if (FoodAmount > 7){
        FoodAmountError.innerHTML = 'Maximum amount to be ordered is 7 at a time.';
        return false;
    }

    FoodAmountError.innerHTML = '<i class="fa fa-check"></i>';
    return true; 
}
function validateDrinkAmount(){

    var DrinkAmount = document.getElementById('amount2').value;

    if (DrinkAmount > 7){
        DrinkAmountError.innerHTML = 'Maximum amount to be ordered is 7 at a time.';
        return false;
    }
    if (DrinkAmount < 0){
        DrinkAmountError.innerHTML = 'Invalid Amount!';
        form.input.style = "outline-color: Red;"
        return false;

    }

    DrinkAmountError.innerHTML = '<i class="fa fa-check"></i>';
    return true; 
}

function validateLocation(){

    var Location = document.getElementById('location1').value;

    if (Location.length == 0){
        LocationError.innerHTML = 'Location Is Required!';
        return false;
    }
    LocationError.innerHTML = '<i class="fa fa-check"></i>';
    return true; 
}

function validateForm(){
    if( !validateDrink()||!validateFoodAmount()||
    !validateDrinkAmount()||!validateFood()||
    !validateFoodAmount()||!validateLocation()||!validateName()){
        formError2.innerHTML = 'Please fill The Required Fields';
        return false;
    }
}

