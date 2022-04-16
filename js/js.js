


















(function ($) {
    $(document).ready(function(){
        $('.container-slides').flickity({
                    // options
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        prevNextButtons: true,
        accessibility: false,
        pageDots: false,
        lazyLoad: true,
        groupCells: true,
        });
    });
})(jQuery)



const navbtns=document.getElementById("navbtns");
const iconnav =document.getElementById("iconnav");
const navbardisplay=document.getElementById("navbardisplay");
const navx=document.getElementById("nav-x");
iconnav.addEventListener("click", (eo) => {
    navbardisplay.style.display="block";
    iconnav.style.display="none";
    navx.style.display="block";
});


navx.addEventListener("click",(eo) => {
    navbardisplay.style.display="none";
    iconnav.style.display="block";
    navx.style.display="none";

})