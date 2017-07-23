function play() {
    function update() {
        if (carDistance >= trackLength) {
            clearInterval(gameLoopId);
            alert('END');
            return;
        }

        var dTime = 0.010;
        if (gasPressed === true) {
            carSpeed = carSpeed + acceleration * dTime;
        } else {
            carSpeed = Math.max(0, carSpeed + carSpeed * deceleration * dTime);
        }

        carDistance = carDistance + carSpeed * dTime;
        $car.css('margin-left', carDistance);
    }

    var $car = $('<div>').addClass('car');
    var $track = $('<div>').addClass('track');
    var $game = $('#game');

    var trackLength;
    var carSpeed = 0;
    var carDistance = 0;
    var gasPressed = false;
    var acceleration = 200;
    var deceleration = -1;
    var gameLoopId;

    $track.append($car);
    $game.append($track);

    trackLength = $track.width();

    gameLoopId = setInterval(update, 10);

    $(window).on('keydown', function (event) {
        console.log('keydown');
        if (event.keyCode === 32) {
            // spacebar pressed
            gasPressed = true;
        }
    }).on('keyup', function (event) {
        if (event.keyCode === 32) {
            gasPressed = false;
        }
    })
}