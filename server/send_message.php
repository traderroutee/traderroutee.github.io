<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data"]);
    exit;
}

$from = htmlspecialchars($data["from"] ?? "");
$to   = htmlspecialchars($data["to"] ?? "");
$text = htmlspecialchars($data["text"] ?? "");

if (!$from || !$to || !$text) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit;
}

// === Store messages ===
$file = "../data/messages.json";
if(!is_dir("../data")) mkdir("../data", 0777, true);
$messages = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
$messages[] = [
    "from" => $from,
    "to" => $to,
    "text" => $text,
    "time" => date("Y-m-d H:i:s")
];
file_put_contents($file, json_encode($messages, JSON_PRETTY_PRINT));

// === Send email notification ===
$subject = "New message on Trader Route";
$body = "You have received a new message from: $from\n\nMessage:\n$text\n\nLogin to your Trader Route account to reply.";
$headers = "From: no-reply@traderroute.com\r\n";
$headers .= "Reply-To: $from\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent and email delivered."]);
} else {
    echo json_encode(["status" => "warning", "message" => "Message saved but email could not be sent."]);
}
?>
