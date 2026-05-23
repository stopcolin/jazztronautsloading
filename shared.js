// loaded by both loading and loading-basic
// no es6 in this file cause awesomium
var nextstop = {
    'en': "Next Stop:",
    'en-PT': "Avast, ye be comin' up on:",
};

var thebar = {
    'en': "The Bar",
    'en-PT': "Th' Tavern"
};

function GameDetails(_, _, mapname, _, _, _, _, lang) {
    switch (mapname) {
        case "jazz_bar":
        case "jazz_outro":
        case "jazz_outro2":
        case "jazz_apartments": //tee hee
            mapname = thebar[lang] || thebar['en'];
    }
    
    document.getElementById("nextstop").textContent = nextstop[lang] || nextstop['en'];
    document.getElementById("mapname").textContent = mapname;
}

// FIXED: Replaced modern URLSearchParams with a safe index check
if (window.location.search && window.location.search.indexOf('debug') !== -1) {
    var img = document.createElement("img");
    img.src = "images/startinglua.png";
    img.style.position = "absolute";
    img.style.bottom = "10px";
    img.style.right = "10px";
    img.style.zIndex = "9999";
    document.body.appendChild(img);
}
