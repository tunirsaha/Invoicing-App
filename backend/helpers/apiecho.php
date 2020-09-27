<?php

function respond($status, $msg = '', $data = '')
{
    $result = array(
        "status" => $status == 1 ? "success" : "failure"
    );
    if ($data != '')
        $result["data"] = $data;
    if ($msg != '')
        $result["message"] = $msg;

    return json_encode($result);
}
