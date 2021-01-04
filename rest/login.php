<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once $_SERVER['DOCUMENT_ROOT'] . '/Db.php';

if($_SERVER["REQUEST_METHOD"] == 'POST'){
    $_post = json_decode(file_get_contents('php://input'), true);
    $_post = validate_request($_post);
    //$_post = password_hash("user",PASSWORD_ARGON2ID);
    //TODO select sur la table user pour verifier email puis mot de passe
    password_verify($_post['login'],$row['password']);
    //JWT
    //Vor reactAuth ...
    echo json_encode($_post);
}
else{
    echo json_encode(false);
}

function validate_request($request)
{
    foreach ($request as $k => $v) {
        if(is_array($v)){
            validate_request($v);
        }
        else{
            $request[$k] = htmlspecialchars(strip_tags(stripslashes(trim($v))));
        }
    }
    return $request;
}