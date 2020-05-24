document.getElementById('button').addEventListener('click', loadUsers)

function loadUsers(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://api.github.com/users', true);
   xhr.onload = function(){
      if(this.status == 200){
         let gitUsers = JSON.parse(this.responseText);
         let outPutGitUsers = '';
         gitUsers.forEach((gitUser) =>{
            outPutGitUsers += `
            <div class="user">
            <img src="${gitUser.avatar_url}" width="80" height="80">
               <ul>
                  <li>Id: ${gitUser.id}</li>
                  <li>Login: ${gitUser.login}</li>
                  <li>Url: ${gitUser.url}</li>
               </ul>
            </div>
            
            `;
         });

         document.getElementById('gItUsers').innerHTML = outPutGitUsers;
      }
   }
   xhr.send();
}