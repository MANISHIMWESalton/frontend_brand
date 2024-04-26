const form = document.getElementById('myForm')
const firstName =document.getElementById('name')
const last = document.getElementById('lasname')
const email= document.getElementById('email')
const password = document.getElementById('password')
const confrim = document.getElementById('confrim')
const subm = document.getElementById('submit')
const ferror =document.getElementById('ferror')
const lerror = document.getElementById('lerror')
const emerror = document.getElementById('emerror')
const perror = document.getElementById('perror')
const coferror = document.getElementById('coferror')
const reset = document.getElementById('myReset')
const errorM = document.getElementById('errorM')

function strongPassword(password){
const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const numbers = /[0-9]/;
const isLowerCase = lowerCase.test(password);
const isUppreCase =upperCase.test(password);
const isNumbers = numbers.test(password);
return  isLowerCase && isUppreCase && isNumbers 


}

function confirmPassword(confrim){
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const numbers = /[0-9]/;
    const isLowerCase = lowerCase.test(confrim);
    const isUppreCase =upperCase.test(confrim);
    const isNumbers = numbers.test(confrim);
    return  isLowerCase && isUppreCase && isNumbers 
}
const store = []


async function signUp (){
    const firstName = document.getElementById("name");
    const lastName = document.getElementById("lasname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const UserData = {
  name: firstName.value +" "+lastName.value,
  email: email.value,
  password: password.value,
 

};

try {
  const response = await fetch(
    "https://mybrand-backend-pqhx.onrender.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data.message);
  } else {
    const data = await response.json();

    console.log(data.message );
  }
} catch (error) {
 console.log("An error occurred while submitting the form."+"error");
}
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let thereIsError = false;
 const name = firstName.value;
 const lastName = last.value;
 const Email = email.value;
 const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValue =password.value;
    const passWordValid = strongPassword(passwordValue)
    const confrimvalue = confrim.value;
    const confrimValid = confirmPassword(confrimvalue)
 const regex = /^[a-zA-Z]+$/
 if(name === ''){
    thereIsError = true;
    ferror.textContent = 'First Name required';
    firstName.style.border = '1px solid red'
    
 }
 if (regex.test(name)) {
    thereIsError = false;
    firstName.style.border = '3px solid green'
    ferror.textContent = '';
  }
if(lastName === ''){
    thereIsError = true;
    lerror.textContent = 'Last Name required';
    last.style.border = '1px solid red';
}else if(regex.test(lastName)){
    thereIsError = false;
    last.style.border = '3px solid green';
    lerror.textContent = '';
}
if(Email === ''){
    thereIsError = true;
email.style.border = '1px solid red';
emerror.textContent = 'Email required';
}else if(emailRegex.test(Email)){
    thereIsError = false;
    email.style.border = '3px solid green'
    emerror.textContent = '';
    }else{
        thereIsError = true;
        emerror.textContent = 'Invalid Email'
        email.style.border = '1px solid red'
    }

    if(passwordValue ===''){
        thereIsError = true;
    perror.textContent = 'Password required';
    password.style.border = '1px solid red'
} else if(passwordValue.length<8){
    thereIsError = true;
    password.style.border = '1px solid red'
    perror.textContent = 'password should have at least 8 charactor';
} 
else if(!passWordValid){
    thereIsError = true;
    password.style.border = '1px solid red'
    perror.textContent = 'password should be contain Numbers, uppercase and lowercase';

}
else{
    thereIsError = false;
    password.style.border = '3px solid green'
    perror.textContent = '';
}
if(confrimvalue === ''){
    thereIsError = true;
    coferror.textContent = 'Confirm password required'
    confrim.style.border = '1px solid red'

}else if(confrimvalue.length<8){
    thereIsError = true;
    confrim.style.border = '1px solid red'
    coferror.textContent = 'password should have at least 8 charactor';
} 
else if(!confrimValid){
    thereIsError = true;
    confrim.style.border = '1px solid red'
    coferror.textContent = 'password should be contain Numbers, uppercase and lowercase';

}
else{
    thereIsError = false;
    confrim.style.border = '3px solid green'
    coferror.textContent = '';
}


// const existingData = JSON.parse(localStorage.getItem('userData'))||[]
// const existingUser = existingData.find((user)=>user.email===email.value)
// if(existingUser){
//     reset.textContent  = "User invalid"

// }

// const storeDate = {
//     firstName:firstName.value,
//     lastName:last.value,
//     email:email.value,
//     password:password.value,
//     confrim:confrim.value
// }
if((!firstName || !lastName || !email||!password ||!confrim) || thereIsError){
    reset.textContent ="";
    errorM.style.color = 'red'
    return;
}
signUp();

// existingData.push(storeDate)
// localStorage.setItem('userData',JSON.stringify(existingData))
// console.log(existingData)
//     resetForm ()
//     reset.textContent  = "Message sent successfully"
})

function resetForm(){
firstName.value='';
last.value='';
email.value='';
password.value='';
confrim.value='';
}