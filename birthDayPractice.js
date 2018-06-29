$(document).ready(function () {

    // This code will return the day of the week that corresponds to a birthdate

// $(document).on("click", "#submitButton", 

    $("#submitButton").bind("click", function () {
        var date = $("#userInput").val();
        var dateToString = date.toString();
        dateToString = dateToString.replace(/-/g, ',');
        console.log(dateToString);
        
        // var date = "YYYY,MM,DD";
        var birthday = new Date(dateToString);
        var dayOfWeek = birthday.getDay();
        var message = "You were born on a ";

        function getTheDay() {
            if (dayOfWeek === 0) {
                return message + "Sunday";
            } else if (dayOfWeek === 1) {
                return message + "Monday";
            } else if (dayOfWeek === 2) {
                return message + "Tuesday";
            } else if (dayOfWeek === 3) {
                return message + "Wednesday";
            } else if (dayOfWeek === 4) {
                return message + "Thursday";
            } else if (dayOfWeek === 5) {
                return message + "Friday";
            } else if (dayOfWeek === 6) {
                return message + "Saturday";
            }

        };

        var result = getTheDay();
        $("#displayDay").text(result).addClass('animated bounceInDown');
        console.log(getTheDay());
    });

});


// ... the date passed into new Date() needs to be in quotations and separated by commas. dashes (-)  or slashes (/) will not work.