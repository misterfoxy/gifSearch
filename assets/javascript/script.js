$(document).ready(function() {

  var API_KEY= '57de50e67dea471ca5f751740f3ded8e';

  $('#search').click(function() {
    var searchTerm = $('#searchTerm').val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + API_KEY + "&limit=5";

    $.ajax({
      url:queryURL,
      method: "GET"
    }).done(function(response){
      console.log(response);
    });



  });
});
