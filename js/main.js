$(document).ready(function() {


  $('select').on('change', function(event) {
    event.preventDefault()
    var list= '';
    var userSelect = $('.topics').val();
    $('.article-list').empty();


    $.ajax({
      method:'GET',
      url:'http://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json?api-key=ea765f54b5984dd9a7ec3fd93101fdcc',
    }).done(function(data){

        if (data.results.length ) {

          $.each(data.results, function (index, results) {
            var articleUrl = results.url;
            var abstract = results.abstract;

            if(results.multimedia.length > 0){
              var articleImage = results.multimedia[4].url;


                list += '<li>';
                list +=       '<a href=';
                list +=             articleUrl;
                list +=         ' target="_blank">';
                list +=             '<div class="img-wrap">';
                list +=               '<img src="';
                list +=               articleImage;
                list +=               '" alt="image"/>';
                list +=             '</div>';
                list +=             '<div class="text-wrap">';
                list +=               '<p>';
                list +=               abstract;
                list +=               '</p>';
                list +=             '</div>';
                list +=       '</a>';
                list +=  '</li>';

            }
          })
          $('.article-list').append(list);

      } else {
        $('.articles').append("<h1>There are no articles for this topic sorry!</h1>")
      }

    })

  })

})
