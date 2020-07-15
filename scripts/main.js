/*****************************************************************************/
/*
/* Catelog
/*
/*****************************************************************************/

let catalogEG01 = document.getElementById("catalog-EG01");
let compareButtonEG01 = document.getElementById("compare-EG01");

let showCompareButton = function() {
    compareButtonEG01.style.display = "block";
};

let hideCompareButton = function() {
    compareButtonEG01.style.display = "none";
}

catalogEG01.onmouseenter = showCompareButton;
catalogEG01.onmouseleave = hideCompareButton;
