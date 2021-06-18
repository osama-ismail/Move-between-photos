var im=Array.from(document.querySelectorAll(".item img "));
var lightBoxContainer=document.querySelector(".light-box-container");
// console.log(lightBoxContainer);
for(var i=0;i<im.length;i++){
    im[i].addEventListener("click",addEventBox);
}
var imgIndex;
var x;
function addEventBox(e){
    
lightBoxContainer.style.transform= "scale(1)";

x=e.target.src;
lightBoxContainer.firstElementChild.style.backgroundImage= "url("+x+")";
lightBoxContainer.firstElementChild.style.backgroundRepeat= "no-repeat";
imgIndex=im.indexOf(e.target);
console.log(imgIndex);
}
var imgBody=document.getElementById("imgBody");
var stop=document.getElementById("stop");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var lightBoxContainer2=document.getElementById("con");

stop.addEventListener("click",function(){
    lightBoxContainer.style.transform= "scale(0)";
} );
next.addEventListener("click",goNext);
prev.addEventListener("click",goPrev);
document.addEventListener("keydown",addEventKey);

document.addEventListener("mousemove",addEventMouse);
lightBoxContainer2.addEventListener("mouseup",addEventMouseClick);

function goNext(){
    imgIndex++;
    if(imgIndex==im.length){
        imgIndex=0;
        
}
lightBoxContainer.firstElementChild.style.backgroundImage= "url("+im[imgIndex].src+")";
}
function goPrev(){
    imgIndex--;
    if(imgIndex==-1){
        imgIndex=5;
        
}
lightBoxContainer.firstElementChild.style.backgroundImage= "url("+im[imgIndex].src+")";

}
function addEventKey(e){
    if(e.keyCode==39){
        goNext();

    }
    else if(e.keyCode==37){
        goPrev();

    }
    else if(e.code=="Escape"){
        lightBoxContainer.style.display="none";

        

    }
    // console.log(e);
}
function addEventMouse(e){
    var x97=e.screenX-5;
    var x99=e.screenY-71;
    // imgBody.style.left=x97 +"px";

    // imgBody.style.top=x99 +"px";
    console.log(e);

}
function addEventMouseClick(e){

    var x97=e.screenX-5;
    var x99=e.screenY-71;
    if((x97>0 && x97<460)||(x97>848)){
        lightBoxContainer.style.transform= "scale(0)";

    }

}



