let fs = require('fs');

/**
 * Read Text Data From File
 * and return it as array separated by line
 *
 * @param {string} filePath
 * @return {Object}
 */
function readDataFromFile(filePath){
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, (err, data) => {
    	if(err) return reject(err);
		let array = data.toString().split("\n");
		return resolve(array)
    })
  );
}

module.exports = {
	readDataFromFile: readDataFromFile
}