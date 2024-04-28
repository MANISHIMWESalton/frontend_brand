const signUp=async ()=>{
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confrim").value;
try {
  const res = await axios({
    method: "POST",
    url: "https://mybrandbackend-93l8.onrender.com/api/users/signup",
    data: {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    },
  });
console.log(res);
localStorage.setItem("jwt",res.data.token)
localStorage.setItem("user", JSON.stringify(res.data.data.User));
if(res.data.data.User.role === "admin"){
  window.location.href = "dashboard/index.html"
}
else if(res.data.data.User.role === "user"){
  window.location.href = "index.html"
}
} catch (error) {
  console.log(name,email,password,confirmPassword);
console.log("An error occurred while submitting the form."+error);
}
}
document.getElementById("submit1").addEventListener('click',()=>{
  signUp();
})