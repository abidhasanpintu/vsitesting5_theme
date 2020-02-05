(function( $ ) {
	var requests = {};
	var zipValid = {
        us: /[0-9]{5}(-[0-9]{4})?/,
		ca: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
	};

	$.ziptastic = function(country, zip, callback){
		// If only zip and callback are given default to US
		if (arguments.length == 2 && typeof arguments[1] == 'function') {
			callback = arguments[1];
			zip = arguments[0];
			country = 'US';
		}

		country = country.toUpperCase();
		// Only make unique requests
		if(!requests[country]) {
			requests[country] = {};
		}
		if(!requests[country][zip]) {            
			requests[country][zip] = $.getJSON('/checkout/onepage/zip/?country=' + country + '&zip=' + zip);
		}

		// Bind to the finished request
		requests[country][zip].done(function(data) {
			if (typeof callback == 'function') {
				callback(data.country, data.state, data.state_short, data.city, zip);
			}
		});

		// Allow for binding to the deferred object
		return requests[country][zip];
	};

	$.fn.ziptastic = function( options ) {
		return this.each(function() {
			var ele = $(this);

			ele.on('keyup', function() {
				var zip = ele.val();

				// US
				if(zipValid.us.test(zip)) {
					$.ziptastic(zip, function(country, state, state_short, city) {
						// Trigger the updated information
						ele.trigger('zipChange', [country, state, state_short, city, zip]);
					});
				} 
                //Canada
                else if ( zipValid.ca.test(zip) ) {
                    $.ziptastic('ca', zip, function(country, state, state_short, city) {
                        // Trigger the updated information
                        ele.trigger('zipChange', [country, state, state_short, city, zip]);
                    });                    
                }
			});
		});
	};
})( jQuery );