const listItems = document.querySelectorAll("button.selection");

const allImages = document.querySelectorAll(".main .image-selections .images");

function toggleActiveClass( active ){

    listItems.forEach( function( item ) {
        item.classList.remove("active");
    })
    
    active.classList.add("active")

}

function toggleImages ( dataClass ) {

if( dataClass === "all"){

    allImages.forEach( function (){

        image.style.display="block";

    } )
} else {

    allImages.forEach (  image => { 
        image.dataset.class === dataClass ?
        image.style.display = "block":
        image.style.display = "none" })


}

} //END OF TOGGLEIMAGES FUNCTION


listItems.forEach( function( item ){

    item.addEventListener("click", function (){
        toggleActiveClass( item );
        toggleImages ( item.dataset.class);
    })
})