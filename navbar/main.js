const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function () {
    /*
    let value = navbarLinks.classList.contains('.navbar__collapse');
    console.log(value);

    (value ? navbarLinks.classList.remove('navbar__collapse') :
        navbarLinks.classList.add('navbar__collapse'))
*/
    navbarLinks.classList.toggle('navbar__collapse');
    navbarBtn.classList.toggle('change');

})