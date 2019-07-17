<?php
include 'functions.php';
require_once('db_connection.php');
require_once('functions.php');

set_exception_handler('error_handler');

//doStuff();

$output = file_get_contents('dummy-products-list.json');
print($output);

if(!$conn) {
    print(mysqli_connect_error());
}

//header('Content-Type: application/json');

//if (empty($_GET['id'])) {
//  readfile('dummy-products-list.json');
//} else {
//  readfile('dummy-product-details.json');
//}
//
?>