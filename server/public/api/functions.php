<?php

function error_handler($error) {
    $output = [
        'success' => 'false',
        'error' => $error->getMessage(),
    ];
    $json_output = json_encode($output);
    print($json_output);
}

function startup() {
    header('Content-Type: application/json');
}