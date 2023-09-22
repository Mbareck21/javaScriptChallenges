const loginbtn = document.getElementById("loginbtn");
const privatePage = document.querySelector("#private");
const errMessage = document.querySelector("#errMessage");

loginbtn.addEventListener("click", function () {
	let data = localStorage.getItem("userData");
	data = JSON.parse(data);
	if (!data) {
		errMessage.innerHTML = "Please sign up before trying to log in.";
	}
	data.authorized = false;
	const NewName = document.querySelector("#name").value;
	const newPassword = document.querySelector("#password").value;

	if (!NewName || NewName !== data.name) {
		errMessage.innerHTML =
			"Please enter the same user name you registered with.";
	} else if (!newPassword || newPassword !== data.password) {
		errMessage.innerHTML =
			"Please enter the same user password you registered with.";
	} else {
		data.authorized = true;
		window.location.href = "./securedPage.html";
	}
});
