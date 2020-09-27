<?php

function alphaNumOnly($data, $returnChar = '')
{
    $tmp = preg_replace('/[^a-zA-Z0-9]/', '', $data);
    return $tmp ? $tmp : $returnChar;
}

function numOnly($data, $returnChar = '')
{
    $tmp = preg_replace('/[^0-9]/', '', $data);
    return $tmp ? $tmp : $returnChar;
}

function alphaNumSpecial($data, $returnChar = '')
{
    $tmp = preg_replace('/[^a-zA-Z, -\/()@0-9]/', '', $data);
    return $tmp ? $tmp : $returnChar;
}

function alphaOnly($data, $returnChar = '')
{
    $tmp = preg_replace('/[^a-zA-Z]/', '', $data);
    return $tmp ? $tmp : $returnChar;
}

function logThis($data, $flag = 0)
{
    if ($flag == 1)
        $data = json_encode($data);
    error_log($data . "\n", 3, "logs.dat");
}
