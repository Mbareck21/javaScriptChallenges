// Declaring Variables
const priceShowingDiv = document.querySelector("#cartDiv");
const payButton = document.querySelector("#pay");
const totalPriceDiv = document.querySelector("#totalPrice");
const cartButtons = document.querySelectorAll("#cartbtn");
let totalOwedDiv = document.querySelector("#totalOwedDiv");
let itemName = "";
let itemPrice = 0;
let totalPrice = 0;

//some logic for all add to cart buttons => applies based on which one is clicked
cartButtons.forEach((cartButton) => {
	cartButton.addEventListener("click", (e) => {
		// selecting item name and price values from the DOM
		itemPrice = e.target.parentElement.children[3].textContent;
		itemName = e.target.parentElement.children[1].textContent;
		//displaying selected items on the page
		priceShowingDiv.innerHTML += `<ul class='list-disc'><li>${itemName} ${itemPrice}</li></ul> `;
		//removing the '$' sign from the price for numeric calculations
		totalPrice += parseFloat(itemPrice.replace("$", ""));
		// displaying the accumulating total price on the page
		totalPriceDiv.innerHTML = `<span class="font-bold">Your Total is: <span class="font-bold text-amber-400"> $${totalPrice.toFixed(
			2
		)}</span></span>`;
	});
});

// adding an eventListener on the pay button
payButton.addEventListener("click", () => {
	// create a array of change values for easier loops
	const changeMakeUp = [
		{ name: "Hundreds", value: 100 },
		{ name: "Tens", value: 10 },
		{ name: "Ones", value: 1 },
		{ name: "Quarters", value: 0.25 },
		{ name: "Dimes", value: 0.1 },
		{ name: "Nickels", value: 0.05 },
		{ name: "Pennies", value: 0.01 },
	];

	// defining a local variable to store the change values
	let changeResults = [];

	// clearing any previous output from totalOwedDiv
	totalOwedDiv.innerHTML = "";

	// defining a function that performs the total price and the change values
	function priceMakeUp() {
		// define a variable to store the remaining total after each iteration. First initiated by having the total price value
		let remaining = totalPrice;
		// looping over the change array
		for (let item of changeMakeUp) {
			// using a for-of loop to iterate over the change array
			if (remaining >= item.value) {
				let count = Math.floor(remaining / item.value);
				// adding the iteration value in the changeResults array
				changeResults.push(`${count} ${item.name}`);
				// tracking the remaining total price
				remaining = (remaining - item.value * count).toFixed(2);
			} else {
				// manually assigning '0' values if the remaining amount is less than the change element's value
				changeResults.push(`0 ${item.name}`);
			}
		}
		// console.log(changeResults);
		return changeResults;
	}
	// call the price calculating function
	priceMakeUp();
	// create a new div to hold the change elements
	let changeResDiv = document.createElement("div");
	// add some inline CSS to the new div
	changeResDiv.setAttribute("class", "flex flex-col gap-1");
	/* create a span element to hold the change values
    joining the change values with a line break as a separator */
	let changeResSpan = document.createElement("span");
	changeResSpan.innerHTML = changeResults.join("<br>");
	// adding the span element into the parent changeResDiv
	changeResDiv.appendChild(changeResSpan);
	let newHeading = document.createElement("h1");
	newHeading.setAttribute("class", "text-lg font-bold");
	newHeading.textContent = "Total Change Owed:";
	// append everything to the pre-existing parent div
	totalOwedDiv.appendChild(newHeading);
	totalOwedDiv.appendChild(changeResDiv);
});
