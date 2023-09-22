let data = localStorage.getItem("userData");
data = JSON.parse(data);

let balance = data.deposit || 0;
document.querySelector("#private").innerHTML = balance;
let welcomeMessage = document.querySelector("#welcomeMessage");
welcomeMessage.innerHTML = `welcome ${data.name} to your personal account. You can add or withdraw funds.`;
//deposit logic
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
	let addInput = document.getElementById("inputAdd");
	let fundsValue = Number(addInput.value);
	balance = fundsValue + data.deposit;

	data.deposit = balance;
	addInput.value = "";
	localStorage.setItem("userData", JSON.stringify(data));
	fundsValue != 0 &&
		updateTable("Deposit", `${fundsValue}`, getTransactionDate());
	document.querySelector("#private").innerHTML = balance;
});
//withdrawal logic
const withdrawButton = document.querySelector("#Withdraw");
withdrawButton.addEventListener("click", () => {
	let withdrawInput = document.getElementById("inputWithdraw");
	let withdrawValue = Number(withdrawInput.value);
	if (withdrawValue > balance) {
		alert("You do not have sufficient balance in your account!");
	} else {
		balance = data.deposit - withdrawValue;
		data.deposit = balance;
		localStorage.setItem("userData", JSON.stringify(data));
		withdrawValue != 0 &&
			updateTable("Withdrawal", `-${withdrawValue}`, getTransactionDate());
	}
	document.querySelector("#private").innerHTML = balance;
	withdrawInput.value = "";
});

document.getElementById("signOut").addEventListener("click", function () {
	window.location.href = "./signUp.html";
	localStorage.removeItem("userData");
});

//Date helper
function getTransactionDate() {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let period = "A.M";
	if (hour > 12) {
		hour = hour - 12;
		period = "P.M";
	} else if (hour == 0) {
		hour = 12;
	}

	if (minute < 10) {
		minute = "0" + minute;
	}
	return (
		month + "/" + day + "/" + year + "  " + hour + ":" + minute + " " + period
	);
}

// table builder
function updateTable(transactionType, amount, date) {
	let table = document.getElementById("table");
	let newRow = `<tr class="bg-gray-800"><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${transactionType}</td class="px-6 py-4"><td>${amount}</td><td class="px-6 py-4">${date}</td></tr>`;
	table.innerHTML += newRow;
}
