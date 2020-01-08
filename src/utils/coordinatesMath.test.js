let { 	calculateDistanceToTarget, 
    		degreesToRadians, 
    		isValidLatitude, 
    		isValidLongitude } = require('./coordinatesMath.js');


describe("isValidLatitude Function", () => {

  test("Latitude: 77.123, it should return true, Latitude value shoule be between +/- 90", () => {
    	expect(isValidLatitude(77.123)).toBeTruthy();
  });

  test("Latitude: 100, it should return false, because Latitude value shoule be <= 90", () => {
    	expect(isValidLatitude(100)).toBeFalsy();
  });

  test("Latitude: -100, it should return false, because Latitude value shoule be >= -90", () => {
    	expect(isValidLatitude(-100)).toBeFalsy();
  });

  test("Edge Case: Latitude: 90, Latitude value shoule be between +/- 90", () => {
    	expect(isValidLatitude(90)).toBeTruthy();
  });

  test("Edge Case: Latitude: -90, Latitude value shoule be between +/- 90", () => {
    	expect(isValidLatitude(-90)).toBeTruthy();
  });

});

describe("isValidLongitude Function", () => {

  test("Latitude: 177.123, it should return true, Latitude value shoule be between +/- 180", () => {
    	expect(isValidLongitude(177.123)).toBeTruthy();
  });

  test("Latitude: 100, it should return false, because Latitude value shoule be <= 180", () => {
    	expect(isValidLongitude(200)).toBeFalsy();
  });

  test("Latitude: -100, it should return false, because Latitude value shoule be >= -180", () => {
    	expect(isValidLongitude(-200)).toBeFalsy();
  });

  test("Edge Case: Latitude: 90, Latitude value shoule be between +/- 180", () => {
    	expect(isValidLongitude(180)).toBeTruthy();
  });

  test("Edge Case: Latitude: -90, Latitude value shoule be between +/- 180", () => {
    	expect(isValidLongitude(-180)).toBeTruthy();
  });

});

describe("degreesToRadians Function", () => {

	test("Degree: 100, should be 1.74533", () => {
		expect(Math.round(degreesToRadians(100) * 100000 )/ 100000).toBe(1.74533)
	});

	test("Degree: 460, should be 8.02851", () => {
		expect(Math.round(degreesToRadians(460) * 100000 )/ 100000).toBe(8.02851)
	});

	test("Degree: -60, should be -1.0472", () => {
		expect(Math.round(degreesToRadians(-60) * 100000 )/ 100000).toBe(-1.0472)
	});

});

describe("calculateDistanceToTarget Function", () => {

	test("Check Distance using default parameters", () => {
		expect(Math.round(calculateDistanceToTarget(50, -6) * 10 )/ 10).toBe(371.8)
	});

	test("Check Distance using custom target", () => {
		expect(Math.round(calculateDistanceToTarget(50, -6, 53.339428, -6.257664) * 10 )/ 10).toBe(371.8)
	});

	test("Check Distance using the same target", () => {
		expect(calculateDistanceToTarget(50, -6, 50, -6)).toBe(0)
	});

});