<?php 

    
    $username = $_POST['username'];
    $password = $_POST['password'];

    // generate http response code status
    header("HTTP/1.1 422");


    echo "This is it: " . $username . " " . $password;
    


?>