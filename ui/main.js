//counter code

var button = document.getElementById('conter');


button.onclick = function() {
    
   function exec(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://lachireddyvani.imad.hasura-app.io/", true);
    request.send(); 
    console.log('EXECUTED');
}
};