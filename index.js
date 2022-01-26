// console.log('Your JavaScript is running');
let newd;
let time;
setInterval(() => {
   newd = new Date();
   time = newd.getHours()+":"+newd.getMinutes()+":"+newd.getSeconds();
   document.getElementById('realtime').innerHTML = time; 
   document.getElementById('fulltime').innerHTML = newd;
}, 1000);