function writeToConsole(value){
    console.log(value);
}

writeToConsole("Hello World!");

document.getElementById("heading").innerHTML = "My New Heading";
document.getElementById("heading").style = "color: green;";

var name = 'Daniel';
var age = 33;
var height = 1.70;
var isStudent = false;
var diploma = undefined;
var project = null;
var myFirstFunction = writeToConsole;

var daniel = {
    firstName: name, 
    age, 
    height, 
    isStudent, 
    diploma, 
    project, 
    myFirstFunction
}

function calculate() {
    // load input values
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    /*if(isNaN(number1) || isNaN(number2)) {
        alert("Es müssen beide Zahlen angegeben werden.");
        return;
    }*/

    if(isNaN(number1)){
        number1 = 0;
        document.getElementById("number1").value = 0;
    }

    if(isNaN(number2)){
        number2 = 0;
        document.getElementById("number2").value = 0;
    }

    // calculate result
    var result = number1 + number2;

    // write result
    document.getElementById("result").value = result;
}