// functiond elements
var search = $("search")
var button = $("button")
// handle click and add class
$(document).ready(function() {
  var input=document.getElementById("search");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      submitFunction();
     /* button.click();*/
   }
 })

     function submitFunction(){
     var x = document.getElementById("search").value
    $("#search").hide()
    $("#icon").hide()
/*    button.hide()
*/    $.get({
      url: "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=gvXtdrXzNRducUeJnKFWP6I0UnRv8YN1&limit=27", 
      success: function(result){
        var data = result.data
        var out="";
        for(var index in data){
          var object = data[index]
          var url = object.images.original.url
          console.log(url)
          out += "<img width='200px' src='"+url+"'/>"
        }
        $(".grid-container").html(out)
        console.log(result)
      },
      error: function(error){
        console.log(error)
      }
    })
/*  })
*/    }

  });
/*  button.on("click", function(){
*/    
/*})
*/