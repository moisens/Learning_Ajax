document.getElementById('button').addEventListener('click', loadText);

function loadText(){
   //Create XHR Object
   let xhr = new XMLHttpRequest();
   //Open - type, url/file, async
   xhr.open('GET', 'sample.txt', true);
   console.log('READYSTATE:', xhr.readyState);

   //Optional - used for loader
   xhr.onprogress = function(){
      console.log('READYSTATE:', xhr.readyState);
   }


   xhr.onload = function(){
      console.log('READYSTATE:', xhr.readyState);
      if(this.status == 200){
         //console.log(this.responseText);
         document.getElementById('text').innerHTML = this.responseText;
      }else if(this.status == 404){
         document.getElementById('text').innerHTML = 'Not Found';
      }
   }

   xhr.onerror = function(){
      console.log('Request Error')
   }

   //The old fashion way
   //xhr.onreadystatechange = function(){
   //   console.log('READYSTATE:', xhr.readyState);
   //   if(this.readyState == 4 && this.status == 200){
   //      //console.log(this.responseText);
   //   }
   //}


   //sends request
   xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbiden"
// 404: "Not Found"