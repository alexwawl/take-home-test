# Take Home Task

### Problem

We have some customer records in a text file (customers.txt) -- one customer per line, JSON lines formatted. We want to invite any customer within 100km of our Dublin office for some food and drinks on us. Write a program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).

* You must use the first formula from this [Wikipedia](https://en.wikipedia.org/wiki/Great-circle_distance) article to calculate distance. Don't forget, you'll need to convert degrees to radians.

* The GPS coordinates for our Dublin office are 53.339428, -6.257664.

* You can find the Customer list [here](https://s3.amazonaws.com/intercom-take-home-test/customers.txt).

We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program. Good submissions are well composed. Calculating distances and reading from a file are separate concerns. Classes or functions have clearly defined responsibilities.  Poor submissions will be in the form of one big function. It’s impossible to test anything smaller than the entire operation of the program, including reading from the input file.

### Requirements

Node >= v10 
Jest >= v24

### Config
  
* TARGET_LOCATION_LATITUDE - target latitude, Dublin Office by default
* TARGET_LOCATION_LONGITUDE - target longitude, Dublin Office by default
* PATH_TO_CUSTOMERS_FILE" - path to file with customers records
  
## Installation

- Clone this repository
- Go to the repository folder
- Install dependacies by running `npm install`


### Available Scripts

In the project directory, you can run:

#### `npm start`

Run the app, output results to console

#### `npm test`

Launches the test runner - Jest.

#### `npm test -- --coverage`

Launches the test runner with information about code coverage


### Output

In `output.txt` you can find the result of the app running with given customers list.


### Docker

You can run this app in docker container.

#### `docker build -t <image_name> .`

Run this command to create image.

#### `docker run <image_name>`

Run the app inside docker container
