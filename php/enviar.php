<?php
    if(isset($_POST["name"]) && !empty($_POST["name"]) &&
       isset($_POST["mail"]) && !empty($_POST["mail"]) &&
       isset($_POST["subject"]) && !empty($_POST["subject"]) &&
       isset($_POST["message"]) && !empty($_POST["message"])){

        $name = $_POST["name"];
        $mail = $_POST["mail"];
        $message = $_POST["message"];

        mail("juanvasquezprogrammer@gmail.com", $mail, $name, $message);

        echo "<script>alert('Mail Sent')</script>";

       } else {
        echo "<script>alert('Unsent Mail')</script>";
       }
?>