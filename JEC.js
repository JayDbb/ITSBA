var surrey = 4000;
var middlesex = 8000;
var cornwall = 5000;
var speedmid = 1;
var speedsur = 1;
var speedcor = 1;
var a =0;
var r =0;
var backtop = document.getElementById("backtotop");

const observervalues = new IntersectionObserver(enteries =>{
    
    enteries.forEach(entry => {
        if (entry.isIntersecting && a ==0) {
          count();

          a= 1;
        }
      });
    
});

const observebacktop = new IntersectionObserver(enteries =>{
    enteries.forEach(entry => {
        if (entry.isIntersecting){
            backtop.style.visibility = "hidden";
            console.log("caught")
        } else{
            backtop.style.visibility = "visible";
            console.log("catch")
        };
   

    })
})
observebacktop.observe(document.getElementById("logo"));
const observersect3 = new IntersectionObserver(enteries=>{
    enteries.forEach(entry => {
        if (entry.isIntersecting && r ==0) {
          sect3();
          r= 1;
        }
      });
   
})
observervalues.observe(document.querySelector(".values"))
observersect3.observe(document.querySelector(".sect3"))

function count(){

    var interval = setInterval(function(){
    cornwall += 12;
    document.getElementById('corn').innerHTML = cornwall.toLocaleString() ;

    if (cornwall == 8000){clearInterval(interval)}
},speedcor);

var intervalsur = setInterval(function(){
    surrey += 12;
    document.getElementById('sur').innerHTML = surrey.toLocaleString() ;

    if (surrey == 7000){clearInterval(intervalsur)}
},speedsur);
var intervalmid = setInterval(function(){
    middlesex += 8;
    document.getElementById('middle').innerHTML = middlesex.toLocaleString() ;

    if (middlesex == 10000){clearInterval(intervalmid)}

},speedmid);
};


//real talk idk what happening here im just afraid it woont work if i delete
function sect3(){
    var b =0;
    $(window).scroll(function() {
    var oTop = $('#container-2').offset().top - window.innerHeight;
    if (b == 0 && $(window).scrollTop() > oTop) {
        document.getElementById("container-2").style.animation= "electionday 2s";
    }
    b=1;
    });

    var e =0;
    $(window).scroll(function() {
    var oTop = $(window).scrollTop() - $('#container-2').offset().top;
    if (e == 0 && window.innerHeight >= oTop) {
        document.getElementById("container2h2").style.animation= "electiontext 2s";
        document.getElementById('container2p').style.animation="electiontext 2s";
        document.getElementById('electionbtnattr').style.animation="electiontext 2s";
    }
    e=1;
    });
}
