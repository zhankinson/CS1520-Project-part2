<?php

define('DB_NAME', 'form_data');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

//Connect to host
$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
if(!$link){
  die('Cannot connect to host: ' . mysql_error());
}

//Connect to database
$db_selected = mysql_select_db(DB_NAME, $link);
if(!$db_selected){
  die('Cannot find database: ' . mysql_error());
}

$value0 = isset($_POST['name']) ? $_POST['name'] : '';
$value1 = isset($_POST['gender']) ? $_POST['gender'] : '';
$value2 = isset($_POST['state']) ? $_POST['state'] : '';
$value3 = isset($_POST['reason']) ? $_POST['reason'] : '';
$sql = "INSERT INTO visitor (name, gender, state, reason) VALUES ('$value0', '$value1', '$value2', '$value3')";
if(!mysql_query($sql)){
  die('Error: ' . mysql_error());
}


mysql_close();
?>
