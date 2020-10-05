var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var timerButton = document.querySelector('.timerButton');

var userHour = parseInt(prompt("Change Hour!"));
if ( userHour > 100 ) {
    userHour = 100;
}
if ( userHour < 10 ) {
    userHour = '0' + userHour;
}

var userMinute = parseInt(prompt("Change Minute!"));
if ( userMinute > 60 ) {
    userMinute = 60;
}
if ( userMinute < 10 ) {
    userMinute = '0' + userMinute;
}

var userSecond = parseInt(prompt("Change Second!"));
if ( userSecond > 60 ) {
    userSecond = 60;
}
if ( userSecond < 10 ) {
    userSecond = '0' + userSecond;
}

hour.innerHTML = userHour;
minute.innerHTML = userMinute;
second.innerHTML = userSecond;

timerButton.addEventListener('click', function() {
    var int = setInterval(function() {
        userSecond--;
        if ( userSecond < 10 ) {
            userSecond = '0' + userSecond;
        }
        
        if ( userSecond <= 0 ) {
            userSecond = 5;
            userMinute--;
            if ( userMinute < 10 ) {
                userMinute = '0' + userMinute;
            }

            if ( userMinute <= 0 ) {
                userMinute = 5;
                userHour--;
                if ( userHour < 10 ) {
                    userHour = '0' + userHour;
                }

                if ( userHour <= 0 ) {
                    clearInterval(int);
                }
                hour.innerHTML = userHour;
            }
            minute.innerHTML = userMinute;
        }
        second.innerHTML = userSecond;
        
        
    }, 100);
});