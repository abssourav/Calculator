function button(number){
    var result = document.getElementById("display");
        result.value+=number;
}

function calculation(){
    var calculation = document.getElementById("display").value;
    var evall = eval(calculation);
    document.getElementById("display").value=evall
}
function clr(){
    document.getElementById("display").value="";
}
