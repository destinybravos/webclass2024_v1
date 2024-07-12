<?php
    header('Content-Type: application/json');
    include_once 'connect.php';


    // $insertQuery = $conn->query("INSERT INTO users (firstname, lastname, phone, email)
    //                         VALUES ('Jude', 'Kngsley', '08023456789', 'judekings@gmail.com')");

    try {

        if ((!isset($_POST['firstname']) || $_POST['firstname'] == '') || (!isset($_POST['phone']) || $_POST['phone'] == '') || (!isset($_POST['email']) || $_POST['email'] == '')) {
            throw new Exception("Invalid or Missing parameters. Firstname, Lastname, Phone and Email are required", 422);
        }

        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $gender = isset($_POST['gender']) ? $_POST['gender'] : null;
        $age = isset($_POST['age']) ? $_POST['age'] : null;
        $bio = isset($_POST['bio']) ? $_POST['bio'] : null;

        
        $insertQuery = $conn->query("INSERT INTO users (firstname, lastname, phone, email, gender, age, bio)
                            VALUES ('$firstname', '$lastname', '$phone', '$email', '$gender', '$age', '$bio')");
      
      
        if ($insertQuery) {
            header('HTTP/1 200 Ok');
            echo json_encode([
                'success' => true,
                'message' => 'record added successfully'
            ]);
        } else {
            header('HTTP/1 500 Server Error');
            echo json_encode([
                'success' => false,
                'message' => "Error: " . $conn->error
            ]);
        }
    } catch (\Throwable $th) {
        header('HTTP/1 ' . $th->getCode());
        echo json_encode([
            'success' => false,
            'message' => $th->getMessage()
        ]);
    }


?>