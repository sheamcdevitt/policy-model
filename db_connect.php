<?php 

	// connect to the database
	$conn = mysqli_connect('localhost', 'shea', 'Ralfie2020!123', 'usipolicytool');

	// check connection
	if(!$conn){
		echo 'Connection error: '. mysqli_connect_error();
	}

?>