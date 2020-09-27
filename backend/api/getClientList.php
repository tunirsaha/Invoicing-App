<?php
include_once '../config/db.php';
include_once '../helpers/apiecho.php';
include_once '../helpers/constants.php';
include_once '../helpers/queries.php';
$database = new Database();
$conn = $database->getConnection();
$query = getClientsList();
$stmt = $conn->prepare($query);
$stmt->execute();
$num = $stmt->rowCount();
if ($num > 0) {
    $response = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $data = array(
            "bname" => $name,
            "cid" => $id,
            "city" => $city,
            "state" => $state,
            "pin" => $pin,
            "pan" => $pan,
            "gstin" => $gstin,
            "phone" => $phone,
            "address" => $address
        );
        array_push($response, $data);
    }
    http_response_code(200);
    echo respond(1, '', $response);
} else {
    http_response_code(200);
    echo respond(0, CLIENTS_ABSENT, $query);
}
