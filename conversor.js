document.getElementById('clear').onclick = clearForm;
document.getElementById('convert').onclick = tempConvert;

function tempConvert(){
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    var kelvin = document.getElementById('kelvin').value;

    if(isNaN(celsius)|| isNaN(fahrenheit)||isNaN(kelvin)){
        alert('Ingrese un valor numérico');
        return
    }
}