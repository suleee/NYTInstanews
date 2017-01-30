$(document).ready(function() {

  $('select').on('change', function(event) {
    event.preventDefault()
    var userSelect = $('.topics').val()

    $.ajax({
      method:'GET',
      url:'http://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json?api-key=ea765f54b5984dd9a7ec3fd93101fdcc',
    }).done(function(data){
      console.log(data);
      if (data.results.length, function) (index, value) {
          $('.articles-list').empty()
          //get the abstract,
          //get the imageurl
          //only get news with images using if statement
      }
      else {
        // handle no results
      }
    })

  })

})
