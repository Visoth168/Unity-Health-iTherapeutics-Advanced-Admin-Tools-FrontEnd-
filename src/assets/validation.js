function empty() {
    var x;
    x=document.getElementById("email").value;
    if (x == "" || (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(x))==false ) {
        alert("Enter a Valid Email");
        return false;
        }else if (document.getElementById("supplier").value == "") {
            alert("Enter a Valid Supplier");
            return false;
        }else if(document.getElementById("company").value == ""){
            alert("Enter a Valid Company");
            return false;
        }else if(document.getElementById("title").value == ""){
            alert("Enter a Valid Title");
            return false;  
        }else if(document.getElementById("firstName").value == ""){
            alert("Enter a Valid First Name");
            return false; 
        }else if(document.getElementById("lastName").value == ""){
            alert("Enter a Valid Lastname");
            return false; 
        }else if(document.getElementById("age").value == ""){
            alert("Enter a Valid Age");
            return false; 
        }else if(document.getElementById("accountType").value == ""){
            alert("Enter a Valid Position");
            return false; 
        }else if(document.getElementById("country").value == ""){
            alert("Enter a Valid Country");
            return false; 
        }else if(document.getElementById("state").value == ""){
            alert("Enter a Valid Region");
            return false; 
        }else if(document.getElementById("acl").value == ""){
            alert("Enter a Valid Access level");
            return false;  
        }
        }
function ValidateEmail(mail) {
     if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {} 
       alert("You have entered an invalid email address!");
        

         
}
function empty2(){
    var x;
    const date=new Date();
    const dt= new Date(document.getElementById("dtDateStart").value);
    const dt1= new Date(document.getElementById("dtDateEnd").value);
    x=document.getElementById("vName").value;
    if (x == "") {
        alert("Enter a Valid Name");
        return false;
        }else if (document.getElementById("dtDateStart").value == ""||dt < date) {
            alert("Choose a valid starting Date");
            
            return false;
        }else if (document.getElementById("dtDateEnd").value == ""||dt1 < dt) {
            alert("Choose a valid ending Date");
            
            return false;
        }
        else {
            return saveTblSlideShowChanges();
        }
}