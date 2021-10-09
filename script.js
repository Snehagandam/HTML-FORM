

function onformsubmit(){
   var formData  = readform();
   insertRecord(formData);
   resetform(); 
}


function readform(){
    var formData={};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    //formData["gen"] = document.getElementById("gen").value;
    var genvalue = document.getElementById('gen').value;
    var gen_value;
    if (document.getElementById('gen1').checked) {
      gen_value = document.getElementById('gen1').value;
    }
    else if(document.getElementById('gen2').checked)
    {
       gen_value = document.getElementById('gen2').value;
    }
    formData["gen"] = gen_value;
    formData["food"] = document.getElementById("food").value;
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
   
     return formData;

}


function insertRecord(data){
  var table= document.getElementById("formlist").getElementsByTagName('tbody')[0];
  var newRow= table.insertRow(table.length);
   cell1 = newRow.insertCell(0);
   cell1.innerHTML = data.firstname;
   cell2 = newRow.insertCell(1);
   cell2.innerHTML = data.lastname;
   cell3 = newRow.insertCell(2);
   cell3.innerHTML = data.address;
   cell4 = newRow.insertCell(3);
   cell4.innerHTML = data.pincode;
   cell5 = newRow.insertCell(4);
   cell5.innerHTML = data.gen;
   cell6 = newRow.insertCell(5);
   cell6.innerHTML = data.food;
   cell7 = newRow.insertCell(6);
   cell7.innerHTML = data.state;
   cell8 = newRow.insertCell(7);
   cell8.innerHTML = data.country;
}


function resetform(){
   document.getElementById("firstname").value="";
   document.getElementById("lastname").value="";
   document.getElementById("address").value="";
   document.getElementById("pincode").value=";"
   document.getElementById("gen").value="";
   document.getElementById("food").value="";
   document.getElementById("state").value="";
   document.getElementById("country").value="";
}