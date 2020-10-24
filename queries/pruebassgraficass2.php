<?php
$message = "";
$conn = new mysqli('localhost', 'root', '', 'test');
$sql = $conn->query('SELECT presio, IDk FROM tabla_pruebas WHERE presio > 40');
$message1="";

while($result = mysqli_fetch_array($sql)) { 
    $i = $result['presio'];
    $a= $result['IDk'];
    $message .= $i.'-' ;
    $message1.= $a.'-' ;
}
echo $message.';'.$message1;
?>
