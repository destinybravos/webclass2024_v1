<?php

    include_once 'connect.php';



    // $insertQuery = $conn->query("INSERT INTO users (firstname, lastname, phone, email)
    //                         VALUES ('Jude', 'Kngsley', '08023456789', 'judekings@gmail.com')");

    $firstname = 'Jude';
    $lastname = 'Kngsley';
    $phone = '08023456789';
    $email = 'judekings@gmail.com';

    $insertQuery = $conn->query("INSERT INTO users (firstname, lastname, phone, email)
                            VALUES ('$firstname', '$lastname', '$phone', '$email')");
      
      
    if ($insertQuery) {
        echo "New record created successfully";
    } else {
        echo "Error: " . "<br>" . $conn->error;
    }


?>