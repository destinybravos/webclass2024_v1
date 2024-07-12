<?php
    header('Content-Type: application/json');
    include_once 'connect.php';
    $response = array();

    // $fetchQuery = $conn->query("SELECT id, firstname, lastname, email as email_address FROM users");
    $fetchQuery = $conn->query("SELECT * FROM users");
      
    $users = array();
    
    if ($fetchQuery->num_rows > 0) {

        
        while ($user = $fetchQuery->fetch_assoc()) {
            array_push($users, $user);
        }

        $response['success'] = true;
        $response['users'] = $users;
        $response['message'] = 'Users records fetched successfully!';

    } else {
        $response['success'] = false;
        $response['users'] = [];
        $response['message'] = 'No user record found!';
    }


    echo json_encode($response);



?>