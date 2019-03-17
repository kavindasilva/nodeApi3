
/**
	JS functions used to display data taken from API
*/

$("#btnCancelEdit").click(function(){
	switchSaveInsert(0);
});

function askUser(action, id){
	//if(action=="edit")
	if( confirm("Are you sure to "+action+" this item?") ){  //true
		if(action=="edit")
			editItemLoad(id);
			//console.log("edit "+id);
		else if(action=="delete")
			deleteItem(id);
		else
			console.log(action);
	}
}

function cancelEdit(){
	//$("#id").attr("disabled",false).empty(); //attr("disabled", true);
	$("#id").attr("disabled",false).val(""); //attr("disabled", true);
	$("#email").val("");
	$("#pass").val("");
	$("#pic").val("");
	switchSaveInsert(0);
}

function saveEdit(){
	$id=$("#id").val();
	$email=$("#email").val();
	$pass=$("#pass").val();
	$pic=$("#pic").val();
	$.ajax({
		type:"PUT",
		url: "http://127.0.0.1:3000/api/save",
		data: { email: $email, pass:$pass, pic:$pic, id:$id },
		success: function(data, status){
			console.log(data);
			getAllData();
			switchSaveInsert(0);
			clearBox();
		},
		error: function(err){
			console.log(err);
		}
	});
}


function editItemLoad(id){
	$.ajax({
		type:"GET",
		url: "http://127.0.0.1:3000/api/view/"+id,
		data: { /*email: $email, pass:$pass, pic:$pic*/ },
		success: function(data, status){
			console.log(data);
			let i=data.data[0];
			//getAllData();
			$("#id").val(i.id).attr("disabled", true);
			$("#email").val(i.email);
			$("#pass").val(i.pass);
			$("#pic").val(i.pic);
			//$("#").val();

			switchSaveInsert(1);
		},
		error: function(err){
			console.log(err);
		}
	});
}


function switchSaveInsert(type){ // 0=new, 1=edit
	if(type==0){
		$("#btnInsert").show();
		$("#btnSaveEdit").hide();
		$("#btnCancelEdit").hide();
	}
	else if(type==1){
		$("#btnInsert").hide();
		$("#btnSaveEdit").show();
		$("#btnCancelEdit").show();
	}
}

function clearBox(){
	$id=$("#id").val("auto").attr("disabled", true);
	$email=$("#email").val("");
	$pass=$("#pass").val("");
	$pic=$("#pic").val("");
}


function deleteItem(itemID){
	$.ajax({
		type: "DELETE",
		url: "http://127.0.0.1:3000/api/delete/"+itemID,
		data: itemID,
		success: function(data, status){
			console.log(data);
		},
		error: function(err){
			console.log(err);
		}
	});
	getAllData();
}


function insertNew(){
	$id=$("#id").val();
	$email=$("#email").val();
	$pass=$("#pass").val();
	$pic=$("#pic").val();
	$.ajax({
		type:"POST",
		url: "http://127.0.0.1:3000/api/add",
		data: { email: $email, pass:$pass, pic:$pic },
		success: function(data, status){
			console.log(data);
			getAllData();
		},
		error: function(err){
			console.log(err);
		}
	});
}


function getAllData(){
	$.ajax({
		type: "GET",
		url: "http://127.0.0.1:3000/api/j",
		data: {},
		success: function(data, status){
			//
			console.log(data);
			$("#data1").empty().append(printAllData(data));
		},
		error: function(err){
			console.log(err);
		}
	});
}


/* Returns the String to Append to an element */
function printAllData(data){
	//$("#data1").empty();
	appendStr="<table><tr> <th>ID</th> <th>Email</th> <th>Password</th> <th>Picture</th> </tr>";
	for(i of data.data){
		//appendStr+= "<tr> <td>"+i.id+"</td> <td>"+i.email+"</td> <td>"+i.pass+"</td> <td>"+i.pic+"</td> </tr>";
		appendStr+= "<tr> <td>"+i.id+"</td> <td>"+i.email+"</td> <td>"+i.pass+"</td> <td>"+i.pic+"</td>"+
			"<td><button class='btn btn-default' onclick=\"askUser('edit',"+i.id+")\">E</button></td>"+
			"<td><button class='btn btn-danger' onclick=\"askUser('delete',"+i.id+")\" >D</button></td> </tr>";
	}
	appendStr+="</table>";

	//$("#data1").append(appendStr);

	return appendStr;

}

