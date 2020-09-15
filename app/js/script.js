// variables from HTML
const body = document.querySelector('body');
// header variables
const header = document.querySelector('.header');
const btnBurger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.header__menu');
// hero variables


btnBurger.addEventListener("click", ()=>
{
    if (header.classList.contains("open")) //close the menu
    {
        body.classList.remove('disableScroll'); // enable scrolling
        header.classList.remove("open"); // burger appear
        header.classList.add("close"); // overlay disappear
    }
    else // show the menu
    {
        body.classList.add('disableScroll'); //disable scrolling
        header.classList.add("open"); // burger transforms
        header.classList.remove("close"); // overlay appears
    }
})