<?php 

    $users = [
        [
            "id" => "1",
            "firstname" => "John",
            "lastname" => "Udeme",
            "phone" => "090123332232",
            "email" => "Johnu@gmail.com",
        ],
        [
            "id" => "2",
            "firstname" => "Josiah",
            "lastname" => "Ukuokoko",
            "phone" => "080233444232",
            "email" => "josiahu@gmail.com",
        ],
        [
            "id" => "3",
            "firstname" => "Francis",
            "lastname" => "Odega",
            "phone" => "08123434244",
            "email" => "frandega@gmail.com",
        ]
    ];


    header("Content-Type: application/json");
    echo json_encode($users);

?>