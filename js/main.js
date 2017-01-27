var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "ea765f54b5984dd9a7ec3fd93101fdcc"
});

$(function() {
  $('form').on('option', function() {
     event.preventDefault(); // stops page refresh
     $('.album-list').empty(); // clears list if searching again
      $.ajax({
     method: 'GET',
     url: 'https://api.nytimes.com/svc/topstories/v2/home.json'+input,
     dataType: 'jsonp'
       })
     .done(function(data) {
        console.log(data)
        if (data.resultCount !== 0) {
          $.each(data.results, function (index, value) {
          $('.album-list').append('<div class="results_wrap"><h1 class="h1result">'+value.collectionName+'</h1><img src='+value.artworkUrl100+'/></div>');
           })
        }
        else {
          $('.album-list').append('<h1 class="h1result">Couldnt find anything, Yo</h1>');
        }
      })
     .fail(function() {
        alert('FAIL!');
      })
     .always(function(){
      $('.h1loading').hide();
     })
 });

 });
