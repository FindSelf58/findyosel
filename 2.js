for(var i=1;i<6;i++){
    document.querySelector(".per"+i).innerHTML=localStorage.getItem('st'+i)+"%";
    document.querySelector(".kind"+i).innerHTML=localStorage.getItem('stz'+i);
}