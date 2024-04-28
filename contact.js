const FirstName =document.getElementById("firstname")
const LastName =document.getElementById("lastname")
const Email =document.getElementById("email")
const Phone =document.getElementById("phone")
const Message =document.getElementById("text1")

const contact = async()=>{
    const firstname = FirstName.value;
    const lastname = LastName.value;
    const email = Email.value;
    const phone = Phone.value;
    const message = Message.value;
    console.log(firstname, lastname, email, phone, message);
    try {
        const res = await axios({
            method:"POST",
            url:"https://mybrandbackend-93l8.onrender.com/api/messages/",
            data: {
                firstname,
                lastname,
                email,
                phone,
                message,
              }

        })
        console.log(res);

    } catch (error) {
        console.log(error + "error");
    }

}

document.getElementById("Submit").addEventListener("click",()=>{
    contact()
})