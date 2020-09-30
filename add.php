<?php

	include('db_connect.php');

	$projectName = $projectValue = $projectDeliveryDate = $projectLocation = $projectDeliveryPartners = $modelData = '';
	$errors = array('projectName' => '', 'projectValue' => '', 'projectDeliveryDate' => '', 'projectLocation' => '', 'projectDeliveryPartners' => '');

	if(isset($_POST['submit'])){
		
		// check projectName
		if(empty($_POST['projectName'])){
			$errors['projectName'] = 'Your project needs a name!';
		} else{
			$projectName = $_POST['projectName'];
		}

		// check projectValue
		if(empty($_POST['projectValue'])){
			$errors['projectValue'] = 'A value is required!';
		} else{
			$projectValue = $_POST['projectValue'];
			/*if(!preg_match('/^[+-]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{2})?|(?:,[0-9]{3})*(?:\.[0-9]{2})?|(?:\.[0-9]{3})*(?:,[0-9]{2})?)$/', $projectValue)){
				$errors['projectValue'] = 'Enter a valid value!';
			}*/
		}

		if(empty($_POST['projectDeliveryDate'])){
			$errors['projectDeliveryDate'] = 'A delivery date is required!';
		} else{
			$projectDeliveryDate = $_POST['projectDeliveryDate'];
			/*if(checkdate($projectDeliveryDate)){
				$errors['projectDeliveryDate'] = 'Enter a valid date!';
			}*/
		}

		// check projectLocation
		if(empty($_POST['projectLocation'])){
			$errors['projectLocation'] = 'A location is required!';
		} else{
			$projectLocation = $_POST['projectLocation'];
		}

		// check projectDeliveryPartners
	//	if(empty($_POST['projectDeliveryPartners'])){
		//	$errors['projectDeliveryPartners'] = 'A location is required!';
		//} else{
			$projectDeliveryPartners = $_POST['projectDeliveryPartners'];
		//}		

		//check projectDeliveryDate
		
		if(isset($_POST['pass']))
		{
			$modelData = $_POST['pass'];//$modelData = '{"nodes":[],"links":[]}';
			
			// Do whatever you want with the $uid
		}
		
		

		if(array_filter($errors)){
			//echo 'errors in form';
		} else {
			// escape sql chars
			$projectName = mysqli_real_escape_string($conn, $_POST['projectName']);
			$projectValue = mysqli_real_escape_string($conn, $_POST['projectValue']);
			$projectDeliveryDate = mysqli_real_escape_string($conn, $_POST['projectDeliveryDate']);
			$projectLocation = mysqli_real_escape_string($conn, $_POST['projectLocation']);
			$projectDeliveryPartners = mysqli_real_escape_string($conn, $_POST['projectDeliveryPartners']);

			// create sql
			$sql = "INSERT INTO projects(projectName,projectValue,deliveryDate,projectLocation,deliveryPartners,modelData)
			 VALUES('$projectName','$projectValue','$projectDeliveryDate','$projectLocation','$projectDeliveryPartners', '$modelData')";

			// save to db and check
			if(mysqli_query($conn, $sql)){
				// success
				header('Location: index.php');
				
			} else {
				echo 'query error: '. mysqli_error($conn) . $modelData . "   end";
				//echo $modelData;
			}
			
		}

	} // end POST check

?>







<!DOCTYPE html>
<html>

<!-- 

<section class="container grey-text">

    <form class="form-group white" action="add.php" method="POST">
        <label>Name</label>
        <input type="text" name="projectName" value="<?php echo htmlspecialchars($projectName) ?>">
        <div class="red-text"><?php echo $errors['projectName']; ?></div>
        <label>Value</label>
        <input type="text" name="projectValue" value="<?php echo htmlspecialchars($projectValue) ?>">
        <div class="red-text"><?php echo $errors['projectName']; ?></div>
        <label>Location</label>
        <input type="text" name="projectLocation" value="<?php echo htmlspecialchars($projectLocation) ?>">
        <div class="red-text"><?php echo $errors['projectLocation']; ?></div>
        <label>projectDeliveryDate</label>
        <input type="text" name="projectDeliveryDate" value="<?php echo htmlspecialchars($projectDeliveryDate) ?>">
        <div class="red-text"><?php echo $errors['projectDeliveryDate']; ?></div>
        <label>projectDeliveryPartners</label>
        <input type="text" name="projectDeliveryPartners"
            value="<?php echo htmlspecialchars($projectDeliveryPartners) ?>">
        <div class="red-text"><?php echo $errors['projectDeliveryPartners']; ?></div>
        <div class="center">
            <div class="center">
                <input type="submit" name="submit" value="Submit" class="btn btn-primary">
            </div>
    </form>
</section> -->

<div class="container">
    <div class="row align-items-center">
        <div class="col-md-6">

            <form action="add.php" method="POST">
                <div class="form-group">
                    <br>
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Project Name"
                        name="projectName" value="<?php echo htmlspecialchars($projectName) ?>"  required />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Value</label>


                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01"><b>£</b></label>
                        </div>
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                            placeholder="Enter Estimated Value " name="projectValue"
                            value="<?php echo htmlspecialchars($projectValue) ?>"  required />
                    </div>
                </div>

                <div class="form-group">
                    <div id="locationField">
                        <label for="formGroupExampleInput2">Project Location</label>
                        <input class="form-control" id="autocomplete" placeholder="Enter an address" type="text"
                            name="projectLocation" value="<?php echo htmlspecialchars($projectLocation) ?>" required/>
                    </div>
                </div>


                <div class="form-group">
                    <label for="formGroupExampleInput2">Project Delivery Date</label>
                    <input type="text" class="form-control" id="datepicker" placeholder="Choose delivery date"
                        name="projectDeliveryDate" value="<?php echo htmlspecialchars($projectDeliveryDate) ?>"  required/>
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput2">Project Delivery Partners <small>(Select from list, or type your
                            own)</small></label>
                    <select id="select-partners" class="form-control" name="projectDeliveryPartners" multiple="multiple" value="<?php echo htmlspecialchars($projectDeliveryPartners) ?>" required>
                        <option>Belfast City Council</option>
                        <option>Public Health Agency</option>
                        <option>Department for Infrastructure</option>
                        <option>Department for Communities</option>
                        <option>Department of Health</option>
                    </select>
                </div>

                <input type="submit" name="submit" value="Save Project" class="btn btn-success mt-5">
            </form>


        </div>
        <div class="col-md-6 text-center"><img src="img/add.svg" width="400px" alt=""></div>
    </div>
</div>





</html>