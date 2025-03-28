document.getElementById("menu-btn").addEventListener("click", function ()
{
    document.getElementById("menu").classList.toggle("hidden");
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}