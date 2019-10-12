function getQueryStringValue (key) {
  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
var flightNumber = getQueryStringValue("flight_number");

fetch('https://api.spacexdata.com/v3/launches/'+flightNumber).then(test => test.json()).then((te) => {
    spacexWorl(te);
   

}).catch(err => console.log(err));

function spacexWorl(test) { 
     for(var i = 0;i < 1; i++ ) {
        document.getElementById('theHeader').innerHTML += "<h1>Rocket Lanch</h1>";       
        if(test.links.mission_patch_small === null) {               
            document.getElementById('theSpaceInfo').innerHTML += "<img src='js/dummyast.jpg'></img>";          
         
        }else if(test.links.mission_patch_small !== null) {
            document.getElementById('theSpaceInfo').innerHTML += "<img src='" +test.links.mission_patch_small + "'>";
        }       
        if (test.launch_year === null) {   
                 document.getElementById('theSpaceInfo-2').innerHTML += "<h1>Year: Not provided yet  </h1>";
      
        }else if (test.launch_year !== null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Year: " + test.launch_year + "</h1>";

        }
        if(test.launch_date_local === null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Time: Not provided yet </h1>";
            
        }else if (test.launch_date_local !== null) {
            document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Date: " + test.launch_date_local + "</h1>";

        }
        if(test.rocket.rocket_name === null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Rocket: Not provided yet </h1>"; 
            
        }
        if(test.details === null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<p> Details: Not provided yet</p>"; 
            
        }else if (test.details !== null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<p> Details: " + test.details + "</p>"; 
        
        }
        if(test.links.article_link === null) {
            document.getElementById('theSpaceInfo-2').innerHTML += "<a>Artical: There are no article yet </a>";
            
        }else if (test.links.article_link !== null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<a href='"+ test.links.article_link +"'> Artical</a>";
        }
        if(test.links.video_link === null) { 
            document.getElementById('theSpaceInfo-2').innerHTML += "<a>Youtube clip: There are no YouTube clip yet </a>";

        }else if (test.links.video_link !== null) {
            document.getElementById('theSpaceInfo-2').innerHTML += "<a href='"+ test.links.video_link +"'> Youtube clip </a>";
        } else {         
        document.getElementById('theHeader').innerHTML += "<h1>Rocket Lanch</h1>";
        document.getElementById('theSpaceInfo').innerHTML += "<img src='" +test.links.mission_patch_small + "'>";
        document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Year: " + test.launch_year + "</h1>";
        document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Date: " + test.launch_date_local + "</h1>";
        document.getElementById('theSpaceInfo-2').innerHTML += "<h1> Rocket: " + test.rocket.rocket_name + "</h1>"; 
        document.getElementById('theSpaceInfo-2').innerHTML += "<p> Details: " + test.details + "</p>"; 
        document.getElementById('theSpaceInfo-2').innerHTML += "<a href='"+ test.links.article_link +"'> Artical</a>";
        document.getElementById('theSpaceInfo-2').innerHTML += "<a href='"+ test.links.video_link +"'> Youtube clip </a>";
        }
      }
   }




