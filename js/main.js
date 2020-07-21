window.onload = init()

function init() {
   toggleNav('.icon', '.main-menu'); 
}

function toggleNav(btnElement, navigation) {
    let btn = document.querySelector(btnElement);
    let nav = document.querySelector(navigation); 

    btn.addEventListener('click', function() {
        nav.classList.toggle('active')
        btn.classList.toggle('active')
    })
}