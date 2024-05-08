const FirstName = document.getElementById("firstname")
const LastName = document.getElementById("lastname")
const Email = document.getElementById("email")
const Phone = document.getElementById("phone")
const Message = document.getElementById("text1")
const submit = document.getElementById('Submit');
const error = document.getElementById('errorf')
const emailerror = document.getElementById('emailerror')
const phonerror = document.getElementById('phonerror')
const errorl = document.getElementById('errorl')
const texerror = document.getElementById('texerror')


submit.addEventListener('click', async () => {
    const contact = {
        firstname: FirstName.value,
        lastname: LastName.value,
        email: Email.value,
        phone: Phone.value,
        message: Message.value

    }
    if (FirstName.value.trim() === '') {
        error.innerHTML = 'FirstName required'
        FirstName.style.border = '1px solid red'
    } else if (!FirstName.value.trim() === '') {
        FirstName.style.border = '1px solid green'
      
    }
    if (LastName.value.trim() === '') {
        errorl.innerHTML = 'LastName required'
        LastName.style.border = '1px solid red'
    } else if (!LastName.value.trim() === '') {
        LastName.style.border = '1px solid green'
    }

    if (Email.value.trim() === '') {
        emailerror.innerHTML = 'LastName required'
        Email.style.border = '1px solid red'
    } else if (!Email.value.trim() === '') {
        Email.style.border = '1px solid green'
    }
    if (Phone.value.trim() === '') {
        phonerror.innerHTML = 'LastName required'
        Phone.style.border = '1px solid red'
    } else if (!Phone.value.trim() === '') {
        Phone.style.border = '1px solid green'
    }
    if (Message.value.trim() === '') {
        texerror.innerHTML = 'LastName required'
        Message.style.border = '1px solid red'
    }
    else if (!Message.value.trim() === '') {
        Message.style.border = '1px solid green'

    } else {
        await fetch('https://mybrandbackend-93l8.onrender.com/api/messages/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(contact)
        }).then((response) => {
            if (!response.ok) {
                console.log('error');
            }
            return response.json()
        }).then((data) => {
            alert('Message sent successful!')
            console.log(data);
        }).catch((error) => {
            console.log(error.message);
        })
        error.innerHTML = ''
        errorl.innerHTML = ''
        emailerror.innerHTML = ''
        phonerror.innerHTML = ''
        texerror.innerHTML = ''




    }
    // && LastName === '' && Email === '' &&  Phone=== '' && Message === ''){

    // }
    FirstName.value = ''
    LastName.value = ''
    Email.value = ''
    Phone.value = ''
    Message.value = ''
})


// const contact = async()=>{
//     const firstname = FirstName.value;
//     const lastname = LastName.value;
//     const email = Email.value;
//     const phone = Phone.value;
//     const message = Message.value;
//     console.log(firstname, lastname, email, phone, message);
//     try {
//         const res = await axios({
//             method:"POST",
//             url:"https://mybrandbackend-93l8.onrender.com/api/messages/",
//             data: {
//                 firstname,
//                 lastname,
//                 email,
//                 phone,
//                 message,
//               }

//         })
//         console.log(res);

//     } catch (error) {
//         console.log(error + "error");
//     }

// }

// document.getElementById("Submit").addEventListener("click",()=>{
//     contact();
// })