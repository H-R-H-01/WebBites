function DisplayValue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}

function calculate(){
    var userInput=document.getElementById("display").value;
    var output = eval(userInput);
    document.getElementById("display").value=output;
}

function clearDisplay(){
    document.getElementById("display").value=" ";
}