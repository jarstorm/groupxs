/* Main function */
function calculate(costPerBook, books, discounts){
	if (typeof costPerBook === 'undefined' || costPerBook <= 0) {
		throw new Error("Cost per book should be a positive number");
	}
	if (typeof books === 'undefined' || books.length <= 0) {
		throw new Error("Book list should not be empty");
	}
	if (typeof discounts === 'undefined' || discounts.length <= 0) {
		throw new Error("Discount list should not be empty");
	}

	var sum = 0;
	var max = Math.max.apply(null, books);
	for (var i = max; i > 0; i--) {
		sum += calculateSumOfBooks(costPerBook, books, discounts);
	}
    return sum;
}

/* Calculate a sum of books */
function calculateSumOfBooks(costPerBook, books, discounts) {
	if (typeof costPerBook === 'undefined' || costPerBook <= 0) {
		throw new Error("Cost per book should be a positive number");
	}
	if (typeof books === 'undefined' || books.length <= 0) {
		throw new Error("Book list should not be empty");
	}
	if (typeof discounts === 'undefined' || discounts.length <= 0) {
		throw new Error("Discount list should not be empty");
	}
	var items = 0;
	for (var i = 0; i < books.length; i++) {
		if (books[i] > 0) {
			items++;
			books[i] -= 1;
		}
	}	
	return (costPerBook * items) * (100 - discounts[items-1]) / 100;
}

module.exports = {
    calculate: calculate,
    calculateSumOfBooks: calculateSumOfBooks
}
