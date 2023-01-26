<?php

if ($_POST) {
    $name = '';
    if (!empty($_POST['name'])) {
        $name = $_POST['name'];
    }
    $to = 'mathieu@blackduckagency.com';
    $subject = 'sujet';
    $message = 'Message test from: ' . $name . '.';
    mail($to, $subject, $message);
}
