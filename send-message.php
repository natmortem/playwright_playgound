<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	header('Allow: POST');
	exit('Method not allowed');
}

$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$message = $_POST['message'] ?? null;
$personalInformationConsent = $_POST['personal_information_consent'] ?? null;

if (
	!is_string($name) || trim($name) === ''
	|| !is_string($email) || filter_var(trim($email), FILTER_VALIDATE_EMAIL) === false
	|| !is_string($message) || trim($message) === ''
	|| $personalInformationConsent !== 'yes'
) {
	http_response_code(400);
	exit('Please provide a name, a valid email address, a message, and consent to share your personal information.');
}

header('Location: message-sent.html', true, 303);
exit;
