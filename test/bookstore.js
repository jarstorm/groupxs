let chai = require('chai');
let should = chai.should();
let calc = require('../bookstore');

describe('Bookstore Functions', () => {
    describe('calculate()', () => {
        it('Buy only one book', () => {
            let res = calc.calculate(8, [1], [0]);
            res.should.be.equal(8);
        });

		it('Buy two different book', () => {
            let res = calc.calculate(8, [1, 1], [0, 0]);
            res.should.be.equal(16);
        });

		it('Use undefined as book price', () => {
			(function(){
            	calc.calculate();
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use -1 as book price', () => {
			(function(){
            	calc.calculate(-1, [1], [0]);
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use 0 as book price', () => {
			(function(){
            	calc.calculate(0, [1], [0]);
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use 0.1 as book price', () => {
			let res = calc.calculate(0.1, [1], [0]);
            res.should.be.equal(0.1);
        });

		it('Use undefined list of books', () => {
			(function(){
            	calc.calculate(1);
            }).should.throw(/^Book list should not be empty/);
        });

		it('Use empty list of books', () => {
			(function(){
            	calc.calculate(1, []);
            }).should.throw(/^Book list should not be empty/);
        });

		it('Use undefined list of discounts', () => {
			(function(){
            	calc.calculate(1, [1]);
            }).should.throw(/^Discount list should not be empty/);
        });

		it('Use empty list of discounts', () => {
			(function(){
            	calc.calculate(1, [1], []);
            }).should.throw(/^Discount list should not be empty/);
        });

		it('Buy two copies of one book', () => {
            let res = calc.calculate(8, [2], [0]);
            res.should.be.equal(16);
        });

		it('Buy two copies of one book with 10% discount', () => {
            let res = calc.calculate(8, [2], [10]);
            res.should.be.equal(14.40);
        });

		it('Buy two copies of one book and other book without discount', () => {
            let res = calc.calculate(8, [2, 1], [0, 0]);
            res.should.be.equal(24);
        });

		it('Buy two copies of one book and other book with 10% discount if buy two copies', () => {
            let res = calc.calculate(8, [2, 1], [0, 10]);
            res.should.be.equal(22.40);
        });

        it('Email example should return 51.60', () => {
            let res = calc.calculate(8, [2, 2, 2, 1, 1], [0, 5, 10, 20, 25]);
            res.should.be.equal(51.60);
        });

    });

	describe('calculateSumOfBooks()', () => {
		it('Calculate a sum of one book', () => {
            let res = calc.calculateSumOfBooks(8, [1], [0]);
            res.should.be.equal(8);
        });

        it('Calculate a sum of two books', () => {
            let res = calc.calculateSumOfBooks(8, [2], [0]);
            res.should.be.equal(8);
        });

		it('Calculate a sum of one books with discount', () => {
            let res = calc.calculateSumOfBooks(8, [1], [10]);
            res.should.be.equal(7.2);
        });

		it('Calculate a sum of two books with discount', () => {
            let res = calc.calculateSumOfBooks(8, [1,1], [0, 10]);
            res.should.be.equal(14.40);
        });

        it('Use undefined as book price', () => {
			(function(){
            	calc.calculateSumOfBooks();
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use -1 as book price', () => {
			(function(){
            	calc.calculateSumOfBooks(-1, [1], [0]);
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use 0 as book price', () => {
			(function(){
            	calc.calculateSumOfBooks(0, [1], [0]);
            }).should.throw(/^Cost per book should be a positive number/);
        });

		it('Use 0.1 as book price', () => {
			let res = calc.calculateSumOfBooks(0.1, [1], [0]);
            res.should.be.equal(0.1);
        });

		it('Use undefined list of books', () => {
			(function(){
            	calc.calculateSumOfBooks(1);
            }).should.throw(/^Book list should not be empty/);
        });

		it('Use empty list of books', () => {
			(function(){
            	calc.calculateSumOfBooks(1, []);
            }).should.throw(/^Book list should not be empty/);
        });

		it('Use undefined list of discounts', () => {
			(function(){
            	calc.calculateSumOfBooks(1, [1]);
            }).should.throw(/^Discount list should not be empty/);
        });

		it('Use empty list of discounts', () => {
			(function(){
            	calc.calculateSumOfBooks(1, [1], []);
            }).should.throw(/^Discount list should not be empty/);
        });
	});
});