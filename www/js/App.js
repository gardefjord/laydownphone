var App = function() {
    var compass = new CompassManager();

    var init = function() {
       document.addEventListener('deviceready', onDeviceReady, false);
       console.log("Init")
    }

    var onDeviceReady = function()
    {
        compass.start(2000);
        console.log(compass.getHeading());
        console.log("READY")
    }

return {
    init: init
    }
}