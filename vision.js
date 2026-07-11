const addTimec = setTimeout(()=>{
    document.getElementById("pop_up").classList.add("active")
}, 3000)

function close_btn(){
    document.getElementById("pop_up").classList.remove("active")
}