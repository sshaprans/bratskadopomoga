<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "denis.koblya@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка на сайті";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Текст: $text";
	mail($to, $subject, $msg, "From: $to ");

?>

<p> </p>
