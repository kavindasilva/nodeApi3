
<?php

/**
	This file used to access api from 127.0.0.1:80
*/



?>

<!DOCTYPE html>
<html>
<head>
	<title>API accessing</title>
	<link rel="stylesheet" type="text/css" href="../public/stylesheets/bootstrap.min.css">
</head>
<body style="background-color: #abcde0;">
	<script type="text/javascript" src="../public/javascripts/apiJs1.js"></script>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-sm-4">
				<div class="row">
					<button value="BTN1" class="btn btn-success" onclick="getAllData();">View</button>
				</div>
				<div id="newData">
					<label class="width30">ID</label>
					<input type='text' id='id' name='id' /><br/>

					<label class="width30">Email</label>
					<input type='text' id='email' name='eml'/><br/>
					
					<label class="width30">Password</label>
					<input type='text' id='pass' name='pass'/><br/>

					<label class="width30">Pic</label>
					<input type='text' id='pic' name='pic'/><br/>

					<button class="btn btn-primary" onclick="insertNew()">Add</button>
				</div>
			</div>

			<div class="col-md-8 col-sm-8">
				<div id="data1">
					initial data
				</div>
			</div>
		</div>
	</div>


	<script type="text/javascript" src="../public/javascripts/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="../public/javascripts/bootstrap.min.js"></script>
	

	<script type="text/javascript">
		/*$.ajax({
			type: "get",
			url: "http://127.0.0.1:3000/api/j",
			data: { str: "hi"},
			success: function(data, status){
				//
				console.log(data);
				console.log(status);
				$("#data1").empty().append(printAllData(data));
			},
			error: function(err){
				console.log(err);
			}
		});*/
	</script>

</body>
</html>