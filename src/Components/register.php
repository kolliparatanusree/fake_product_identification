<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // For CORS, adjust for your needs

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = ""; //your password
$dbname = ""; //your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("status" => "error", "message" => "Connection failed: " . $conn->connect_error)));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

$fullName = $data->fullName;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_BCRYPT);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $fullName, $email, $password);

if ($stmt->execute()) {
    echo json_encode(array("status" => "success", "message" => "Registration successful"));
} else {
    echo json_encode(array("status" => "error", "message" => "Registration failed"));
}

$stmt->close();
$conn->close();
?>
