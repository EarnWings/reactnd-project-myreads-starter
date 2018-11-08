export const sortAllBooks = (list) => {
	//sort the list of books passed in and return the sorted list
	const newList = list.sort(function (a, b) {
		const bookA = a
			.title
			.toUpperCase();
		const bookB = b
			.title
			.toUpperCase();
		if (bookA < bookB) {
			return -1;
		} if (bookA > bookB) {
			return 1;
		}
		return 0;
	})

	return newList;
}

export const mergeShelvesAndSearch = (shelf, search) => {
	//for each book in the search results, check if it already
	//exists as an already shelved book
	const hashTable = {};
	shelf.forEach(book => hashTable[book.id] = book.shelf);

	search.forEach(book => {
		book.shelf = hashTable[book.id] || 'none';
	});

	return search;
}