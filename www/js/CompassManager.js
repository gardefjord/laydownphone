var CompassManager = function() {
	var watchID = null;
	var heading = 0;

	var start = function(interval) {

		watchID = navigator.compass.watchHeading(function(heading) {

			heading = Math.round(heading.magneticHeading);

		}, function(error) {
			alert("Compass error: " + error.code);
		}, {
			frequency: interval
		});

	}

	var stop = function() {

		if (watchID) {
			navigator.compass.clearWatch(watchID);
			watchID = null;
		}
	}

	var getHeading = function() {
		return heading;
	}


	return {
		getHeading: getHeading,
		start: start,
		stop: stop
	}
}