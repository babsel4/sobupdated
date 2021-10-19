const phases=document.getElementsByClassName("phase1")
let phasePosition=0
const maxPhase= phases.length-1
const prevBtn=document.getElementById("prev")
const nextBtn=document.getElementById("next")
const switchBtns=document.getElementsByClassName("phase-switch")

const updateFunc=function(){
    for(phase of phases){
        phase.classList.remove("active")
    }
    for(switchBtn of switchBtns){
        switchBtn.classList.remove("active-phase")
    }
    phases[phasePosition].classList.add("active")
    switchBtns[phasePosition].classList.add("active-phase")
}
for (let i = 0; i < switchBtns.length; i++) {
    switchBtns[i].addEventListener("click", function(){
        phasePosition=i;
        updateFunc();
    })
    
}
const prevFunc=function(){
    if (phasePosition < 1){
        phasePosition=maxPhase
    }
    else{
        phasePosition--
    }
    updateFunc()
}
const nextFunc=function(){
    
    if (phasePosition === maxPhase){
        phasePosition=0
    }
    else{
        phasePosition++
    }
    updateFunc()
}


prevBtn.addEventListener("click", function(){
    prevFunc();
} )


nextBtn.addEventListener("click",function(){
    nextFunc();
})

//animated banner background
const backgrounds= document.getElementsByClassName("banner-img")
const bgLenght=backgrounds.length
let bannerPosition=0;
const updateImg= function(){
    for(background of backgrounds){
        background.classList.remove("banner-active");
    }
    backgrounds[bannerPosition].classList.add('banner-active')
}
const positionIncrement= function(){
    if(bannerPosition===bgLenght-1){
        bannerPosition=0
    }
    else if(bannerPosition<0){
        bannerPosition=bgLenght-1
    }
    else{
        bannerPosition++
    }
}
setInterval( ()  => {
    positionIncrement()
    updateImg()
}, 3000);



