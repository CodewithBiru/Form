var selectedRow = null;

function onFormSubmit(){
var formData = readFormData();
if(selectedRow == null)
insertNewRecord(formData);
else
updateRecord(formData);
resetForm();
}

function readFormData(){
    var formData={};

    if(document.getElementById("male").checked){
        formData["gander"]  = document.getElementById("male").value;
    }else if(document.getElementById("female").checked){
        formData["gander"] = document.getElementById("female").value;
    };

    if(document.getElementById("subscription").checked){
        formData["subscribed"]= "Yes";  
    }else{ formData["subscribed"]= "No"}

    formData["fullname"] = document.getElementById("fullname").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}

function insertNewRecord(data){
var table=document.getElementById("employeelist").getElementsByTagName("tbody")[0];
var newRow=table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.fullname;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.age;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.email;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.gander;
cell5 = newRow.insertCell(4);
cell5.innerHTML = data.password;
cell6 = newRow.insertCell(5);
cell6.innerHTML = data.subscribed;
cell7 = newRow.insertCell(6);
cell7.innerHTML=`<a onclick="onEdit(this)">Edit</a>
                    <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("fullname").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementsByName("gander").value="";
    document.getElementById("password").value="";
    document.getElementById("subscription").value="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementsByName("gander").value = selectedRow.cells[3].innerHTML;
    document.getElementById("password").value = selectedRow.cells[4].innerHTML;
    document.getElementById("subscription").value = selectedRow.cells[5].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML= formData.fullname;
    selectedRow.cells[1].innerHTML= formData.age;
    selectedRow.cells[2].innerHTML= formData.email;
    selectedRow.cells[3].innerHTML= formData.gander;
    selectedRow.cells[4].innerHTML= formData.password;
    selectedRow.cells[5].innerHTML= formData.subscribed;
}

function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
    row =td.parentElement.parentElement;
    document.getElementById("employeelist").deleteRow(row.rowIndex); 
    resetForm();
    }
}