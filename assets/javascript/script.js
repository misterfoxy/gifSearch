$(document).ready(function() {

  var API_KEY= '57de50e67dea471ca5f751740f3ded8e';

  $('#search').click(function() {
    $('.results').empty();
    var searchTerm = $('#searchTerm').val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + API_KEY + "&limit=20";

    $.ajax({
      url:queryURL,
      method: "GET"
    }).done(function(response){


      for (var i = 0; i<response.data.length;i++){
        var imgSRC = response.data[i].images.fixed_height.url;
        var embeddedGif = $('<img>');
        embeddedGif.attr('src', imgSRC);
        embeddedGif.addClass('resultGif');
        $('.results').append(embeddedGif);
      }


    });



  });
});
