function saveData() {
	let data = {};
	const name = document.querySelector("#name").value;
	const password = document.querySelector("#password").value;
	const deposit = document.querySelector("#deposit").value;
	const errMessage = document.querySelector("#errMessage");

	if (name.length === 0) {
		errMessage.innerHTML = "Please enter your name.";
		return;
	}

	if (password.length < 5) {
		errMessage.innerHTML =
			"Please enter a password that is at least 5 numbers long.";
		return;
	}

	data.name = name;
	data.password = password;
	data.deposit = Number(deposit);

	localStorage.setItem("userData", JSON.stringify(data));

	window.location.href = "./login.html";
}
