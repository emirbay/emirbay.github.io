document.addEventListener("DOMContentLoaded", function(){
    (localStorage.getItem("theme-x") == 'dark') ? toggleDarkLight() : null
    a();
});

function changeStylesTheme(){
    toggleDarkLight();
    (localStorage.getItem("theme-x") != 'dark') ? localStorage.setItem('theme-x', 'dark') : localStorage.setItem('theme-x', 'light');
    a();
}
 
 function toggleDarkLight() {
    document.body.classList.toggle('dark');
    document.getElementById("svg_background").classList.toggle('cls-2-night');
    document.getElementById("mjesec_sjaj").classList.toggle('cls-15-night');
    document.getElementById("tree_body").classList.toggle('cls-52-night');
    document.getElementById("podloga").classList.toggle('cls-19-night'); 
    document.getElementById("skills").classList.toggle('skill_dark'); 
 }

 let a = showOwlEyes=>{
    (localStorage.getItem("theme-x") != 'dark') ? document.getElementById("o_eyes").style.display = "none" : document.getElementById("o_eyes").style.display = "";
    (localStorage.getItem("theme-x") != 'dark') ? document.getElementById("o_eyes2").style.display = "none" : document.getElementById("o_eyes2").style.display = "";
}

/*
 if (localStorage.getItem("theme-x") != 'dark') {
        document.getElementById("o_eyes").style.display = "none";
        document.getElementById("o_eyes2").style.display = "none"
    } else {
        document.getElementById("o_eyes").style.display = "";
        document.getElementById("o_eyes2").style.display = ""
    }
*/