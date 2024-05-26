function topnavBar() {
    window.addEventListener('scroll', e=> {
        let navbar = document.getElementsById('topnav').classList
        let active_class = "navbar_scrolled!"
    
        if (pageYOffset > 400) navbar.add(active_class)
        else navbar.remove(active_class)
    });
}

function smooothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        })
    }
}

topnavBar();
smooothScroll();