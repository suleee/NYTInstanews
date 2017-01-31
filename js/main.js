$(document).ready(function() {
 var list= '';
  $('select').on('change', function(event) {
    event.preventDefault()
    var userSelect = $('.topics').val()

    $.ajax({
      method:'GET',
      url:'http://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json?api-key=ea765f54b5984dd9a7ec3fd93101fdcc',
    }).done(function(data){
      console.log(data);
      $('.article-list').empty()
      if (data.results.length) {


        $.each(data.results, function (index, results) {
          console.log('Got result')

          if(results.multimedia.length){
              list += '<div class="article-list"><li><a href="' + results.url +'"  <p>' + results.abstract + '</p><img src="' + results.multimedia[4].url + '"/></li></div>'
          }
        })

        $('.topics')
        // console.log(index);
        // console.log(results);

        // $('.article-list').append('<div class="article-list"><li><a href="' + results.url +'"  <p>' + results.abstract + '</p><img src="' + results.multimedia[4].url + '"/></li></div>');
        //  })

          //get the abstract,
          //get the imageurl
          //only get news with images using if statement
      }
      else {
        $('.article-list').append('Sorry no articles on this subject today!')
        // handle no results
      }
    })

  })

})
