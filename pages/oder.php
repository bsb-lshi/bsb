<?php
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['e-mail'];
$num = $_POST['num'];
$produit = $_POST['produit'];
$prix = $_POST['prix'];
$quantite = $_POST['quantite'];
$details = $_POST['$details'];



if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}
if(IsInjected($nom))
{
    echo "Bad last name value!";
    exit;
}

if(IsInjected($prenom))
{
    echo "Bad name value";
    exit;
}

if(IsInjected($num))
{
    echo "Bad number value!";
    exit;
}

$email_form = 'BSB@gmail.com';

$email_subject = 'Nouvele commande';

$email_body = "Vous avez recu une nouvelle commande de \n
$nom $prenom\n
email : $email\n
Numero : $num\n

Ce client a commande \n$produit\n$prix\n$quantite pieces\n

Details de la commande : $details".

$to = "lubumbashicorporation25@gmail.com"
$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);


?>