$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];
	var zipcodes = ['90001', '90002', '90042', '94847', '93847', '94485']



	$('button#makeAddress').click(function(){

		var streetRandom = (Math.floor(Math.random() * streets.length));
		var streetName = streets[streetRandom];

		var typeRandom = (Math.floor(Math.random() * types.length));
		var streetType = types[typeRandom];

		var citiesRandom = (Math.floor(Math.random() * cities.length));
		var city = cities[citiesRandom];

		var statesRandom = (Math.floor(Math.random() * states.length));
		var state = states[statesRandom];

		var houseNumRandom = Math.floor((Math.random() * 10) + 100);
		var houseNumber = houseNumRandom

		var zipcodeRandom = (Math.floor(Math.random() * zipcodes.length));
		var zipcode = zipcodes[zipcodeRandom];

		// Math.floor((Math.random() * 10) + 1); //will generate a random number between 1 - 10.

		$('address.destination').html( houseNumber + ' ' + streetName + ' ' + streetType + '<br/>' );
		$('address.destination').append( city + ', ' + state + ' ' + zipcode );

	});

});