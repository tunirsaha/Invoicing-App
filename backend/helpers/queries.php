<?php

function getUserLogin($user = '', $pass = '')
{
    return "SELECT `username`,`password`,`authKey` from `admin` where `username`='" . $user . "' and `password`= '" . $pass . "' and `status`=1";
}

function getClientsList()
{
    return "SELECT `id`,`name`, `city`, `state`, `pin`,`pan`,`gstin`,`phone`,`address` FROM `clients` WHERE `status` = '1' AND `id`!='1'";
}

function getClientData($cid)
{
    return "SELECT * FROM `clients` WHERE `id` = '" . $cid . "' and `status` = '1'";
}

function updateClientData($bid, $bname, $bphone, $bgst, $baddress, $bpan, $bstate, $bcity, $bpin)
{
    return
        "UPDATE `clients` SET 
        `name`='" . $bname . "',
        `phone`='" . $bphone . "',
        `gstin`='" . $bgst . "',
        `address`='" . $baddress . "',
        `pan`='" . $bpan . "',
        `state`='" . $bstate . "',
        `city`='" . $bcity . "',
        `pin`='" . $bpin . "' WHERE `id`='" . $bid . "'";
}

function updateClientBank($bid, $bankName, $bankAddress, $accNo, $ifsc, $accType, $upi)
{
    return
        "UPDATE `clients` SET 
        `bankName`='" . $bankName . "',
        `bankAdd`='" . $bankAddress . "',
        `accountNo`='" . $accNo . "',
        `ifsc`='" . $ifsc . "',
        `accountType`='" . $accType . "',
        `upi`='" . $upi . "' WHERE `id`='" . $bid . "'";
}

function addClientData($bid, $bname, $bphone, $bgst, $baddress, $bpan, $bstate, $bcity, $bpin)
{
    return
        "INSERT INTO `clients`(`id`,`name`,`phone`,`gstin`,`address`,`pan`,`state`,`city`,`pin`,`status`) 
        VALUES ('" . $bid . "','" . $bname . "','" . $bphone . "','" . $bgst . "','" . $baddress . "','" . $bpan . "','" . $bstate . "','" . $bcity . "','" . $bpin . "','1')";
}
