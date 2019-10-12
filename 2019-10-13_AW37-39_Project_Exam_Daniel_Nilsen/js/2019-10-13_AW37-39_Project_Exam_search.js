var findThelaunch = document.getElementById('findThelaunch');
findThelaunch.addEventListener('click',function () {	
	var myUrl = 'https://api.spacexdata.com/v3/launches'

   fetch(myUrl).then(test => test.json()).then((te) => {
      hello(te);
      search(te);
   
    }).catch(err => console.log(err));
 

  function hello(test) {	 
     var getmeaNumber = "<div id='myid'class = 'seatchhid'> <input type = 'text' id= 'searchName' name ='search'placeholder='Search by year'><button id = 'theSearchButton'>Search</button><div id='divi'class = 'divlanch'></div></div>";
     document.getElementById('searchme').innerHTML = getmeaNumber; 
 
    for(let x = 0; x < 1 ;x++) {
    	document.getElementById('divi').innerHTML ="<div id='spacex' class = 'spacexgrid'></div>";
      for(let i = 0 ; i <test.length ; i++ )  {
            if(test[i].links.mission_patch_small === null) {
               document.getElementById('spacex').innerHTML += "<div class = 'spaceXlanch'><h1>"+ test[i].launch_year + "</h1><h2>" + test[i].rocket.rocket_name + "</h2><img src='js/dummyast.jpg'><a href='2019-10-13_AW37-39_Project_Exam_spacexinfo_Daniel_Nilsen.html?flight_number="+ test[i].flight_number + "'class = 'btn'>View more</a></div>";

            } else {
               document.getElementById('spacex').innerHTML += "<div class = 'spaceXlanch'><h1>"+ test[i].launch_year + "</h1><h2>" + test[i].rocket.rocket_name + "</h2><img src='" +test[i].links.mission_patch_small + "'><a href='2019-10-13_AW37-39_Project_Exam_spacexinfo_Daniel_Nilsen.html?flight_number="+ test[i].flight_number + "'class = 'btn'>View more</a></div>";
            }
         } 
      }   
   }
});


function search(test) { 
   var searchButton = document.getElementById('theSearchButton');
   searchButton.addEventListener('click',function() { 
      document.getElementById('divi').innerHTML = ""; 
      var getmeAYear = test;
      var theSearchName = document.getElementById('searchName').value;      

      function rocketYear(getmeAYear) { 
         return theSearchName === getmeAYear.launch_year;
      }

      function filterTheCards() {
         var filterTheCards = getmeAYear.filter(rocketYear);

         for(let x = 0; x < 1 ;x++) {
            document.getElementById('divi').innerHTML ="<div id='spacex' class = 'spacexgrid'></div>";
        
         for(let i = 0 ; i <filterTheCards.length; i++ )  {
                document.getElementById('spacex').innerHTML += "<div class = 'spaceXlanch'><h1>"+ filterTheCards[i].launch_year + "</h1><h2>" + filterTheCards[i].rocket.rocket_name + "</h2><img src='" +filterTheCards[i].links.mission_patch_small + "'><a href='spacexinfo.html?flight_number="+ filterTheCards[i].flight_number + "'class = 'btn'>View more</a></div>";
     
               }   
           }         
               
      }
      filterTheCards();     
   });  
}









