<?php
    header('Content-Type: application/json');
    include_once 'connect.php';

    

    try {
        if (!isset($_POST['email'])) {
            throw new Exception("Email Field is required", 1);
        }


        $email = $_POST['email'];

        $fetchQuery = $conn->query("SELECT * FROM users WHERE email='$email'");
        
        if ($fetchQuery->num_rows == 0) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false]);
        }

        

    } catch (\Throwable $th) {
        header('HTTP\1 500');
        echo json_encode([
            'success' => false, 
            'message' => $th->getMessage()
        ]);
    }


?>