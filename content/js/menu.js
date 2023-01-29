const hamButton=document.getElementById("hamburger-open")
    hamButton.addEventListener("click", function () {
        console.log('clicked')
        const hamOpen = document.getElementById("hamburger-open");
        hamOpen.style.display = "none";
        const hamClose = document.getElementById("hamburger-close");
        hamClose.style.display = "block";
        const openMenu = document.getElementById("nav-hamburger");
        openMenu.classList.remove('nav-menu-hide');

        
        
            const overlayOn = document.getElementById("overlay");
            overlayOn.classList.add("overlay");
        
        
        
    });

const closeNavButton = document.getElementById("hamburger-close")
closeNavButton.addEventListener("click", function () {
    console.log('clicked')
    const hamOpen = document.getElementById("hamburger-open");
    hamOpen.style.display = "block";
    const hamClose = document.getElementById("hamburger-close");
    hamClose.style.display = "none";
    const closeMenu = document.getElementById("nav-hamburger");
    closeMenu.classList.add('nav-menu-hide');
    const overlayOff = document.getElementById("overlay");
    overlayOff.classList.remove("overlay")
});



