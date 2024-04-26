
const fullName = document.getElementById('name');
const error = document.getElementById('error');
const error2 = document.getElementById('emailerror')
const emailAddress = document.getElementById('Email');

const suberror4 = document.getElementById('suberror')
const subjectType = document.getElementById("subject");
const texerror5 = document.getElementById("texerror");
const text = document.getElementById('text1')
const clear = document.getElementById('Submit')
const reset = document.getElementById('myReset')
const errorM = document.getElementById('errorM')
const text1 = document.getElementById('text1')

function resetForm (){
    fullName.value = "";
    emailAddress.value = "";
    
    subjectType.value = "";
    text.value = "";
    error2.textContent = ''
    errorM.textContent = "";
}


const form = document.getElementById('myform');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('text1').value.trim();

    const userData = {
        name: fullName,
        email: email,
        subject: subject,
        message: message
    };

    try {
        const response = await fetch(
            "https://mybrand-backend-pqhx.onrender.com/api/suggestion/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            // Reset form fields after successful submission
            form.reset();
        } else {
            const errorData = await response.json();
            console.log("Error:", errorData.message);
        }
    } catch (error) {
        console.log("An error occurred while submitting the form:", error);
    }
});







const store = []
form.addEventListener('submit',(e)=>{
e.preventDefault();
let thereIsError = false; 
const name= fullName.value.trim()
if(name===""){
    thereIsError =true;
fullName.style.border = '1px solid red'
error.textContent = "Full Name required"
}else if(!/^[a-zA-Z0-9]+$/.test(name)){
    thereIsError =true;
error.textContent = 'Numbers are not allowed';
fullName.style.border = '1px solid red'

}else if(name.length<4){
    thereIsError =true
    error.textContent = 'Name should be at least 5 characters.';
fullName.style.border = '1px solid red'
}else{
    thereIsError = false;
    fullName.style.border = '3px solid green'
    error.textContent = ""
} 
const email = emailAddress.value.trim()
const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(email === ""){
    thereIsError =true
    emailAddress.style.border = '1px solid red'
    error2.textContent = 'Email required'
}else if(emailRegex.test(email)){
    thereIsError = false;
emailAddress.style.border = '3px solid green'
error2.textContent = ''
}
else if(!emailRegex.test(email)){
    thereIsError =true
    error2.textContent = 'Invalid Email'
    emailAddress.style.border = '1px solid red'
}
const subject = subjectType.value.trim()
if(subject === ""){
    thereIsError =true
    subjectType.style.border = '1px solid red'
    suberror4.textContent = 'subject required'
}else{
    thereIsError = false;
    subjectType.style.border = '3px solid green'
    suberror4.textContent = ''
}
const message = text.value.trim()
if(message === ""){
    thereIsError =true
    text.style.border = '1px solid red'
    texerror5.textContent = "Message required"
}else if(message.length>20){
    thereIsError = false;
    text.style.border = '3px solid green'
    texerror5.textContent = ""
}else{
    thereIsError =true
    texerror5.textContent = "Message should'nt be less than 20 words"
    text1.style.border = '1px solid red'
}
const storeData=  {
name: fullName.value,
email: emailAddress.value,
subject:subjectType.value,
message:text.value
} 

if((!name||!email||!subject||!message) || thereIsError){
    reset.textContent ="";
    errorM.style.color = 'red'
    return;
}
// store.push(storeData)
// localStorage.setItem("userMessage",JSON.stringify(store))
// console.log(store)
    resetForm ()
    reset.textContent  = "Message sent successfully"

});



