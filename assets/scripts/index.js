const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// form.addEventListener('click', function(event){
// // function ps(){
// //  console.log("heloo")
// // }

//         // event.preventDefault();
//         validate();
// }
// )
// //validate
function finalMsg(){
    let wrapper=Array.from(document.getElementsByClassName("wrapper"));
    // console.log(wrapper);
    let cnt=0;
const usernameVal = username.value.trim();

    
    wrapper.forEach(function(f){
        // words=JSON.stringify(e);
        // console.log(words);
        // console.log(JSON.stringify(f.classList));
        
        q=f.className.trim();
        if(q== "wrapper success"){
        // console.log("hello");
        cnt++;
        }
        else{
            // console.log("heloo");
            return false;
        }
        
    })
    // console.log(wrapper.length);

    if(cnt===wrapper.length){
        // console.log("success");
        alert("Registration Successfull");
        swal("Good job! "+ usernameVal +" , " , "You're registered successfully!", "success");
        // swal("Good job!", "You clicked the button!", "success");
        // swal("Here's the title!", "...and here's the text!");


        location.href=`hello.html?username=${usernameVal}`
    }
    
}

const validate=()=>{
    
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // console.log("hello")

    // more email validation
    const isemail = (emailVal)=>{
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol<1) return false;
    let dot= emailVal.lastIndexOf(".");
    if(dot<= atSymbol + 2) return false;
    if (dot === emailVal.length-1 || dot===emailVal.length-2) return false;
    return true;
    }
    //username validation
    if(usernameVal==""){
        setErrorMsg(username,'username cannot be blank');
    }
    else if (usernameVal.length<=2){
        setErrorMsg(username,'username cannot be less than 3 characters');
    }
    else{
    setSuccessMsg(username);
    }
    //email validation
    if(emailVal===""){
        setErrorMsg(email,'E-mail cannot be blank');
    }
    else if (!isemail(emailVal)){
        setErrorMsg(email,'Enter a valid e-mail address');
    }
    else{
    setSuccessMsg(email);
    }

    //PHONE validation
    if(phoneVal===""){
        setErrorMsg(phone,'Phone cannot be blank');
    }
    else if (phoneVal.length!=10){
        setErrorMsg(phone,'Enter a valid phone numnber');
    }
    else{
    setSuccessMsg(phone);
    }

    //password validation
    if(passwordVal===""){
        setErrorMsg(password,'Password cannot be blank');
    }
    else if (passwordVal.length<=5){
        setErrorMsg(password,'Password Must be atleast 6 character long');
    }
    else{
    setSuccessMsg(password);
    }

    // confirm password validation
    if(passwordVal!=cpasswordVal){
        setErrorMsg(cpassword,'Passwords are not matching');
    }
    else if (cpasswordVal==""){
        setErrorMsg(cpassword,'Please enter password');
    }
    else{
    setSuccessMsg(cpassword);
    }
    finalMsg();
}
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // console.log(small);
    // small.classList.add("error");
    formControl.className=" wrapper error";

    small.innerText=errormsgs;
    // console.log(small.classList);
    // small.style.display="block"
}

function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className=" wrapper success";

}