document.getElementById('clear').onclick = clearForm;
document.getElementById('convert').onclick = tempConvert;

function tempConvert(){
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    var kelvin = document.getElementById('kelvin').value;

    if(isNaN(celsius)|| isNaN(fahrenheit)||isNaN(kelvin)){
        alert('Ingrese un valor numérico');
        return
    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit - 32)) / 1.8;

    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius)-32) * 18;
        
    }else if(kelvin=== ''){

    }
}