<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$host = "localhost";
$username = "u123456789_admin"; // Change this to your Hostinger DB user
$password = "YourDBPassword"; // Change this to your Hostinger DB password
$dbname = "u123456789_brewingbnb"; // Change this to your Hostinger DB name

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>
