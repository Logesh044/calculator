let number=document.getElementById('number')
function calculate(values){
    number.value += values
}
function clears(){
    number.value=" ";
}
function total(){
    let display=document.getElementById('number').value;
    if(display.includes('^')){
        let parts=display.split('^')
        let base=parseFloat(parts[0])
        let exponent=parseFloat(parts[1])
        var power=Math.pow(base,exponent)
        number.value = power
    }
    else{
    try{
        number.value=eval(number.value)
    }
    catch(error){
        number.value= "Error";
    }
}
}
function backspace(){
    number.value=number.value.slice(0,-1)
}
