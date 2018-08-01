// --the code below works and renders, but returns EVERYTHING 
// --now, trying to experiment with the Object method. Tried to do action=parse, which helped to grab the 'sections' to better target the items in the 'extract' object

$(document).ready(function () {

    $("#wikiButton").bind("click", function () {
        var date2 = $("#userInput").val();

        var searchTerm = moment(date2).format('MMMM D');
        console.log(searchTerm);

        
        var url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=" + searchTerm + "&format=json&callback=?";
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                console.log(url);
                console.log(data);
                console.log(data.query.pages);
                console.log(Object.values(data.query.pages)[0].extract);

                $('#displayWiki').html('');

                
                 Object.keys(data.query.pages).forEach(keys => {
                $('#displayWiki').html($('#displayWiki').html() + data.query.pages[keys].extract);
                
             });
// -----the above code works, and renders, but returns EVERYTHING----


                // for (var i = 0; i < data[1].length; i++) {
                //     $('#displayWiki').append("<li><p> " + data[2][i] + "</p></li>");
                // }
                $('#displayWiki').prepend("Provided by Wikipedia:");
                $('#displayWiki').addClass("display-area");
      
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });
    });
});