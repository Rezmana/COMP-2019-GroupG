<?php
// FILEPATH: /d:/UNI Notes and Assignments/Undergrad Comp AI/Year 2/SEGP/CourseWork/COMP-2019-GroupG/Prototype2/api.php

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "segp";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($conn) {
    echo "Connection successful";
} else{
    echo "Connection failed";
}
// Rest of your code goes here...

// Close the connection
$conn->close();
?>
