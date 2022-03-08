function toggleMenu() {
    let menubtn = document.getElementById("menubtn");
    let navlink = document.getElementById("navlinks");
    if (menubtn.classList.contains("menubtn-open") == true) {
        menubtn.classList.remove("cross-on");
        menubtn.classList.remove("menubtn-open");
        navlink.classList.remove("nav-links-open")
    } else {
        menubtn.classList.add("menubtn-open");
        navlink.classList.add("nav-links-open");
        menubtn.classList.add("cross-on");
    }
}