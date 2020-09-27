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
    && !empty($data->bphone)
    && !empty($data->baddress)
    && !empty($data->bstate)
    && !empty($data->bcity)
    && !empty($data->bpin)
) {
    $bid = numOnly($data->bid, 0);
    if ($bid > 0) {
        $bgst = alphaNumOnly($data->bgst, '');
        $bpan = alphaNumOnly($data->bpan, '');
        $bname = alphaNumSpecial($data->bname, '');
        $bphone = numOnly($data->bphone, '');
        $baddress = alphaNumSpecial($data->baddress, '');
        $bstate = numOnly($data->bstate, '');
        $bcity = alphaNumOnly($data->bcity, '');
        $bpin = numOnly($data->bpin, '');
        $query = addClientData($bid, $bname, $bphone, $bgst, $baddress, $bpan, $bstate, $bcity, $bpin);
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $num = $stmt->rowCount();
        logThis($num);
        logThis($stmt, 1);
        if ($num > 0) {
            http_response_code(200);
            echo respond(1, INSERT_SUCCESS);
        } else {
            http_response_code(200);
            echo respond(0, INSERT_FAIL, $query);
        }
    } else {
        http_response_code(200);
        echo respond(0, DATA_MISSING);
    }
} else {
    http_response_code(404);
    echo respond(0, API_ERROR);
}
