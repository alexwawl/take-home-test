let fs = require('fs');
let { PATH_TO_CUSTOMERS_FILE } = require('../../config.json');
let { readDataFromFile } = require('../utils/fileIO.js');
let { isValidLatitude, isValidLongitude, calculateDistanceToTarget } = require('../utils/coordinatesMath.js');


/**
 * Load Customers from File 
 * and convert it to JSON objects.
 * 
 * @return {object}
 */
function loadCustomersFromFile() {
	return new Promise((resolve, reject) => {
		readDataFromFile(PATH_TO_CUSTOMERS_FILE)
			.then( data => {
				let customers = [];
				for (let idx in data) {
					try {
						let customer = JSON.parse(data[idx]);
						customers.push(customer);
					} catch(err) {
						console.warn('Error on converting Customer Text Line to JSON Object:', {
							err: err,
							customerFileLine: data[idx]
						})
					}
				}
				resolve(customers)
			})
			.catch( err => {
				console.error('Error on Loading from File: ', err)
				reject(err)
			});
	});
}

/**
 * Get Customers List 
 * Add "distance" field, calculated on available (latitude, longitude)
 *
 * @return {array}
 */
function getCustomers(){
	return new Promise((resolve, reject) => {
		loadCustomersFromFile()
			.then( customers => {
				let result = []
				for (let i = 0; i < customers.length; i++){
					let customer = customers[i];
					if(isValid(customer)){
						customer.distanceToTarget = calculateDistanceToTarget(customer.latitude, customer.longitude)
						result.push(customer)
					}
				}
				resolve(result);
			})
			.catch(err => {
				console.error('Error on Getting Customers:', err);
				reject(err)
			})
	});
}

/**
 * Check if Customer is Valid
 * check is required fields exists,
 * and longitude and latitude is correct
 *
 * @param{string} customer
 * @return {boolean}
 */
function isValid(customer){
	return  !isNaN(customer.user_id) && 
			!isNaN(customer.longitude) && 
			isValidLongitude(customer.longitude) &&
			!isNaN(customer.latitude) && 
			isValidLatitude(customer.latitude) &&
			customer.name && customer.name.length > 0;
}

module.exports = {
	getCustomers: getCustomers,
	isValid: isValid,
	loadCustomersFromFile: loadCustomersFromFile
}