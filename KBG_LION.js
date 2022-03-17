const p = document.querySelector("div.imgswap:first-child p")


function clicked() {
    alert("This is doesn't work, I'm sorry!! :( ");
}


function windowResize() {
    document.body.style.backgroundColor = "#7d8084";
}

function offLine1() {
    alert("You have to check the WIFI!!");
}

function onLine1() {
    alert("WIFI works!!!! >.o ");
}

p.addEventListener("click", clicked);

window.addEventListener("resize", windowResize);
window.addEventListener("offline", offLine1);
window.addEventListener("online", onLine1);