/*****************************************************************************/
/*
/* Module Importing
/*
/*****************************************************************************/

//const { evaluationGroups } = require("./evaluationGroups");

//import * as groups from "scripts/evaluationGroups.js"

/*****************************************************************************/
/*
/* Catalog
/*
/*****************************************************************************/

const catalogItems = document.getElementsByClassName("catalog-item");
const compareButtonElems = document.getElementsByClassName("compare-button");
const compareEG01 = document.getElementById('compare-EG01');
compareEG01.onclick = function() {
    if (compareEG01.checked) {
        compareButtonElems[0].style.display = "block !important";
    } else {
        compareButtonElems[0].style.display = "";
    }
}

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
/* Evaluation Group Properties
/*
/*****************************************************************************/

let evaluationGroups = [];
const EG01 = document.getElementById('EG01');
EG01.recycleStrategy = "OT";
EG01.irradiationEnvironment = "C";
EG01.spectrum = "T";
EG01.feedElement = "U";
EG01.recycledElement = "";
EG01.enrichment = "Y";
evaluationGroups.push(EG01);

const EG02 = document.getElementById('EG02');
EG02.recycleStrategy = "OT";
EG02.irradiationEnvironment = "C";
EG02.spectrum = "T";
EG02.feedElement = "U";
EG02.recycledElement = "";
EG02.enrichment = "Y";
evaluationGroups.push(EG02);

const EG03 = document.getElementById('EG03');
EG03.recycleStrategy = "OT";
EG03.irradiationEnvironment = "C";
EG03.spectrum = "T";
EG03.feedElement = "U";
EG03.recycledElement = "";
EG03.enrichment = "N";
evaluationGroups.push(EG03);

const EG04 = document.getElementById('EG04');
EG04.recycleStrategy = "OT";
EG04.irradiationEnvironment = "C";
EG04.spectrum = "F";
EG04.feedElement = "U";
EG04.recycledElement = "";
EG04.enrichment = "N";
evaluationGroups.push(EG04);

const EG05 = document.getElementById('EG05');
EG05.recycleStrategy = "OT";
EG05.irradiationEnvironment = "C";
EG05.spectrum = "T";
EG05.feedElement = "UTh";
EG05.recycledElement = "";
EG05.enrichment = "Y";
evaluationGroups.push(EG05);

const EG06 = document.getElementById('EG06');
EG06.recycleStrategy = "OT";
EG06.irradiationEnvironment = "S";
EG06.spectrum = "T";
EG06.feedElement = "Th";
EG06.recycledElement = "";
EG06.enrichment = "N";
evaluationGroups.push(EG06);

const EG07 = document.getElementById('EG07');
EG07.recycleStrategy = "OT";
EG07.irradiationEnvironment = "S";
EG07.spectrum = "F";
EG07.feedElement = "U";
EG07.recycledElement = "";
EG07.enrichment = "N";
evaluationGroups.push(EG07);

const EG08 = document.getElementById('EG08');
EG08.recycleStrategy = "OT";
EG08.irradiationEnvironment = "S";
EG08.spectrum = "F";
EG08.feedElement = "Th";
EG08.recycledElement = "";
EG08.enrichment = "N";
evaluationGroups.push(EG08);

const EG09 = document.getElementById('EG09');
EG09.recycleStrategy = "SL";
EG09.irradiationEnvironment = "C";
EG09.spectrum = "F";
EG09.feedElement = "U";
EG09.recycledElement = "TRU";
EG09.enrichment = "N";
evaluationGroups.push(EG09);

const EG10 = document.getElementById('EG10');
EG10.recycleStrategy = "SL";
EG10.irradiationEnvironment = "C";
EG10.spectrum = "T";
EG10.feedElement = "Th";
EG10.recycledElement = "U3";
EG10.enrichment = "N";
evaluationGroups.push(EG10);

const EG11 = document.getElementById('EG11');
EG11.recycleStrategy = "SL";
EG11.irradiationEnvironment = "C";
EG11.spectrum = "F";
EG11.feedElement = "UTh";
EG11.recycledElement = "U3";
EG11.enrichment = "Y";
evaluationGroups.push(EG11);

const EG12 = document.getElementById('EG12');
EG12.recycleStrategy = "ML";
EG12.irradiationEnvironment = "C";
EG12.spectrum = "T/T";
EG12.feedElement = "U";
EG12.recycledElement = "Pu";
EG12.enrichment = "N";
evaluationGroups.push(EG12);

const EG13 = document.getElementById('EG13');
EG13.recycleStrategy = "ML";
EG13.irradiationEnvironment = "C";
EG13.spectrum = "T/T";
EG13.feedElement = "U";
EG13.recycledElement = "Pu";
EG13.enrichment = "Y";
evaluationGroups.push(EG13);

const EG14 = document.getElementById('EG14');
EG14.recycleStrategy = "ML";
EG14.irradiationEnvironment = "C";
EG14.spectrum = "F/T";
EG14.feedElement = "U";
EG14.recycledElement = "Pu";
EG14.enrichment = "N";
evaluationGroups.push(EG14);

const EG15 = document.getElementById('EG15');
EG15.recycleStrategy = "ML";
EG15.irradiationEnvironment = "C";
EG15.spectrum = "T/F";
EG15.feedElement = "U";
EG15.recycledElement = "Pu";
EG15.enrichment = "Y";
evaluationGroups.push(EG15);

const EG16 = document.getElementById('EG16');
EG16.recycleStrategy = "ML";
EG16.irradiationEnvironment = "C/S";
EG16.spectrum = "T/F";
EG16.feedElement = "U";
EG16.recycledElement = "Pu";
EG16.enrichment = "Y";
evaluationGroups.push(EG16);

const EG17 = document.getElementById('EG17');
EG17.recycleStrategy = "ML";
EG17.irradiationEnvironment = "C";
EG17.spectrum = "T/T";
EG17.feedElement = "UTh";
EG17.recycledElement = "Pu";
EG17.enrichment = "Y";
evaluationGroups.push(EG17);

const EG18 = document.getElementById('EG18');
EG18.recycleStrategy = "ML";
EG18.irradiationEnvironment = "C";
EG18.spectrum = "T/T";
EG18.feedElement = "UTh";
EG18.recycledElement = "U3";
EG18.enrichment = "Y";
evaluationGroups.push(EG18);

const EG19 = document.getElementById('EG19');
EG19.recycleStrategy = "SC";
EG19.irradiationEnvironment = "C";
EG19.spectrum = "T";
EG19.feedElement = "U";
EG19.recycledElement = "Pu";
EG19.enrichment = "N";
evaluationGroups.push(EG19);

const EG20 = document.getElementById('EG20');
EG20.recycleStrategy = "SC";
EG20.irradiationEnvironment = "C";
EG20.spectrum = "T";
EG20.feedElement = "U";
EG20.recycledElement = "TRU";
EG20.enrichment = "N";
evaluationGroups.push(EG20);

const EG21 = document.getElementById('EG21');
EG21.recycleStrategy = "SC";
EG21.irradiationEnvironment = "C";
EG21.spectrum = "T";
EG21.feedElement = "U";
EG21.recycledElement = "Pu";
EG21.enrichment = "Y";
evaluationGroups.push(EG21);

const EG22 = document.getElementById('EG22');
EG22.recycleStrategy = "SC";
EG22.irradiationEnvironment = "C";
EG22.spectrum = "T";
EG22.feedElement = "U";
EG22.recycledElement = "TRU";
EG22.enrichment = "Y";
evaluationGroups.push(EG22);

const EG23 = document.getElementById('EG23');
EG23.recycleStrategy = "SC";
EG23.irradiationEnvironment = "C";
EG23.spectrum = "F";
EG23.feedElement = "U";
EG23.recycledElement = "Pu";
EG23.enrichment = "N";
evaluationGroups.push(EG23);

const EG24 = document.getElementById('EG24');
EG24.recycleStrategy = "SC";
EG24.irradiationEnvironment = "C";
EG24.spectrum = "F";
EG24.feedElement = "U";
EG24.recycledElement = "TRU";
EG24.enrichment = "N";
evaluationGroups.push(EG24);

const EG25 = document.getElementById('EG25');
EG25.recycleStrategy = "SC";
EG25.irradiationEnvironment = "C";
EG25.spectrum = "T";
EG25.feedElement = "UTh";
EG25.recycledElement = "U3";
EG25.enrichment = "Y";
evaluationGroups.push(EG25);

const EG26 = document.getElementById('EG26');
EG26.recycleStrategy = "SC";
EG26.irradiationEnvironment = "C";
EG26.spectrum = "T";
EG26.feedElement = "Th";
EG26.recycledElement = "U3";
EG26.enrichment = "N";
evaluationGroups.push(EG26);

const EG27 = document.getElementById('EG27');
EG27.recycleStrategy = "SC";
EG27.irradiationEnvironment = "C";
EG27.spectrum = "F";
EG27.feedElement = "UTh";
EG27.recycledElement = "U3";
EG27.enrichment = "Y";
evaluationGroups.push(EG27);

const EG28 = document.getElementById('EG28');
EG28.recycleStrategy = "SC";
EG28.irradiationEnvironment = "C";
EG28.spectrum = "F";
EG28.feedElement = "Th";
EG28.recycledElement = "U3";
EG28.enrichment = "N";
evaluationGroups.push(EG28);

const EG29 = document.getElementById('EG29');
EG29.recycleStrategy = "MC";
EG29.irradiationEnvironment = "C";
EG29.spectrum = "F/T";
EG29.feedElement = "U";
EG29.recycledElement = "Pu";
EG29.enrichment = "N";
evaluationGroups.push(EG29);

const EG30 = document.getElementById('EG30');
EG30.recycleStrategy = "MC";
EG30.irradiationEnvironment = "C";
EG30.spectrum = "F/T";
EG30.feedElement = "U";
EG30.recycledElement = "TRU";
EG30.enrichment = "N";
evaluationGroups.push(EG30);

const EG31 = document.getElementById('EG31');
EG31.recycleStrategy = "MC";
EG31.irradiationEnvironment = "C";
EG31.spectrum = "T/F";
EG31.feedElement = "U";
EG31.recycledElement = "Pu";
EG31.enrichment = "Y";
evaluationGroups.push(EG31);

const EG32 = document.getElementById('EG32');
EG32.recycleStrategy = "MC";
EG32.irradiationEnvironment = "C";
EG32.spectrum = "T/F";
EG32.feedElement = "U";
EG32.recycledElement = "TRU";
EG32.enrichment = "Y";
evaluationGroups.push(EG32);

const EG33 = document.getElementById('EG33');
EG33.recycleStrategy = "MC";
EG33.irradiationEnvironment = "S/C";
EG33.spectrum = "F/T";
EG33.feedElement = "U";
EG33.recycledElement = "Pu";
EG33.enrichment = "N";
evaluationGroups.push(EG33);

const EG34 = document.getElementById('EG34');
EG34.recycleStrategy = "MC";
EG34.irradiationEnvironment = "S/C";
EG34.spectrum = "F/T";
EG34.feedElement = "U";
EG34.recycledElement = "TRU";
EG34.enrichment = "N";
evaluationGroups.push(EG34);

const EG35 = document.getElementById('EG35');
EG35.recycleStrategy = "MC";
EG35.irradiationEnvironment = "C/S";
EG35.spectrum = "T/F";
EG35.feedElement = "U";
EG35.recycledElement = "Pu";
EG35.enrichment = "Y";
evaluationGroups.push(EG35);

const EG36 = document.getElementById('EG36');
EG36.recycleStrategy = "MC";
EG36.irradiationEnvironment = "C/S";
EG36.spectrum = "T/F";
EG36.feedElement = "U";
EG36.recycledElement = "TRU";
EG36.enrichment = "Y";
evaluationGroups.push(EG36);

const EG37 = document.getElementById('EG37');
EG37.recycleStrategy = "MC";
EG37.irradiationEnvironment = "C";
EG37.spectrum = "F/T";
EG37.feedElement = "UTh";
EG37.recycledElement = "U3";
EG37.enrichment = "Y";
evaluationGroups.push(EG37);

const EG38 = document.getElementById('EG38');
EG38.recycleStrategy = "MC";
EG38.irradiationEnvironment = "C";
EG38.spectrum = "F/T";
EG38.feedElement = "Th";
EG38.recycledElement = "U3";
EG38.enrichment = "N";
evaluationGroups.push(EG38);

const EG39 = document.getElementById('EG39');
EG39.recycleStrategy = "MC";
EG39.irradiationEnvironment = "C/S";
EG39.spectrum = "T/F";
EG39.feedElement = "UTh";
EG39.recycledElement = "U3";
EG39.enrichment = "Y";
evaluationGroups.push(EG39);

const EG40 = document.getElementById('EG40');
EG40.recycleStrategy = "MC";
EG40.irradiationEnvironment = "S/C";
EG40.spectrum = "F/T";
EG40.feedElement = "Th";
EG40.recycledElement = "U3";
EG40.enrichment = "N";
evaluationGroups.push(EG40);

/*****************************************************************************/
/*
/* Filter
/*
/*****************************************************************************/

// Create element objects for every filter button
const OT = document.getElementById('OT');
const LR = document.getElementById('LR');
const CR = document.getElementById('CR');
const critical = document.getElementById('critical');
const subCritical = document.getElementById('sub-critical');
const thermal = document.getElementById('thermal');
const fast = document.getElementById('fast');
const feedU = document.getElementById('FE_U');
const feedTh = document.getElementById('FE_Th');
const feedUTh = document.getElementById('FE_UTh');
const recycleU = document.getElementById('RE_U');
const recyclePu = document.getElementById('RE_Pu');
const recycleTRU = document.getElementById('RE_TRU');
const encrichYes = document.getElementById('Yes');
const encrichNo = document.getElementById('No');

// Hide and display catalog items based on properties
OT.onclick = function() {
    if(OT.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.recycleStrategy !== 'OT') {
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.recycleStrategy !== 'OT') {
                elem.style.display = '';
            };
        });
    };
};

LR.onclick = function() {
    if(LR.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.recycleStrategy.includes('L')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.recycleStrategy.includes('L')){
                elem.style.display = '';
            };
        });
    };
};

CR.onclick = function() {
    if(CR.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.recycleStrategy.includes('C')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.recycleStrategy.includes('C')){
                elem.style.display = '';
            };
        });
    };
};

critical.onclick = function() {
    if(critical.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.irradiationEnvironment.includes('C')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.irradiationEnvironment.includes('C')){
                elem.style.display = '';
            };
        });
    };
};

subCritical.onclick = function() {
    if(subCritical.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.irradiationEnvironment.includes('S')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.irradiationEnvironment.includes('S')){
                elem.style.display = '';
            };
        });
    };
};

thermal.onclick = function() {
    if(thermal.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.spectrum.includes('T')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.spectrum.includes('T')){
                elem.style.display = '';
            };
        });
    };
};

fast.onclick = function() {
    if(fast.checked) {
        evaluationGroups.forEach(elem => {
            if (!elem.spectrum.includes('F')){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (!elem.spectrum.includes('F')){
                elem.style.display = '';
            };
        });
    };
};

feedU.onclick = function() {
    if(feedU.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'U'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'U'){
                elem.style.display = '';
            };
        });
    };
};

feedTh.onclick = function() {
    if(feedTh.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'Th'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'Th'){
                elem.style.display = '';
            };
        });
    };
};

feedUTh.onclick = function() {
    if(feedUTh.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'UTh'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'UTh'){
                elem.style.display = '';
            };
        });
    };
};

recycleU.onclick = function() {
    if(recycleU.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.recycledElement !== 'U3'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'U3'){
                elem.style.display = '';
            };
        });
    };
};

recyclePu.onclick = function() {
    if(recyclePu.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.recycledElement !== 'Pu'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'Pu'){
                elem.style.display = '';
            };
        });
    };
};

recycleTRU.onclick = function() {
    if(recycleTRU.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.recycledElement !== 'TRU'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.feedElement !== 'TRU'){
                elem.style.display = '';
            };
        });
    };
};

encrichYes.onclick = function() {
    if(encrichYes.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.enrichment !== 'Y'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.enrichment !== 'Y'){
                elem.style.display = '';
            };
        });
    };
};

encrichNo.onclick = function() {
    if(encrichNo.checked) {
        evaluationGroups.forEach(elem => {
            if (elem.enrichment !== 'N'){
                elem.style.display = 'none';
            };
        });
    } else {
        evaluationGroups.forEach(elem => {
            if (elem.enrichment !== 'N'){
                elem.style.display = '';
            };
        });
    };
};