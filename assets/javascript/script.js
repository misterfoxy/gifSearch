var API_KEY= '57de50e67dea471ca5f751740f3ded8e';
var animateURL;
var imgSRC;
var stillURL;
var dataState;

var topics = ['kenny powers', 'spongebob', 'puppy', 'volleyball', 'regular show', 'law and order', 'seinfeld', 'tom cruise cocktail',
'rick sanchez', 'marty mcfly', 'dachshund'];

function renderButtons(){
  $('#button-row').empty();
  for(var i=0; i< topics.length; i++){
    var searchButton = $('<button>');
    searchButton.addClass('topic');
    searchButton.attr('data-name', topics[i]);
    searchButton.text(topics[i]);
    $('#button-row').append(searchButton);
  }
}

$(document).ready(function() {

  

  renderButtons();

  $('#addTopic').on("click", function(e){
    e.preventDefault();

    var newTopic = $('#searchTerm').val().trim();
    topics.push(newTopic);
    renderButtons();
  });



  function loadGifs() {

    $('.results').empty();
    var searchTerm = $(this).attr('data-name');
    console.log(searchTerm);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + API_KEY + "&limit=20";

    $.ajax({
      url:queryURL,
      method: "GET"
    }).done(function(response){

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



  }

  $(document).on("click", ".topic", loadGifs);
});
