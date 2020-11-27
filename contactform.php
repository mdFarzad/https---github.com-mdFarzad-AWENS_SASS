<?php

if(isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mailTo ="fzsharad@gmail.com";
    $headers = "From: ".$email;
    $txt ="You have recieved an email from ".$firstName." ".$lastName.".\n\n".$message; 
    
    mail( $mailTo, $subject, $txt,  $headers);
}
