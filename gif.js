// functiond elements
var search = $("search")
var button = $("button")
// handle click and add class
$(document).ready(function() {
button.on("click", function(){
  var x = document.getElementById("search").value
  $("#search").hide()
  $("#icon").hide()
  button.hide()
  $.get({
  url: "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=gvXtdrXzNRducUeJnKFWP6I0UnRv8YN1&limit=25", 
  success: function(result){
  var data = result.data
  var out="";
  for(var index in data){
  var object = data[index]
  var url = object.images.original.url
  console.log(url)
  out += "<img width='200px' src='"+url+"'/>"
  }
  $("#con").html(out)
  console.log(result)
  },
  error: function(error){
  console.log(error)
  }
  })
})
})
