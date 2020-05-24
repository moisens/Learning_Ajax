<?php
echo 'Processing...';

//Check for POST variable
if(isset($_POST['name'])){
   echo 'POST: your name is' .' ' . $_POST['name'];
}

//Check for GET variable
if(isset($_GET['name'])){
   echo 'GET: your name is' .' ' . $_GET['name'];
}



?>