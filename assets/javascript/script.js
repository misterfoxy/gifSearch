$(document).ready(function() {

  var API_KEY= '57de50e67dea471ca5f751740f3ded8e';
  var animateURL;
  var imgSRC;
  var stillURL;
  var dataState;

  $('#search').click(function() {
    $('.results').empty();
    var searchTerm = $('#searchTerm').val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + API_KEY + "&limit=20";

    $.ajax({
      url:queryURL,
      method: "GET"
    }).done(function(response){
console.log(response);

      for (var i = 0; i<response.data.length;i++){
        dataState = "still";
        imgSRC = response.data[i].images.fixed_height_still.url;
        stillURL = response.data[i].images.fixed_height_still.url;
        animateURL = response.data[i].images.fixed_height.url;
        var embeddedGif = $('<img>');
        embeddedGif.attr('src', imgSRC);
        embeddedGif.attr('data-animate', animateURL);
        embeddedGif.attr('data-still', stillURL);
        embeddedGif.attr('data-state', dataState);
        embeddedGif.addClass('resultGif');

        $('.results').append(embeddedGif);
      }


      $('.resultGif').on("click", function(){

        var state = $(this).attr('data-state');
        if (state === 'still'){
          $(this).attr('src', $(this).attr("data-animate"));
          $(this).attr('data-state', "animate");
        }

        else {
          $(this).attr('src', $(this).attr('data-still'));
          $(this).attr('data-state', 'still');
        }


      });


    });



  });
});
