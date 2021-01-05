var search = "thunderstruck";
var queryURL = `https://itunes.apple.com/search?term=${search}&country=CA&media=music&entity=musicTrack&limit=1`
$.ajax({
    url: queryURL,
    method: "GET", 
    headers:{ 'Access-Control-Allow-Origin': '*'}
}).done(function(data){
    //parse data into JSON format 
    var trackData = JSON.parse(data);
    //grab data we want
    var trackName = trackData.results[0].trackName;
    console.log(trackName);
});