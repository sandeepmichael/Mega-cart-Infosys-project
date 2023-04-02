function validate(){

let user = document.getElementById('username').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('mobno').value;
let passw = document.getElementById('password').value;
let cpassw = document.getElementById('confirmpassword').value;

if(user==""){
    document.getElementById('user').innerHTML="please provide username";
    return false;
}

let emailvalidation = new RegExp("(?=.@*)(?=.+.com)");

if(!email.match(emailvalidation)){
    document.getElementById('emailvalid').innerHTML="please enter valid email";
    return false;
}else {
    //alert("success");
   // return true;
}
let phoneNumberPattern = new RegExp("(?=[0-9]{10})"); 
if(!phone.match(phoneNumberPattern)){
    document.getElementById('numbermob').innerHTML="please enter valid mobileno";
    return false;
}
let passworPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; //firstuppercaseletterthensmallthennumber
if(!passw.match(passworPattern)){
    document.getElementById('pswrd').innerHTML="please enter valid password";
    return false;
}
if(cpassw!=passw){
    document.getElementById('cnfrmpswrd').innerHTML="passwords do not match";
    return false;
}

localStorage.setItem('name', user);
localStorage.setItem('password', passw);

//const getuser = localStorage.getItem("name");
//console.log(getuser);
alert('sign up successfull!you can login now')



}
function loginvalidation(){
    //event.preventDefault();
   let user = document.getElementById('username').value;
   let passwrd = document.getElementById('password').value;

   let getuser = localStorage.getItem('name');
   let getpswrd = localStorage.getItem('password');
 if(user!=getuser){
    document.getElementById('user1').innerHTML = "invalid username";
    return false;
 }
 if(passwrd!=getpswrd){
    document.getElementById('pswrd1').innerHTML="invalid password";
    return false;
 }
  

// alert("login success")
if(user==getuser && passwrd==getpswrd){
    window.location.assign('main.html')
    alert('login success')
}else{
    alert("invalid information");
}
 //window.location.replace("/main.html")

 

}


let getuserformain = localStorage.getItem('name');

const x = document.getElementById('nameformain');

x.innerHTML=`Dear ${getuserformain}! Welcome to MegaCart`

const date = new Date();
//console.log(date);
document.getElementById("date").innerHTML=date;





//
function Logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    window.location.assign('login.html')
    alert('logout successfully')
}


//

const imgitems = document.getElementsByTagName('img');
console.log(imgitems)
const allimgitems = [
     {
    "itemname" : "shirt",
    "cost" : 700.00,
    "Image" : "./images/clothing.jpg",
    "DaystoDeliver" : "3 days",
}, {
    "itemname": "adidas sandals",
    "cost" : 1000.12,
    "Image" : "./images/footwear.jpg",
    "DaystoDeliver" : "5 days",
}, {
    "itemname": "polo deodrant",
    "cost" : 500.12,
    "Image" : "./images/health.jpg",

    "DaystoDeliver" : "2 days",
},{
    "itemname": "wildcraft bag",
    "cost" : 1500.12,
    "Image" : "./images/school.jpg",
"DaystoDeliver" : "6 days",
}
];
//console.log(itemname);

for(let i=0;i<imgitems.length;i++){
    imgitems[i].addEventListener("click", function (){
        
        alert(`1 ${imgitems[i].alt} will be added`);
          localStorage.setItem("items", JSON.stringify(allimgitems[i]));



            
        })
    }
  

// cart page

function viewcartbtn(){
    // localStorage.getItem("name");
     window.location.assign('buyitem.html');
 }
//console.log(date);
//document.getElementById('date2').innerHTML=newdate;
 

//let getuserforcart = localStorage.getItem('name');



//let getuserforcartpage = localStorage.getItem("name");



