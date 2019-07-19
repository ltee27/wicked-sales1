<?php
include 'functions.php';
require_once('db_connection.php');
require_once('functions.php');

set_exception_handler('error_handler');

startup();

$output = file_get_contents('dummy-products-list.json');
print($output);

if(!$conn) {
    print(mysqli_connect_error());
}

$query = "SELECT * FROM products";

$result = mysqli_query($conn, $query);

if(!$result) {
    throw new Exception('error with query:' . mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);

//if (empty($_GET['id'])) {
//  readfile('dummy-products-list.json');
//} else {
//  readfile('dummy-product-details.json');
//}
//
