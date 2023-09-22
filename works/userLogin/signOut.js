let data = localStorage.getItem("userData");
data = JSON.parse(data);
document.querySelector(
	"#private"
).innerHTML = `Hi <span class='text-red-500 p-4 mx-auto my-4 text-center'>${data.name}!</span> This is a private content`;

document.getElementById("signOut").addEventListener("click", function () {
	window.location.href = "./signUp.html";
	localStorage.removeItem("userData");
	alert("Your user information will be deleted");
});
