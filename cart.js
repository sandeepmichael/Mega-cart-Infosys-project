
 let getuserforcart = localStorage.getItem('name');
 document.getElementById('nameforcart').innerHTML=`Dear ${getuserforcart}! Here's the summary of your bill..`;

 const date = new Date();
 document.getElementById('date2').innerHTML=date;

 let items = JSON.parse(localStorage.getItem("items"));
 console.log(items);
 document.getElementById("image").innerHTML = items ? `<img src=${items.Image} />` : null;
 document.getElementById('list1').innerHTML = items ? `you bought ${items.itemname}` : 0;
 document.getElementById('list2').innerHTML = items ? `the cost is :  ${items.cost}`: 0;
 document.getElementById('list3').innerHTML = items ? `Estimate Delivery : ${items.DaystoDeliver}` : 0;

 function Logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    window.location.assign('login.html')
    alert('loggedout successfully')
}
