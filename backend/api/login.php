<?php
include_once '../config/db.php';
include_once '../helpers/sanitize.php';
include_once '../helpers/apiecho.php';
include_once '../helpers/constants.php';
include_once '../helpers/queries.php';
$database = new Database();
$conn = $database->getConnection();
$data = json_decode(file_get_contents("php://input"));
if (!empty($data->user) && !empty($data->pass)) {

    $user = alphaNumOnly($data->user);
    $pass = alphaNumOnly($data->pass);
    $query = getUserLogin($user, $pass);
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $num = $stmt->rowCount();

    if ($num > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $response = array(
            "auth" => $authKey
        );
        http_response_code(200);
        echo respond(1, LOGIN_SUCCESS, $response);
    } else {
        http_response_code(200);
        echo respond(0, LOGIN_FAIL);
    }
} else {
    http_response_code(404);
    echo respond(0, API_ERROR);
}
