
function myFunction() {
    var element = document.getElementById("icon__taskbar-menu");
    var element2 = document.getElementById("icon__taskbar-close");
    var x = document.getElementById("menu-i4");
    if (x.style.display === "none") {
        x.style.display = "block";
        element.classList.add("disable");
        element2.classList.remove("disable");
    } else {
        x.style.display = "none";
        element.classList.remove("disable");
        element2.classList.add("disable");
    }
}
function myFunction2() {
    var element3 = document.getElementById("icon-search");
    var element4 = document.getElementById("icon-close");
    var x = document.getElementById("menu-search");
    if (x.style.display === "none") {
        x.style.display = "block";
        element3.classList.add("disable");
        element4.classList.remove("disable");
    } else {
        x.style.display = "none";
        element3.classList.remove("disable");
        element4.classList.add("disable");
    }
}