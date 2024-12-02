document.querySelectorAll('#nav-icon, #nav-link').forEach(element => {
    element.addEventListener("click", () => {
        const navIconOpen = document.getElementById('nav-icon-open');
        const navIconClose = document.getElementById('nav-icon-close');
        const menuDiv = document.getElementById('nav-menu');
        const menuHeader = document.getElementById('nav-header');
        
        navIconOpen.classList.toggle('hidden');
        navIconClose.classList.toggle('hidden');
        menuDiv.classList.toggle('hidden');
        menuHeader.classList.toggle('bg-opacity-80');
    });
});