let {getCustomersInArea, filterByRange, sortByUserIdDesc , sortByUserIdAsc} = require('./customerService.js');

describe('Filter By Range', () => {
	test('Filter with default range', () => {
		let input = [
			{ 
				user_id: 1,
				distanceToTarget: 10
			},
			{ 
				user_id: 2,
				distanceToTarget: 20
			},
			{ 
				user_id: 3,
				distanceToTarget: 120
			},
		]
		let expectedOutput = [
			{ 
				user_id: 1,
				distanceToTarget: 10
			},
			{ 
				user_id: 2,
				distanceToTarget: 20
			}
		]

		expect(filterByRange(input)).toEqual(expectedOutput)
	});

	test('Filter with custom range', () => {
		let input = [
			{ 
				user_id: 1,
				distanceToTarget: 10
			},
			{ 
				user_id: 2,
				distanceToTarget: 20
			},
			{ 
				user_id: 3,
				distanceToTarget: 120
			},
		]
		let expectedOutput = [
			{ 
				user_id: 1,
				distanceToTarget: 10
			}
		]

		expect(filterByRange(input, 10)).toEqual(expectedOutput)
	});
})

describe('Get Customers within range', () => {
	test('with default range and order', () => {
		let expectedOutput = [
			{ latitude: '53.2451022', user_id: 4, name: 'Ian Kehoe', longitude: '-6.238335', distanceToTarget: 10.566936288936617 },
			{ latitude: '53.1302756',user_id: 5, name: 'Nora Dempsey', longitude: '-6.2397222', distanceToTarget: 23.28732066320704 },
			{ latitude: '53.1229599', user_id: 6, name: 'Theresa Enright', longitude: '-6.2705202', distanceToTarget: 24.085360019065416 },
			{ latitude: '54.0894797', user_id: 8, name: 'Eoin Ahearn', longitude: '-6.18671', distanceToTarget: 83.53253116787984 },
			{ latitude: '53.008769', user_id: 11, name: 'Richard Finnegan', longitude: '-6.1056711', distanceToTarget: 38.13756809832957 },
			{ latitude: '52.986375', user_id: 12, name: 'Christina McArdle', longitude: '-6.043701', distanceToTarget: 41.76872550099624 },
			{ latitude: '53', user_id: 13, name: 'Olive Ahearn', longitude: '-7', distanceToTarget: 62.23170226303157 },
			{ latitude: '52.966', user_id: 15, name: 'Michael Ahearn', longitude: '-6.463', distanceToTarget: 43.722487459407596 },
			{ latitude: '54.180238', user_id: 17, name: 'Patricia Cahill', longitude: '-5.920898', distanceToTarget: 96.07859923633586 },
			{ latitude: '54.080556', user_id: 23, name: 'Eoin Gallagher', longitude: '-6.361944', distanceToTarget: 82.69492611644121 },
			{ latitude: '54.133333', user_id: 24, name: 'Rose Enright', longitude: '-6.433333', distanceToTarget: 89.03103382228753 },
			{ latitude: '53.038056', user_id: 26, name: 'Stephen McArdle', longitude: '-7.653889', distanceToTarget: 98.87459926462122 },
			{ latitude: '53.74452', user_id: 29, name: 'Oliver Ahearn', longitude: '-7.11167', distanceToTarget: 72.20178549711684 },
			{ latitude: '53.761389', user_id: 30, name: 'Nick Enright', longitude: '-7.2875', distanceToTarget: 82.64284999112864 },
			{ latitude: '53.1489345', user_id: 31, name: 'Alan Behan', longitude: '-6.8422408', distanceToTarget: 44.29082235527242 },
			{ latitude: '53.0033946', user_id: 39, name: 'Lisa Ahearn', longitude: '-6.3877505', distanceToTarget: 38.35801477488292 }
		]

		expect(getCustomersInArea()).resolves.toEqual(expectedOutput)
	});

	test('with custom range and desc order', () => {
		let expectedOutput = [
			{ latitude: '53.2451022', user_id: 4, name: 'Ian Kehoe', longitude: '-6.238335', distanceToTarget: 10.566936288936617 },
			{ latitude: '53.1302756',user_id: 5, name: 'Nora Dempsey', longitude: '-6.2397222', distanceToTarget: 23.28732066320704 },
			{ latitude: '53.1229599', user_id: 6, name: 'Theresa Enright', longitude: '-6.2705202', distanceToTarget: 24.085360019065416 },
			{ latitude: '53.008769', user_id: 11, name: 'Richard Finnegan', longitude: '-6.1056711', distanceToTarget: 38.13756809832957 },
			{ latitude: '52.986375', user_id: 12, name: 'Christina McArdle', longitude: '-6.043701', distanceToTarget: 41.76872550099624 },
			{ latitude: '52.966', user_id: 15, name: 'Michael Ahearn', longitude: '-6.463', distanceToTarget: 43.722487459407596 },
			{ latitude: '53.1489345', user_id: 31, name: 'Alan Behan', longitude: '-6.8422408', distanceToTarget: 44.29082235527242 },
			{ latitude: '53.0033946', user_id: 39, name: 'Lisa Ahearn', longitude: '-6.3877505', distanceToTarget: 38.35801477488292 }
		]
		expectedOutput.reverse()
		expect(getCustomersInArea(50, 'desc')).resolves.toEqual(expectedOutput)
	});
})

describe('Order Comparator Functions', () => {
	test('Ascending order', () => {
		let aElem = {
			user_id: 1
		}
		let bElem = {
			user_id: 2
		}
		expect(sortByUserIdAsc(aElem, bElem)).toBeLessThanOrEqual(0);
	});

	test('Descending Order', () => {
		let aElem = {
			user_id: 1
		}
		let bElem = {
			user_id: 2
		}
		expect(sortByUserIdDesc(aElem, bElem)).toBeGreaterThanOrEqual(0);
	});
})