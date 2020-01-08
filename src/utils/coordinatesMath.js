let config = require('../../config.json');

const EARTH_RADIUS  = 6371;
const TARGET_LATITUDE = config.TARGET_LOCATION_LATITUDE;
const TARGET_LONGITUDE = config.TARGET_LOCATION_LONGITUDE;


/**
 * Calculation distance between 2 points in kilometers.
 *
 * Implementation of first formula from https://en.wikipedia.org/wiki/Great-circle_distance 
 * as mentioned in email.
 * 
 * 
 * @param {number} fromLatitude
 * @param {number} fromLongitude
 * @param {number} toLatitude
 * @param {number} toLongitude
 * @return {number}
 */
function calculateDistanceToTarget(fromLatitude, fromLongitude, 
									toLatitude=TARGET_LATITUDE, toLongitude=TARGET_LONGITUDE) {
	
	let deltaLongitudeRad = degreesToRadians(toLongitude - fromLongitude);

	let	fromLatitudeRad = degreesToRadians(fromLatitude);
	let toLatitudeRad = degreesToRadians(toLatitude);

	let alpha = Math.acos(
			Math.sin(fromLatitudeRad) * Math.sin(toLatitudeRad) +
			Math.cos(fromLatitudeRad) * Math.cos(toLatitudeRad) * Math.cos(deltaLongitudeRad)
		);

	let distance = EARTH_RADIUS * alpha;
	return distance;
}

/**
 * Convert degrees to radians.
 *
 * Details: https://en.wikipedia.org/wiki/Radian
 * 
 * 
 * @param {number} degree
 * @return {number}
 */
function degreesToRadians(degree){
	return degree * (Math.PI / 180)
}

/**
 * Validate Latitude value
 * 
 * @param {number} latitude
 * @return {boolean}
 */
function isValidLatitude(latitude){
 	if (latitude < -90 || latitude > 90) {
 		console.warn('Warning: Latitude value shoule be between +/- 90 but got: ' + latitude);
 		return false;
 	}
 	return true
 }


/**
 * Validate Longitude value
 *
 * @param {number} longitude
 * @return {boolean}
 */
function isValidLongitude(longitude){
 	if (longitude < -180 || longitude > 180){
 		console.warn('Warning: Longitude value shoule be between +/- 180 but got: ' + longitude);
 		return false
 	} 
 	return true
}

module.exports = {
	calculateDistanceToTarget: calculateDistanceToTarget,
	degreesToRadians: degreesToRadians,
	isValidLatitude: isValidLatitude,
	isValidLongitude: isValidLongitude
}
