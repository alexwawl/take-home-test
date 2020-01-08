let { getCustomersInArea } = require('./src/core/customerService.js');


/**
 * Entry Point to App.
 */
function run() {
	getCustomersInArea()
		.then(data => {
			data.forEach(elem => {
				console.log(JSON.stringify({
					user_id: elem.user_id,
					name: elem.name
				}))
			})
		})
}

run();