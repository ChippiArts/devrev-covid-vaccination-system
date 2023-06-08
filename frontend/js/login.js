const login = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  if ((email.value != "") & (password.value != "")) {
    postData(email.value, password.value);
  } else {
    alert("Fill all the details");
  }
});

async function postData(email, password) {
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  axios
    .post("http://localhost:3000/auth/login", data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("email", email);
      localStorage.setItem("username", res.data.username);
      alert("Logged in successfully")
    })
    .then(() => (window.location = "/bookslot"))
    .catch((err) => {
      console.log(err);
      alert(err.response.data.errors);
    });
}
