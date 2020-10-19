<?php

    include('db_connect.php');
    


    
			// escape sql chars
			$projectName = mysqli_real_escape_string($conn,$_POST['projectName']);
			$projectValue = mysqli_real_escape_string($conn,$_POST['projectValue']);
			$projectDeliveryDate = mysqli_real_escape_string($conn,$_POST['projectDeliveryDate']);
			$projectLocation = mysqli_real_escape_string($conn,$_POST['projectLocation']);
            $projectDeliveryPartners = mysqli_real_escape_string($conn,$_POST['projectDeliveryPartners']);
            $modelDataToSend = mysqli_real_escape_string($conn,$_POST['modelDataToSend']);

			// create sql
			$sql = "INSERT INTO projects(projectName,projectValue,deliveryDate,projectLocation,deliveryPartners,modelData)
			 VALUES('$projectName','$projectValue','$projectDeliveryDate','$projectLocation','$projectDeliveryPartners', '$modelDataToSend')";



if(!mysqli_query($conn, $sql)) {
    echo 'Could not insert';
}
else {
    echo "Your project has been saved";
}
			// save to db and check
			// if ($conn->query($sql) === TRUE) {
            //     echo "data inserted";
            //     }
            //         else 
            //     {
            //          echo "failed";
            // }
			




?>