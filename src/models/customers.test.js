let { isValid, loadCustomersFromFile, getCustomers } = require('./customers.js');

describe('isValid Customer Function', () => {
	test('Valid Customer', () => {
		let customer = {
			user_id: 12,
			name: 'Alex',
			longitude: 0,
			latitude: 0
		}
		expect(isValid(customer)).toBeTruthy();
	});

	test('Empty Customer Name', () => {
		let customer = {
			user_id: 12,
			name: '',
			longitude: 0,
			latitude: 0
		}
		expect(isValid(customer)).toBeFalsy();
	});

	test('Without Customer Name', () => {
		let customer = {
			user_id: 12,
			longitude: 0,
			latitude: 0
		}
		expect(isValid(customer)).toBeFalsy();
	});

	test('Wrong Customer Longitude', () => {
		let customer = {
			user_id: 12,
			longitude: 'abc',
			latitude: 0
		}
		expect(isValid(customer)).toBeFalsy();
	});

	test('Without Customer Longitude', () => {
		let customer = {
			user_id: 12,
			latitude: 0
		}
		expect(isValid(customer)).toBeFalsy();
	});

	test('Wrong Customer Longitude', () => {
		let customer = {
			user_id: 12,
			longitude: 0,
			latitude: 'abc'
		}
		expect(isValid(customer)).toBeFalsy();
	});

	test('Without Customer Longitude', () => {
		let customer = {
			user_id: 12,
			longitude: 0
		}
		expect(isValid(customer)).toBeFalsy();
	});
});

describe('Load Customers from file and convert it to Objects', () => {
	test('Valid array of Customer objects', () => {
		let expectedOutput = [
			{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"},
			{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"},
			{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"},
			{"latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391"},
			{"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444"},
			{"latitude": "53.4692815", "user_id": 7, "name": "Frank Kehoe", "longitude": "-9.436036"},
			{"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"},
			{"latitude": "53.038056", "user_id": 26, "name": "Stephen McArdle", "longitude": "-7.653889"},
			{"latitude": "54.1225", "user_id": 27, "name": "Enid Gallagher", "longitude": "-8.143333"},
			{"latitude": "53.1229599", "user_id": 6, "name": "Theresa Enright", "longitude": "-6.2705202"},
			{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"},
			{"latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413"},
			{"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335"},
			{"latitude": "53.1302756", "user_id": 5, "name": "Nora Dempsey", "longitude": "-6.2397222"},
			{"latitude": "53.008769", "user_id": 11, "name": "Richard Finnegan", "longitude": "-6.1056711"},
			{"latitude": "53.1489345", "user_id": 31, "name": "Alan Behan", "longitude": "-6.8422408"},
			{"latitude": "53", "user_id": 13, "name": "Olive Ahearn", "longitude": "-7"},
			{"latitude": "51.999447", "user_id": 14, "name": "Helen Cahill", "longitude": "-9.742744"},
			{"latitude": "52.966", "user_id": 15, "name": "Michael Ahearn", "longitude": "-6.463"},
			{"latitude": "52.366037", "user_id": 16, "name": "Ian Larkin", "longitude": "-8.179118"},
			{"latitude": "54.180238", "user_id": 17, "name": "Patricia Cahill", "longitude": "-5.920898"},
			{"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"},
			{"latitude": "52.228056", "user_id": 18, "name": "Bob Larkin", "longitude": "-7.915833"},
			{"latitude": "54.133333", "user_id": 24, "name": "Rose Enright", "longitude": "-6.433333"},
			{"latitude": "55.033", "user_id": 19, "name": "Enid Cahill", "longitude": "-8.112"},
			{"latitude": "53.521111", "user_id": 20, "name": "Enid Enright", "longitude": "-9.831111"},
			{"latitude": "51.802", "user_id": 21, "name": "David Ahearn", "longitude": "-9.442"},
			{"latitude": "54.374208", "user_id": 22, "name": "Charlie McArdle", "longitude": "-8.371639"},
			{"latitude": "53.74452", "user_id": 29, "name": "Oliver Ahearn", "longitude": "-7.11167"},
			{"latitude": "53.761389", "user_id": 30, "name": "Nick Enright", "longitude": "-7.2875"},
			{"latitude": "54.080556", "user_id": 23, "name": "Eoin Gallagher", "longitude": "-6.361944"},
			{"latitude": "52.833502", "user_id": 25, "name": "David Behan", "longitude": "-8.522366"}
		]

		return expect(loadCustomersFromFile()).resolves.toEqual(expectedOutput);
	});
});

describe('Get Customers from file, calc distance field and convert it to Objects', () => {
	test('Valid array of Customer objects', () => {
		let expectedOutput = [
			{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701", "distanceToTarget": 41.76872550099624},
			{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699", "distanceToTarget": 313.2556337814253},
			{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951", "distanceToTarget": 324.37491200827054},
			{"latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391", "distanceToTarget": 188.95936393873097},
			{"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444", "distanceToTarget": 109.37645542987578},
			{"latitude": "53.4692815", "user_id": 7, "name": "Frank Kehoe", "longitude": "-9.436036", "distanceToTarget": 211.17205229630514},
			{"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671", "distanceToTarget": 83.53253116787984},
			{"latitude": "53.038056", "user_id": 26, "name": "Stephen McArdle", "longitude": "-7.653889", "distanceToTarget": 98.87459926462122},
			{"latitude": "54.1225", "user_id": 27, "name": "Enid Gallagher", "longitude": "-8.143333", "distanceToTarget": 151.54302371499176},
			{"latitude": "53.1229599", "user_id": 6, "name": "Theresa Enright", "longitude": "-6.2705202", "distanceToTarget": 24.085360019065416},
			{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927", "distanceToTarget": 133.26233253426057},
			{"latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413", "distanceToTarget": 131.31804418398536},
			{"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335", "distanceToTarget": 10.566936288936617},
			{"latitude": "53.1302756", "user_id": 5, "name": "Nora Dempsey", "longitude": "-6.2397222", "distanceToTarget": 23.28732066320704},
			{"latitude": "53.008769", "user_id": 11, "name": "Richard Finnegan", "longitude": "-6.1056711", "distanceToTarget": 38.13756809832957},
			{"latitude": "53.1489345", "user_id": 31, "name": "Alan Behan", "longitude": "-6.8422408", "distanceToTarget": 44.29082235527242},
			{"latitude": "53", "user_id": 13, "name": "Olive Ahearn", "longitude": "-7", "distanceToTarget": 62.23170226303157},
			{"latitude": "51.999447", "user_id": 14, "name": "Helen Cahill", "longitude": "-9.742744", "distanceToTarget": 278.2067221536678},
			{"latitude": "52.966", "user_id": 15, "name": "Michael Ahearn", "longitude": "-6.463", "distanceToTarget": 43.722487459407596},
			{"latitude": "52.366037", "user_id": 16, "name": "Ian Larkin", "longitude": "-8.179118", "distanceToTarget": 168.39718202063048},
			{"latitude": "54.180238", "user_id": 17, "name": "Patricia Cahill", "longitude": "-5.920898", "distanceToTarget": 96.07859923633586},
			{"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505", "distanceToTarget": 38.35801477488292},
			{"latitude": "52.228056", "user_id": 18, "name": "Bob Larkin", "longitude": "-7.915833", "distanceToTarget": 166.44809264266812},
			{"latitude": "54.133333", "user_id": 24, "name": "Rose Enright", "longitude": "-6.433333", "distanceToTarget": 89.03103382228753},
			{"latitude": "55.033", "user_id": 19, "name": "Enid Cahill", "longitude": "-8.112", "distanceToTarget": 223.63496516417757},
			{"latitude": "53.521111", "user_id": 20, "name": "Enid Enright", "longitude": "-9.831111", "distanceToTarget": 237.57601503988593},
			{"latitude": "51.802", "user_id": 21, "name": "David Ahearn", "longitude": "-9.442", "distanceToTarget": 274.79780021883954},
			{"latitude": "54.374208", "user_id": 22, "name": "Charlie McArdle", "longitude": "-8.371639", "distanceToTarget": 180.15527722864547},
			{"latitude": "53.74452", "user_id": 29, "name": "Oliver Ahearn", "longitude": "-7.11167", "distanceToTarget": 72.20178549711684},
			{"latitude": "53.761389", "user_id": 30, "name": "Nick Enright", "longitude": "-7.2875", "distanceToTarget": 82.64284999112864},
			{"latitude": "54.080556", "user_id": 23, "name": "Eoin Gallagher", "longitude": "-6.361944", "distanceToTarget": 82.69492611644121},
			{"latitude": "52.833502", "user_id": 25, "name": "David Behan", "longitude": "-8.522366", "distanceToTarget": 161.3620787070031}
		]

		return expect(getCustomers()).resolves.toEqual(expectedOutput);
	});
})