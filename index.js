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
    let percentage = window.scrollY.map(5800, 8000, 40, 200)
    //console.log(window.scrollY);
    document.getElementById("heart").style.width = `${percentage}%`;
}


window.addEventListener("load", function(){
    AOS.init();
});

scenario1 = true; // change here

function change_thought_size(){
    let percentage;
    if(scenario1){
        if(window.scrollY.map(6400, 6800, 100, 1)/100 < 1){
            percentage =  window.scrollY.map(6400, 6800, 100, 1)/100 ;
            console.log(percentage);
        }
        else{
            percentage = 1;
        }
        document.getElementsByClassName("thought")[0].style.transform = `scale(${percentage})`;
    }
    else{
        percentage =  window.scrollY.map(5200, 5900, 100, 1)/100;
        document.getElementsByClassName("thought")[1].style.transform = `scale(${percentage})`;
    }
}



var case1 = document.getElementsByClassName('scenario1');
var case2 = document.getElementsByClassName('scenario2');



    for (var i = 0; i < case2.length; i ++) {
        case2[i].style.display = 'none';
    }

    for (var i = 0; i < case1.length; i ++) {
        case1[i].style.display = 'none';
    }



let confident_button = document.getElementById("confident_button");
let anxious_button = document.getElementById("anxious_button");

confident_button.addEventListener("click", function(){
    scenario1 = true;
    for (var i = 0; i < case2.length; i ++) {
        case2[i].style.display = 'none';
    }
    for (var i = 0; i < case1.length; i ++) {
        case1[i].style.display = '';
    }
    AOS.refresh();
    setInterval(change_heart_size, 10)
    setInterval(change_thought_size, 10);
})

anxious_button.addEventListener("click", function(){
    scenario1 = false;
    for (var i = 0; i < case1.length; i ++) {
        case1[i].style.display = 'none';
    }
    for (var i = 0; i < case2.length; i ++) {
        case2[i].style.display = '';
    }
    AOS.refresh();
    setInterval(change_thought_size, 10);
})

confident_button.addEventListener("mousedown", function(event){
    event.target.style.filter = "brightness(60%)";
})
confident_button.addEventListener("mouseup", function(event){
    event.target.style.filter = "brightness(100%)";
})

anxious_button.addEventListener("mousedown", function(event){
    event.target.style.filter = "brightness(60%)";
})
anxious_button.addEventListener("mouseup", function(event){
    event.target.style.filter = "brightness(100%)";
})