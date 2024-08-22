let YES = document.querySelector('#YES')
let NO = document.querySelector('#NO')
let MarriageBtn = document.querySelector('.MarriageBtn')
let tryAgain = document.querySelector('.tryAgain')
let SoulmateHead = document.querySelector('.SoulmateHead');
let hrs = document.querySelectorAll('hr')

let random = function(){
    let rand=Math.round(Math.random()*255);
    return rand;
}
    
function colorChanger(){
    let r = random();
    let g = random();
    let b = random();
    // left.style.border = `2px solid rgb(${r},${g},${b})`;
    SoulmateHead.style.border = `.5px solid rgb(${r},${g},${b})`
     hrs.forEach(hr => {
        hr.style.border = `1px solid rgb(${r},${g},${b})`;
    });
    
}

YES.addEventListener('click',function(){
    let parentVideo = document.querySelector('.congrats')
    let video = parentVideo.firstElementChild;
    parentVideo.style.backgroundcolor='black'
    parentVideo.style.display='block'
    parentVideo.style.display='flex'
    video.style.display='block'
    let rightLeft = document.querySelector('.right-left');
    rightLeft.style.display='none'
    
    let parentDiv = YES.parentNode
    parentDiv.style.display='none'
    let myInterval = setInterval(colorChanger,100);
    NO.addEventListener('click',function(){
        clearInterval(myInterval);
    })
})

MarriageBtn.addEventListener('click',()=>{
    window.location.reload();
})
tryAgain.addEventListener('click',()=>{
    window.location.reload();
})





let msg = document.querySelector('.containerFND');
let soulmateBTN = document.querySelector('.soulmateBtn');
soulmateBTN.addEventListener('click',()=>{
    let soulmateName = document.querySelector('.soulmatename');
    let yourName = document.querySelector('.yourname');
    
    if(soulmateName.value=='A' && yourName.value=='B' || soulmateName.value=='B' && yourName.value=='A'){
        msg.style.display = 'block';
        soulmateBTN.style.display='none'
        tryAgain.style.display='block'
    }else if(soulmateName.value!=='A' && yourName.value!=='B' || soulmateName.value!=='B' && yourName.value!=='A'){
        tryAgain.style.display='block'
        msg.style.display = 'block';
        soulmateBTN.style.display='none'
        msg.innerHTML='Please Enter Valid Names 🙂'
    }
    if(soulmateName.value==="" && yourName.value===''){
        tryAgain.style.display='block'
        msg.style.display = 'block';
        soulmateBTN.style.display='none'
        msg.innerHTML='Empty Names ☹'
    }
    if(soulmateName.value==="" && yourName.value!==''){
        tryAgain.style.display='block'
        msg.style.display = 'block';
        soulmateBTN.style.display='none'
        msg.innerHTML='Please Enter Your Soulmate Name 🥀'
    }
    if(soulmateName.value!=="" && yourName.value===''){
        tryAgain.style.display='block'
        msg.style.display = 'block';
        soulmateBTN.style.display='none'
        msg.innerHTML='Please Enter Your Name 😈'
    }

})


function positionChange(div){
    let maxHeight = 30;

    div.style.top=Math.round(Math.random()*maxHeight)+"vw";
    div.style.bottom=Math.round(Math.random()*maxHeight)+"vw";
    div.style.left=Math.round(Math.random()*maxHeight)+"vw";
    div.style.right=Math.round(Math.random()*maxHeight)+"vw";
}
NO.addEventListener('click',()=>{
    let div = NO.parentNode;
    positionChange(div);
})


