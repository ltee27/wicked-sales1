<?php

function error_handler($error) {
    $output = [
        'success' => 'false',
        'error' => 'Cannot call to function'
    ];
    $json_output = json_encode($output);
    print($json_output);
}
