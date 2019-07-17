<?php

function error_handler($error) {
    $output = [
        'success' => 'false',
        'error' => 'Call to undefined function doStuff()'
    ];
    $json_output = json_encode($output);
    print($json_output);
}
