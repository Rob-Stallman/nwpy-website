/*****************************************************************************/
/*
/* Module Importing
/*
/*****************************************************************************/

import { evaluationGroups } from "./EvaluationGroups.js";
alert(evaluationGroups[0].recycleStrategy);
/*****************************************************************************/
/*
/* Catalog
/*
/*****************************************************************************/

const catalogItems = document.getElementsByClassName("catalog-item");
const compareButtonElems = document.getElementsByClassName("compare-button");

for (let i=0; i<catalogItems.length; i++) {
    catalogItems[i].onmouseenter = function() {
        compareButtonElems[i].style.display = "block";
    };
    catalogItems[i].onmouseleave = function() {
        compareButtonElems[i].style.display = "";
    };
    const origText = catalogItems[i].querySelector('a').innerHTML;
    catalogItems[i].querySelector('a').onmouseenter = function() {
        catalogItems[i].querySelector('a').innerHTML = "See More";
    };
    catalogItems[i].querySelector('a').onmouseleave = function() {
        catalogItems[i].querySelector('a').innerHTML = origText;
    };
}

/*****************************************************************************/
/*
/* Filter
/*
/*****************************************************************************/
// Create element objects for every filter button
const OT = document.getElementById('OT');
OT.stringToInclude = "OT";
const LR = document.getElementById('LR');
LR.stringToInclude = "L";
const CR = document.getElementById('CR');
CR.stringToInclude = "C";
const critical = document.getElementById('critical');
critical.stringToInclude = "C";
const subCritical = document.getElementById('sub-critical');
subCritical.stringToInclude = "S";
const thermal = document.getElementById('thermal');
thermal.stringToInclude = "T";
const fast = document.getElementById('fast');
fast.stringToInclude = "F";
const feedU = document.getElementById('FE_U');
feedU.stringToInclude = "U";
const feedTh = document.getElementById('FE_Th');
feedTh.stringToInclude = "Th";
const feedUTh = document.getElementById('FE_UTh');
feedUTh.stringToInclude = "UTh";
const recycleU = document.getElementById('RE_U');
recycleU.stringToInclude = "U3";
const recyclePu = document.getElementById('RE_Pu');
recyclePu.stringToInclude = "Pu";
const recycleTRU = document.getElementById('RE_TRU');
recycleTRU.stringToInclude = "TRU";
const encrichYes = document.getElementById('Yes');
encrichYes.stringToInclude = "Y";
const encrichNo = document.getElementById('No');
encrichNo.stringToInclude = "N";

// Hide and display catalog items based on properties
const filterOptions = {
    recycleStrategy: [OT, LR, CR],
    irradiationEnvironment: [critical, subCritical],
    spectrum: [thermal, fast],
    feedElement: [feedU, feedTh, feedUTh],
    recycledElement: [recycleU, recyclePu, recycleTRU],
    enrichment: [encrichYes, encrichNo]
};

function hideEG(optionObj, feature) {
    evaluationGroups.forEach(group => {
        if(!group[feature].includes(optionObj.stringToInclude)) {
            group.style.display = 'none';
        };
    });
};

function showEG(optionObj, feature) {
    evaluationGroups.forEach(group => {
        if(!group[feature].includes(optionObj.stringToInclude)) {
            group.style.display = '';
        };
    });
};

function filterGroups() {
    for (const discriminator in filterOptions) {
        filterOptions[discriminator].forEach(button => {
            button.onclick = function() {
                if(button.checked) {
                    hideEG(button, discriminator);
                } else {
                    showEG(button, discriminator);
                };
            };
        });
    };
};
filterGroups();
