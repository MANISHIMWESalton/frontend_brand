const signUp = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;
  try {
    const res = await fetch('http://localhost:9097/api/users/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
    })
    if (res.status === 200) {
      if (res.data.data.User.role === "user") {
        localStorage.setItem("jwt", res.data.token)
        alert("User created successfully");
        window.location.href = "index.html"
      }
    }
    else {
      const data = await res.json()
      const message = data.message
      alert(message)
    }
  } catch (error) {
    const data = await res.json();
    console.log(data);
    console.log("An error occurred while submitting the form." + error);
  }
}
document.getElementById("submit1").addEventListener('click', () => {
  signUp();
})