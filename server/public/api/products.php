<?php

header('Content-Type: application/json');
require_once('functions.php');

set_exception_handler('error_handler');

//startup();

require_once('db_connection.php');

$output = file_get_contents('dummy-products-list.json');
print($output);

if(!$conn) {
    print(mysqli_connect_error());
}

if (empty($_GET['id'])) {
    $whereClause = '';
} else {
    $whereClause = "WHERE id" . $_GET['id'];
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