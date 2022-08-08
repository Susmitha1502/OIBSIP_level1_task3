function reset(){           
    document.getElementById("input").value='';
    document.getElementById("output").value='';
}
function convertFahrenheit(){
    let val=document.getElementById("f").value;
    val=parseFloat(val);
    document.getElementById("c").value=(val-32)*(5/9);
    document.getElementById("k").value=((val+459.67)*(5/9));
    document.getElementById("r").value=(val+459.67);
}
function convertCelcius(){
    let val=document.getElementById("c").value;
    val=parseFloat(val);
    document.getElementById("f").value=((val)*(9/5)+32);
    document.getElementById("k").value=(val)+(273.15);
    document.getElementById("r").value=((val)+(273.15))*(9/5);
}
function convertKelvin(){
    let val=document.getElementById("k").value;
    val=parseFloat(val);
    document.getElementById("c").value=(val-273.15);
    document.getElementById("f").value=((val)*(9/5)-459.67);
    document.getElementById("r").value=(val)*(9/5);
}
function convertRankine(){
    let val=document.getElementById("r").value;
    val=parseFloat(val);
    document.getElementById("c").value=(val-491.67)*(5/9);
    document.getElementById("f").value=(val-459.67);
    document.getElementById("k").value=(val)*(5/9);
}
