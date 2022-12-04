var menubarElem = document.querySelector(".toggle-menu"),
    // navbar <ul></ul>
    ulElem = document.querySelector(".list-item") ,
    // all "anchors" of navbar links
    anchorElems = document.querySelectorAll(".link");
/* When click "menubar" , toggle navbar"<ul></ul>" */
menubarElem.addEventListener("click",function()
{
    ulElem.classList.toggle("appear");
});
/* +++++++++++++++++++++++++ navbar links +++++++++++++++++++++++++ */
/* add "active" class to "clicked link"  */
anchorElems.forEach(anchor => {
    anchor.addEventListener("click",function()
    {
        anchorElems.forEach( linkVar => linkVar.classList.remove("active") );
        this.classList.add("active");
    });
});
/* +++++++++++++++++++++++++++++++++++++++ Design Section ++++++++++++++++++++++++ */
var designElem = document.querySelector(".design") ,
    textElem = designElem.querySelector(".text") ,
    imageElem = designElem.querySelector(".image");

document.addEventListener("scroll",function(){
    console.log( scrollY   );
   if ( scrollY  >= 1200 )
   {
        setTimeout( function(){
            textElem.style.transform = "translateX(0px)";
            } , 500
        );
        setTimeout( function(){
            imageElem.style.transform = "translateX(0px)";
            } , 1000
        );
   }
   else { return ; }
});
