<?php

    // $myArray = ['john', 'james', 'emma', 'hapiness'];
    // $myArray2 = [
    //     [
    //         'name' => 'John', 
    //         'phone' => ['0902342323', '0812343434']
    //     ],
    //     [
    //         'name' => 'Emma', 
    //         'phone' => ['0902342323']
    //     ],
    //     [
    //         'name' => 'James', 
    //         'phone' => ['0902342323']
    //     ],
    // ];


    // header("Content-Type: application/json");
    // echo json_encode($myArray2);

    // $score = isset($_GET['score']) ? $_GET['score'] : 0; //First Option
    
    // if (isset($_GET['score'])) {
    //     $score = $_GET['score'];
    // }else{
    //     $score = 0;
    // }
    // echo $score;

    // if ($score <= 30) {
    //     $grade = "F";
    // }elseif ($score < 40) {
    //     $grade = "E";
    // }elseif ($score < 50) {
    //     $grade = "D";
    // }elseif ($score < 60) {
    //     $grade = "CD";
    // }elseif ($score < 70) {
    //     $grade = "C";
    // }elseif ($score < 80) {
    //     $grade = "B";
    // }elseif ($score < 90) {
    //     $grade = "AB";
    // }elseif ($score <= 100) {
    //     $grade = "A";
    // }else{
    //     $grade = "Invalid";
    // }


    // echo $grade;


    try {

        if (!isset($_GET['score'])) {
            throw new Exception("Missing or invalid input 'score'", 422);
        }

        $score = $_GET['score'];
        echo $score;
    
        if ($score <= 30) {
            $grade = "F";
        }elseif ($score < 40) {
            $grade = "E";
        }elseif ($score < 50) {
            $grade = "D";
        }elseif ($score < 60) {
            $grade = "CD";
        }elseif ($score < 70) {
            $grade = "C";
        }elseif ($score < 80) {
            $grade = "B";
        }elseif ($score < 90) {
            $grade = "AB";
        }elseif ($score <= 100) {
            $grade = "A";
        }else{
            $grade = "Invalid";
        }
    
        echo $grade;
    } catch (\Throwable $th) {
        // header('HTTP/1.1 500');
        header('HTTP/1.1 ' . $th->getCode());
        echo $th->getMessage();
    }finally{
        echo "Na Error o..";
    }
    

?>