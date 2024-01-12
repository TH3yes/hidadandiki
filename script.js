var sectionOne = document.getElementById("sectionOne").style;
var sectionTwo = document.getElementById("sectionTwo").style;
var bungaTop = document.getElementById("bungaTop").style;
var bungaBottom = document.getElementById("bungaBottom").style;
var myAudio = document.getElementById("myAudio");
var openI = document.getElementById("openI");

var playAndPause =  document.getElementById("play-pause");
playAndPause.addEventListener("click", function(){
    playAndPause.classList.toggle("fa-pause-circle");
    let text = playAndPause.getAttribute("class");
    var z = text.length;
    console.log(z);
    if (z === 17){
        myAudio.pause();
    } else {
        myAudio.play();
    }
})
openI.addEventListener("click", function(){
    sectionOne.transition = "1s";
    sectionOne.height = "0px";
    sectionOne.border = "none";
    document.body.style.overflow = "scroll";
    sectionTwo.display = "flex";
    myAudio.play();
    playAndPause.classList.toggle("fa-pause-circle");
})
const persentValue = document.querySelector(".animate-loading");
var percent = 0;
var loop = setInterval(() => {
    if (percent != 100) {
        percent++
        persentValue.innerText = percent + "%";
    } else {
        clearInterval(loop);
    }
}, 25)
var countDownDate = new Date("feb 18, 2024 08:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    
    var boxTime = document.getElementsByClassName("boxTime")[0];
    var boxDays = document.getElementById("days");
    var boxHours = document.getElementById("hours");
    var boxMinutes = document.getElementById("minutes");
    var boxSeconds = document.getElementById("seconds");
    boxDays.innerHTML = days + " Days";
    boxHours.innerHTML = hours + " Hours";
    boxMinutes.innerHTML = minutes + " Minutes";
    boxSeconds.innerHTML = seconds + " Seconds";

    if (distance < 0){
        clearInterval(x);
        boxDays.innerHTML = "HAPPY";
        boxHours.innerHTML = "WEDDING";
        boxMinutes.innerHTML = "HIDA";
        boxSeconds.innerHTML = "DIKI";
        
    }
})
function onscroll() {
    var onscroll = document.querySelectorAll(".onscroll");
    for (var i = 0; i < onscroll.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = onscroll[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            onscroll[i].classList.add("active");
        } else {
            onscroll[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", onscroll);
// DARK MODE
var darkMode = document.getElementById("darkMode");
var boxADM = document.getElementById("boxAkad");
var boxRDM = document.getElementById("boxResepsi");
var navbar = document.getElementById("myDiv");
darkMode.addEventListener("click", function(){
    navbar.classList.toggle("darkmode");
    darkMode.classList.toggle("activeBtn");
    boxADM.classList.toggle("darkmode");
    boxRDM.classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
})

var gift = document.getElementById("gift");
var boxBarcode = document.getElementsByClassName("box-barcode");

gift.addEventListener("click", function(){
    boxBarcode[0].classList.toggle("hideBarcode");
    var text = boxBarcode[0].getAttribute("class")
    var y = text.length;
    console.log(text.length);
    if (y === 23 ){
        document.getElementsByClassName("fa-gift")[0].style.color = "#d9b4ff";
    } else {
        document.getElementsByClassName("fa-gift")[0].style.color = "purple";
    }
})
