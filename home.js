const link = document.querySelectorAll(".nav_bar ul li a")
link.forEach(link=>{
    link.addEventListener("click", function(){
        link.forEach( item => item.classList.remove("active"))
        this.classList.add("active")
    })
})