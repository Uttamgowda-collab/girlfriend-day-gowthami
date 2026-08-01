const music = document.getElementById("music");

const typingText = document.getElementById("typingText");

const continueBtn = document.getElementById("continueBtn");

const letter = `Happy Girlfriend's Day, my love.

I may not always find the perfect words, but every beat of my heart reminds me how lucky I am to have you in my life.

Your smile brightens my darkest days, your laughter is my favorite melody, and your love is the greatest gift I've ever received.

Thank you for standing by me, believing in me, and making every moment special.

I promise to keep loving you, respecting you, and creating beautiful memories with you.

I hope this little surprise brings a smile to your face because your smile means everything to me.

I Love You Forever ❤️

— Yours Always,

Uttam 🌷`;

let index = 0;

function openLove(){

document.getElementById("scene1").classList.remove("active");

document.getElementById("scene2").classList.add("active");

music.play().catch(()=>{});

typeLetter();

}

function typeLetter(){

if(index < letter.length){

if(letter.charAt(index)=="\n"){

typingText.innerHTML += "<br>";

}else{

typingText.innerHTML += letter.charAt(index);

}

index++;

setTimeout(typeLetter,35);

}else{

continueBtn.style.display="inline-block";

}

}
function showScene3(){

document.getElementById("scene2").classList.remove("active");

document.getElementById("scene3").classList.add("active");

setTimeout(showScene4,8000);

}

function showScene4(){

document.getElementById("scene3").classList.remove("active");

document.getElementById("scene4").classList.add("active");

}

/* Sparkles */

const emojis=["✨","💖","🌸"];

for(let i=0;i<30;i++){

const s=document.createElement("div");

s.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top="-20px";

s.style.fontSize=(15+Math.random()*20)+"px";

s.style.opacity=".8";

s.style.pointerEvents="none";

s.style.animation="fall "+(6+Math.random()*5)+"s linear infinite";

s.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(s);

}

/* Falling animation */

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
