//We make an ajax request to get the data.
function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (quoteData) {

            if (quoteData.quoteAuthor === '') {
                quoteData.quoteAuthor = 'Unknown';
            };

            //fade out animation with callback
            let quoteContainer = $('#randomQuote')
            let timeAnimation = 300;
            quoteContainer.fadeOut(timeAnimation, function () {
                //Now, we need to grab the div with randomQuote ID and insert the quoteText value inside it.
                quoteContainer.html("<p id='randomQuote'><i class=\"fa fa-quote-left\"></i>    " + quoteData.quoteText + "<br/> <div class=\"text-right\"> ‐" + quoteData.quoteAuthor + "</div></p>");
                //fadein animation.
                quoteContainer.fadeIn(timeAnimation);
            });

            //Also add some attribute to Tweet Me button.
            $("#tweetMe").attr("href", "https://instagram.com/home/?status=" + quoteData.quoteText + ' - ' + quoteData.quoteAuthor);
        }
    });
}

// function to generate random colors.
// function randomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

//To function calls.
$(function () {
    randomQuote();
    // randomColor();
});

// Whenever the user clicks on the New Quote button, it should change the background and also call the randomQuote() function. 
$("#newQuote").click(function () {
    // $('body').css({
    //     'background': randomColor(),
    //     'transition': 'all linear 0.2s'
    // });
    randomQuote();
});