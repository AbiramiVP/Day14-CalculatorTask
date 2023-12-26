outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculate() {
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert("Invalid input")
    }
}
function Clear(){
    outputScreen.value = "";
}
function dlt() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
