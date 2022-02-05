console.log('Om/Nayal Sunar Browser Successfully executed JavaScript');
let newd;
let time;
setInterval(() => {
   newd = new Date();
   time = newd.getHours()+":"+newd.getMinutes()+":"+newd.getSeconds();
   document.getElementById('realtime').innerHTML = time;
}, 1000);
function browseft(){
    setInterval(() => {
    document.getElementById('fulltime').innerHTML = "Full time of your Location:<br>"+newd;
    }, 1000);
}
