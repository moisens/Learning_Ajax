document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);


function loadUser(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'user.json', true);
   xhr.onload = function(){
      if(this.status == 200){
         let user = JSON.parse(this.responseText);
         let output = '';
         output += `
            <ul>
               <li>Id: ${user.id}</li>
               <li>Name: ${user.name}</li>
               <li>Email: ${user.email}</li>
            </ul>
         `;
         document.getElementById('user').innerHTML = output;
      }
   }
   
   xhr.send();
}


function loadUsers(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'users.json', true);
   xhr.onload = function(){
      if(this.status == 200){
         let users = JSON.parse(this.responseText);
         let outputUsers = '';
         users.forEach((oneUser) =>{
            outputUsers += `
               <ul>
                  <li>Id: ${oneUser.id}</li>
                  <li>Name: ${oneUser.name}</li>
                  <li>Email: ${oneUser.email}</li>
               </ul>
            `;
         });

         document.getElementById('users').innerHTML = outputUsers;
      }
   }

   xhr.send();
}