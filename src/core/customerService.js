let { getCustomers } = require('../models/customers.js');


/**
 * Return customers within range
 * 
 * @param {number} range
 * @return {object}
 */
function getCustomersInArea(range=100, order="asc"){
	return new Promise((resolve, reject) => {
		getCustomers().then(data => {
			let result = filterByRange(data, range);
			let sortFn = (order === "asc") ? sortByUserIdAsc : sortByUserIdDesc
			result = result.sort(sortFn)
			resolve(result);
		}).catch(err => {
			console.log(err);
			resolve([]);
		})
	})
}

/**
 * Filter Customers by given range
 * 
 * @param {number} range
 * @return {object}
 */
function filterByRange(customers, range=100){
	let result = []
	for(let i = 0; i<customers.length;i++){
		if(customers[i].distanceToTarget <= range){
			result.push(customers[i]);
		}
	}
	return result
}

/**
 * Comparator function by user_id.
 * Order: Ascending  
 * 
 * @param {object} aElement
 * @param {object} bElement
 * @return {array}
 */
function sortByUserIdAsc(aElement, bElement) {
	return aElement.user_id - bElement.user_id;
}

/**
 * Comparator function by user_id.
 * Order: Descending  
 * 
 * @param {object} aElement
 * @param {object} bElement
 * @return {array}
 */
function sortByUserIdDesc(aElement, bElement) {
	return bElement.user_id - aElement.user_id;
}


module.exports = {
	getCustomersInArea: getCustomersInArea,
	filterByRange: filterByRange,
	sortByUserIdDesc: sortByUserIdDesc,
	sortByUserIdAsc: sortByUserIdAsc
}