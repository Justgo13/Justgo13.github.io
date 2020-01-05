var navItem = document.querySelectorAll(".nav-item");

for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("mouseover", function() {
        this.classList.add("hover");
    })

    navItem[i].addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    })
}   