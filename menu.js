function menu(){
    document.getElementById("dropD").classList.add("show");
}

window.onclick = function (event){
    if(!event.target.classList.contains('dropBtn') && !event.target.parentNode.classList.contains('dropBtn')){
        document.getElementById("dropD").classList.remove("show");
    }
}

