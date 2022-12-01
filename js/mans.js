let slickt = document.querySelector(".scroll i")
window.onscroll = function(){
console.log(this.scrollY)
   if(this.scrollY >= 1500 ){
    slickt.style.display= "block";
   }
   if(this.scrollY <= 1500 ){
    slickt.style.display= "none";
   }
}
slickt.onclick = function(){
    window.scrollTo({
        top : 0 ,
        behavior :"smooth" 
    
    })  
}
