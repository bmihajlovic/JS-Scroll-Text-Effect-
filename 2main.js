function sleep() {
    i++;
    if(i > 3){
        i = 0;
        array = makeText(); //reset
    }
    scroll.innerHTML = "";
    start();
}

function makeText(){
    var text = 'Visual Studio Code';
    var text1 = 'Brackets';
    var text2 = 'Atom';
    var text3 = 'Sublime Text';
    
    var splitText = text.split('');
    var splitText1 = text1.split('');
    var splitText2 = text2.split('');
    var splitText3 = text3.split('');   
    
    var newArray = [splitText,splitText1,splitText2,splitText3];
    return newArray;
}

var array = makeText();
var scroll = document.getElementById('scroll');
scroll.innerHTML = "";
var loop;

var i = 0;

function start(){
    if(array[i].length > 0) {
        
        scroll.innerHTML += array[i].shift();
        loop = setTimeout(start, 400);
    } else{
        var sleepf = setTimeout(sleep, 2000);
    }
}

start();