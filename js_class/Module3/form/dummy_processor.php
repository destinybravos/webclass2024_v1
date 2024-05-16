<?php

    $username = $_POST['username'];
    $password = $_POST['password'];
    $remember = isset($_POST['remember']) ? $_POST['remember'] : 'off';


echo $username . '<br>';
echo $password . '<br>';
echo $remember;


?>