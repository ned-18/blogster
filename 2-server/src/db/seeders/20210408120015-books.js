'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'books',
			[
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883841952-book-image-1.jpg',
					title: "Harry Potter and Philosopher's Stone",
					price: 12.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883863745-book-image-2.jpg',
					title: 'Harry Potter and Chamber of Secrets',
					price: 11.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883909917-book-image-3.jpg',
					title: 'Harry Potter and Prisoner of Azkaban',
					price: 13.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883936687-book-image-4.jpg',
					title: 'Harry Potter and Goblet of Fire',
					price: 10.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883954194-book-image-5.jpg',
					title: 'Harry Potter and Order of the Phoenix',
					price: 9.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883970592-book-image-6.jpg',
					title: 'Harry Potter and Half-Blood Prince',
					price: 12.99,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					imageUrl: 'http://localhost:3000/src/uploads/images/1617883986959-book-image-7.jpg',
					title: 'Harry Potter and Deathly Hallows',
					price: 13.99,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);

		// http://localhost:3000/uploads/images/
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('books', null, {});
	}
};
