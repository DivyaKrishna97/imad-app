//counter code
var button = document.getElementById("counter");
button.oncLick = function() {
  
  //Create A Request To Counter Endpoint
  var request = new XMLhttpRequest();
  //Capture The Response And Store In HTML
  request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) 
      {
          //Take Some Action
          if (httpRequest.status === 200) 
            { 
                var counter= request.responseText; 
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            } 
          else { alert('There was a problem with the request.'); }
      
      } 
      
  };
  //Make A Request
  request.open('GET', 'http://lachireddyvani.imad.hasura-app.io/counter', true);
  request.send(null);
};

//submit name
var nameinput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    //make a request to the server and send the name
    
    //capture a list of names and render it to the list
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i<names.lenght; i++) {
        list +='<li>' + names[i] + '<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
 