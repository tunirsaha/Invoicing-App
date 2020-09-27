<?php
include_once '../config/db.php';
include_once '../helpers/sanitize.php';
include_once '../helpers/apiecho.php';
include_once '../helpers/constants.php';
include_once '../helpers/queries.php';
$database = new Database();
$conn = $database->getConnection();
$cid = isset($_GET['cid']) ? numOnly($_GET['cid'], 0) : 0;
$query = getClientData($cid);
$stmt = $conn->prepare($query);
$stmt->execute();
$num = $stmt->rowCount();
if ($num > 0) {
    $response = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $product_item = array(
            "name" => $name,
            "phone" => $phone,
            "gstin" => $gstin,
            "address" => $address,
            "pan" => $pan,
            "state" => $state,
            "city" => $city,
            "pin" => $pin,
            "bankName" => $bankName,
            "bankAdd" => $bankAdd,
            "accountNo" => $accountNo,
            "ifsc" => $ifsc,
            "accountType" => $accountType,
            "upi" => $upi,
            "status`" => $status
        );
        array_push($response, $product_item);
    }
    http_response_code(200);
    echo respond(1, '', $response);
} else {
    http_response_code(200);
    echo respond(0, CLIENTS_ABSENT);
}
