// set up text to print, each item in array is new line
var aText = new Array(
    "This is a story about an overthinking cat..."
    );
var iSpeed = 150; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
    iIndex=0;
}

typewriter();
setInterval(typewriter, 8000);


Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function change_heart_size(){
    //console.log(window.scrollY);
    let percentage = window.scrollY.map(4900, 5510, 40, 110)

    document.getElementById("heart").style.width = `${percentage}%`;
}
setInterval(change_heart_size, 10)

window.addEventListener("load", function(){
    AOS.init();
});

function change_thought_size(){
    let percentage = window.scrollY.map(7000, 7200, 30, 1);
    document.getElementById("thought").style.width = `${percentage}%`;
    document.getElementById("thought").style.height = `${percentage}%`;
}

setInterval(change_thought_size, 10);