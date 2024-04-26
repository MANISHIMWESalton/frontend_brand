const form = document.getElementById('myForm')
const subm = document.getElementById('submit')
const email= document.getElementById('email')
const password = document.getElementById('password')
const emerror = document.getElementById('emerror')
const perror = document.getElementById('perror')
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

async function login (){

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const UserData = {
  email: email.value,
  password: password.value,
 

};

try {
  const response = await fetch(
    "https://mybrand-backend-pqhx.onrender.com/api/users/login",
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
    const token = data.message.token;
    localStorage.setItem("token",token)
    console.log(data.message);
    window.location.href = "index.html"
  } else {
    const data = await response.json();

    console.log(data.message );
  }
} catch (error) {
 console.log("An error occurred while submitting the form."+error);
}
}



const store = []

function resetForm(){
    email.value='';
    password.value='';
    }

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let thereIsError = false;
    const Email = email.value;
 const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValue = password.value;
    const passWordValid = strongPassword(passwordValue)
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

            if((!email ||!password)||thereIsError){
                reset.textContent = "";
                errorM.style.color = 'red'
                return;
            }

            login()
// const storeDate = {
//     email:email.value,
//     password:password.value
// }
// store.push(storeDate)

// console.log(store)
//     resetForm ()
//     reset.textContent  = "Message sent successfully";
})

