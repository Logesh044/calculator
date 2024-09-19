let number=document.getElementById('number')
function calculate(values){
    number.value += values
}
function clears(){
    number.value=" ";
}
function total(){
    try{
        number.value=eval(number.value)
    }
    catch(error){
        number.value= "Error";
    }
}
function backspace(){
    number.value=number.value.slice(0,-1)
}
