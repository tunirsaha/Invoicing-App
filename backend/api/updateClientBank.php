<?php
include_once '../config/db.php';
include_once '../helpers/sanitize.php';
include_once '../helpers/apiecho.php';
include_once '../helpers/constants.php';
include_once '../helpers/queries.php';
$database = new Database();
$conn = $database->getConnection();
$data = json_decode(file_get_contents("php://input"));
if (
    !empty($data->bid)
    && !empty($data->bankName)
    && !empty($data->bankAddress)
    && !empty($data->accNo)
    && !empty($data->ifsc)
    && !empty($data->accType)
    && !empty($data->upi)
) {
    $bid = numOnly($data->bid, 0);
    if ($bid > 0) {
        $bankName = alphaNumSpecial($data->bankName, '');
        $bankAddress = alphaNumSpecial($data->bankAddress, '');
        $accNo = numOnly($data->accNo, '');
        $ifsc = alphaNumOnly($data->ifsc, '');
        $accType = numOnly($data->accType, '');
        $upi = alphaNumSpecial($data->upi, '');
        $query = updateClientBank($bid, $bankName, $bankAddress, $accNo, $ifsc, $accType, $upi);
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $num = $stmt->rowCount();
        if ($num > 0) {
            http_response_code(200);
            echo respond(1, UPDATE_SUCCESS);
        } else {
            http_response_code(200);
            echo respond(0, UPDATE_FAIL, $query);
        }
    } else {
        http_response_code(200);
        echo respond(0, DATA_MISSING);
    }
} else {
    http_response_code(404);
    echo respond(0, API_ERROR, $data);
}
