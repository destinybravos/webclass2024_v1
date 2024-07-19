<?php
    header('Content-Type: application/json');
    include_once 'connect.php';


    try {

        if (!isset($_GET['search_param'])) {
            throw new Exception("Search Parameter missing", 1);
        }

        if (empty($_GET['search_param'])) {
            $result = $conn->query("SELECT * FROM users");
        } else {
            $searchParam = $_GET['search_param'];
            $result = $conn->query("SELECT * FROM users WHERE firstname LIKE '%$searchParam%' OR lastname LIKE '%$searchParam%'");
        }

        $users = array();

        if ($result->num_rows > 0) {
            while ($user_record = $result->fetch_assoc()) {
                array_push($users, $user_record);
            }
        }

        echo  json_encode([
            'success' => true,
            'users' => $users,
        ]);

    } catch (\Throwable $th) {
        echo  json_encode([
            'success' => false,
            'message' => $th->getMessage(),
            'error' => $th->getTrace()
        ]);
    }

?>