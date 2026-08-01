const music = document.getElementById("music");
const typingText = document.getElementById("typingText");
const continueBtn = document.getElementById("continueBtn");

const letter = `My Lovely Gowthami ❤️

Happy Girlfriend's Day, my love.

I may not always find the perfect words, but every beat of my heart reminds me how lucky I am to have you in my life.

Your smile brightens my darkest days.
Your laughter is my favorite melody.

Thank you for standing by me.

I promise to keep loving you forever.

I Love You ❤️

— Yours Always,
Uttam 🌷`;

let index = 0;

function hideAllScenes(){

document.querySelectorAll(".scene").forEach(scene=>{

scene.classList.remove("active");

});

}

function openLove(){

hideAllScenes();

document.getElementById("scene2").classList.add("active");

music.play().catch(()=>{});

typingText.innerHTML="";

continueBtn.style.display="none";

index=0;

typeLetter();

}

function typeLetter(){

if(index < letter.length){

const ch = letter.charAt(index);

if(ch=="\n"){

typingText.innerHTML += "<br>";

}else{

typingText.innerHTML += ch;

}

index++;

setTimeout(typeLetter,25);

}else{

continueBtn.style.display="inline-block";

}

                        }
function showScene3(){

hideAllScenes();

document.getElementById("scene3").classList.add("active");

}

function showScene4(){

hideAllScenes();

document.getElementById("scene4").classList.add("active");

}

/* Floating sparkles */

const sparkleIcons=["✨","💖","🌸","🌷"];

for(let i=0;i<25;i++){

const s=document.createElement("div");

s.innerHTML=sparkleIcons[Math.floor(Math.random()*sparkleIcons.length)];

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top="-50px";

s.style.fontSize=(15+Math.random()*18)+"px";

s.style.pointerEvents="none";

s.style.opacity=".8";

s.style.animation="fall "+(5+Math.random()*5)+"s linear infinite";

s.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(s);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
