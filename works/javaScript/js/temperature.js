const converter = () => {
	const degreesVal = document.querySelector("#degrees").value;
	const optionVal = document.querySelector("select option:checked");

	const resultSpan = document.querySelector("#hidden-result");
	if (optionVal.value === "fahrenheit") {
		resultSpan.style.display = "block";
		resultSpan.innerHTML = `${getCelsius(degreesVal)} <sup>o</sup> C`;
		resultSpan.style.backgroundColor = "yellow";
	} else if (optionVal.value === "celsius") {
		resultSpan.style.display = "block";
		resultSpan.innerHTML = `${getFahrenheit(degreesVal)} <sup>o</sup> F`;
		resultSpan.style.backgroundColor = "tomato";
	}
};
function inptChange() {
	const varSpan = document.querySelector("#varSpan");
	const optionVal = document.querySelector("select option:checked");
	optionVal.value === "fahrenheit"
		? (varSpan.innerHTML = "Fahrenheit")
		: (varSpan.innerHTML = "Celsius");
}
const getCelsius = (f) => {
	return Math.round(((f - 32) * 5) / 9);
};
const getFahrenheit = (c) => {
	return Math.round(c * (9 / 5) + 32);
};
// theme changer
const btn = document.querySelector(".theme");
const light = "white";
const dark = "black";
let body = document.querySelector("body");
body.style.backgroundColor = light;
btn.addEventListener("click", function () {
	if (body.style.backgroundColor == dark) {
		body.style.backgroundColor = light;
		body.style.color = dark;
		btn.innerHTML = "Dark Theme";
		body.querySelector("#hidden-result").style.backgroundColor = "green";
	} else {
		body.style.backgroundColor = dark;
		body.style.color = light;
		btn.innerHTML = "Light Theme";
		body.querySelector("#hidden-result").style.backgroundColor = "green";
	}
});

// adding an external header element
const header = document.querySelector("header");
const headerContent = (document.createElement("h1").textContent =
	"Temperature Converter");
header.append(headerContent);
const date = new Date().getFullYear();
const footer = (document.querySelector(
	"footer"
).innerHTML = `&copy; ${date} Mohamed. M `);
