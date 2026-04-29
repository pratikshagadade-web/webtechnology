function SubmitbuttonClick(){

    let name =document.getElementById('name').value;
    let Emailid=document.getElementById('Emailid').value;
    let password=document.getElementById('password').value;



    //clear old id
    document.getElementById('nameError').innerHTML="";
    document.getElementById('EmailidError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";
   
    let isvalid=true;
    if (name ==""){
        document.getElementById(nameError.innerHTML="name field is required");
        isvalid=false;
    }
    
    let emailvalid=true;
    if (Emailid ==""&& Emailid =="@"){
         document.getElementById(EmailidError.innerHTML="valid email field is required");
         emailvalid=false;
    }

    let validpassword=true;
    if (password=="")


}