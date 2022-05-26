// Highlight Nav Menu on scroll 
let sections=document.querySelectorAll("section")
let nav_li=document.querySelectorAll("nav ul li")
window.addEventListener("scroll",e=>{

let current='';
sections.forEach(section=>{

let sectionTop=section.offsetTop;
// console.log(sectionTop)
let height=section.clientHeight
if(scrollY>=(sectionTop-height/2)){
   current=section.getAttribute("id")
}
})
// console.log(current)
nav_li.forEach(li=>{
   li.classList.remove("active");
   if(li.classList.contains(current)){
      li.classList.add("active")
   }
})})
// 