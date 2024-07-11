<?php
    header('Content-Type: application/json');
    include_once 'connect.php';

    $fetchQuery = $conn->query("SELECT * FROM users");
      
    
    if ($fetchQuery->num_rows > 0) {
        echo json_encode($fetchQuery->fetch_assoc());
    } else {
        echo "No User Record Found";
    }



?>