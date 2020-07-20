/*****************************************************************************/
/*
/* Catalog
/*
/*****************************************************************************/

const catalogItems = document.getElementsByClassName("catalog-item");
const compareButtons = document.getElementsByClassName("compare-button");

for(let i=0; i<catalogItems.length; i++) {
    catalogItems[i].onmouseenter = function() {
        compareButtons[i].style.display = "block";
    }
    catalogItems[i].onmouseleave = function() {
        compareButtons[i].style.display = "";
    }
}
