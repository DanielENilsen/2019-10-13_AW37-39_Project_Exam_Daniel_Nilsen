var apollo = 'https://images-api.nasa.gov/search?q=apollo%2011...';
var marsImage = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';
var astronomyImg = 'https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';
var earth = 'https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';
var peopleInSpace = 'http://api.open-notify.org/astros.json';
var spacexRockets = 'https://api.spacexdata.com/v3/rockets';


function hi () { 

    for(var i = 0; i < 1;i++) { 
       document.getElementById('searchme').innerHTML = "<div  id='myhello' class = 'hello'></div>";   
    } 

   function todayimage() {
         document.getElementById('myhello').innerHTML += "<div id='gen' class = 'mygrid'><h1>Astronomy Picture of the Day <h1/> </div>";
         document.getElementById('myhello').innerHTML += "<div id='mars' class = 'mars'><h1> Image on Mars <h1/> </div>"; 
         document.getElementById('myhello').innerHTML += "<div id='earth' class = 'earth'><h1> Image of Earth <h1/> </div>";  
         document.getElementById('myhello').innerHTML += "<div id='apollo' class = 'mygrid'><h1> 50 years since Apollo Landing </h1></div>";
         document.getElementById('myhello').innerHTML += "<div id='spacexRocket' class = 'mars'><h1> SpaceX's Rockets</h1></div>";
         document.getElementById('myhello').innerHTML += "<div id='plinspace' class = 'earth'><h1> People in space</h1></div>";

   
    }               

    todayimage();

    var mars = document.getElementById('mars');
    mars.addEventListener('click',function() {
      fetch(marsImage).then(result => result.json()).then((res) => {            
         nasaImageOne(res);
      }).catch(err => console.log(err));        

        function nasaImageOne(result) { 
          for(let i = 0 ;i < 1;i++) {
            document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Picture of Mars </h1><div class = 'line'></div></div>";

             for(let c = 0; c < 4;c++) {
                  document.getElementById('spxh1').innerHTML += "<div class = 'myFunc'><div class = 'mainDisplay'><article><header><h2> Name:  "+ result.photos[c].camera.full_name +"</h2><h3> Date: " +result.photos[i].earth_date + "</h3></header></div><img src='" + result.photos[c].img_src + "'width='80%'></div>";
              }                                                                                                    
            }       
        }
    });
   var astronomy = document.getElementById('gen');
    astronomy.addEventListener('click', function() {
      
      fetch(astronomyImg).then(test => test.json()).then((te) => {       
        astronomyToDay(te);    
        
       }).catch(err => console.log(err));

        function astronomyToDay(test) {  
          document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Picture of the Day </h1><div class = 'line'></div></div>";          
          document.getElementById('spxh1').innerHTML += "<div class = 'myFunc'><div class = 'mainDisplay'><article><header> <h2> "+ test.title +"</h2></header><p> "+ test.explanation + "</p></article></div><div class='gridcolum'><img src='" + test.url+ "'></div></div>";
        }
    });
    var getearth = document.getElementById('earth');
    getearth.addEventListener('click',function() { 

    fetch(earth).then(test => test.json()).then((te) => {            
      earthImg(te);     
      }).catch(err => console.log(err));

    function earthImg(test) {      
      document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Satellite picture </h1><div class = 'line'></div></div>";

        document.getElementById('spxh1').innerHTML += "<div class = 'myFunc'><div class = 'mainDisplay'><article><header> <h2> Satellite picture over Earth</h2><h3> Planet: " + test.resource.planet + "</h3><h3> Date: "+ test.date +"</h3></header></article></div><div class='gridcolum'><img src='" + test.url+ "'></div></div>";
  
    }        

  });  

  var apolloButton = document.getElementById('apollo');
  apolloButton.addEventListener('click', function() {
    
    fetch(apollo).then(collection => collection.json()).then((col) => {                 
      apolloEleven(col);  
          
    }).catch(err => console.log(err));

    function apolloEleven(collection) {                 
          document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Picture of Apollo 11 </h1><div class = 'line'></div></div>";
          document.getElementById('spxh1').innerHTML += "<div id='rocketMan' class = 'rocketMan'></div>";
          for(let c = 0 ; c < 10; c++) { 
              document.getElementById('rocketMan').innerHTML += "<div class ='rocketManTop'><p>" + collection.collection.items[c].data[0].description + "</p><img src = '" + collection.collection.items[c].links[0].href + "'></img></div>";
          }
      }
    });

  var getpeopleInSpace = document.getElementById('plinspace');
  getpeopleInSpace.addEventListener('click',function() { 

     
    fetch(peopleInSpace).then(astros => astros.json()).then((ast) => {                 
      peopleInSpaceNow(ast);          
    }).catch(err => console.log(err));
  function peopleInSpaceNow(astros) { 
      document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Astronaut in space</h1><div class = 'line'></div></div>";
      document.getElementById('spxh1').innerHTML += "<div id='rocketMan' class = 'rocketMan'></div>";
    for(var g = 0; g <astros.people.length;g++ ) { 
      document.getElementById('rocketMan').innerHTML += "<div class ='rocketManTop'><article><header> <h2>" + astros.people[g].name + "</h2></header><h4> Location:"+ astros.people[g].craft + "</h4></article><img src='js/dummyast.jpg'></div>";

     }    
   }
  });
  var elonRocket = document.getElementById('spacexRocket');
  elonRocket.addEventListener('click',function() {
    fetch(spacexRockets).then(rocket => rocket.json()).then((rkt) => {         
      rocketsImg(rkt);          
    }).catch(err => console.log(err));
        function rocketsImg(rocket) {
          
          document.getElementById('searchme').innerHTML = "<div id='spxh1'class = 'nameHeader'><h1> Spacex rockets</h1><div class = 'line'></div></div>";
          document.getElementById('spxh1').innerHTML += "<div id='rocketMan' class = 'rocketMan'></div>";
          
          for(var g = 0; g < rocket.length;g++) {
            document.getElementById('rocketMan').innerHTML += "<div class = 'rocketManTop'><article><header> <h2>"+rocket[g].rocket_name+ " </h2></header><h4> Description: </h4> <p>" + rocket[g].description + "</p></article><img src = '" + rocket[g].flickr_images[g] + "'width='50%'></div>";
          }
        } 
  });
}