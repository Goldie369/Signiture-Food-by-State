async function getData(place){

}
document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
            x=j.clientX
            y=j.clientY
            document.getElementById("name").style.top=y-20+"px"
            document.getElementById("name").style.left=x+10+"px"
        }
        e.style.fill="pink"
document.getElementById("name").style.opacity=1
document.getElementById("foodState").innerText=e.getElementById

    
})

e.addEventListener("mouseleave",function(){
e.style.fill="#ececec"
document.getElementById("name").style.opacity=0
})
})
