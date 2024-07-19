document.getElementById('clear').onclick = clearForm;
document.getElementById('convert').onclick = tempConvert;

function tempConvert(event) {
    // Prevenir el comportamiento reinicio del formulario
    if (event) {
        event.preventDefault();
    }

    // Obtener valores de entrada y convertir
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    var kelvin = parseFloat(document.getElementById('kelvin').value);

    // Ver valores iniciales
    console.log('Celsius:', celsius);
    console.log('Fahrenheit:', fahrenheit);
    console.log('Kelvin:', kelvin);
// Verificar si todas las entradas son NaN
if (isNaN(celsius) && isNaN(fahrenheit) && isNaN(kelvin)) {
    alert('Ingrese un valor numérico');
    return;
}

// Realizar conversiones según el campo vacío
if (isNaN(celsius) && !isNaN(fahrenheit)) {
    // Convertir Fahrenheit a Celsius
    celsius = (fahrenheit - 32) / 1.8;
    kelvin = celsius + 273.15; // Convertir a Kelvin también

} else if (isNaN(fahrenheit) && !isNaN(celsius)) {
    // Convertir Celsius a Fahrenheit
    fahrenheit = (celsius * 1.8) + 32;
    kelvin = celsius + 273.15; // Convertir a Kelvin también

} else if (isNaN(kelvin) && !isNaN(celsius)) {
    // Convertir Celsius a Kelvin
    kelvin = celsius + 273.15;
    fahrenheit = (celsius * 1.8) + 32; // Convertir a Fahrenheit también

} else if (isNaN(celsius) && !isNaN(kelvin)) {
    // Convertir Kelvin a Celsius
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 1.8) + 32; // Convertir a Fahrenheit también
    
} else if (isNaN(fahrenheit) && !isNaN(kelvin)) {
    // Convertir Kelvin a Fahrenheit
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 1.8) + 32; // Convertir a Fahrenheit
}

// Depuración: Ver valores después de conversiones
console.log('Converted Celsius:', celsius);
console.log('Converted Fahrenheit:', fahrenheit);
console.log('Converted Kelvin:', kelvin);

// Actualizar campos con resultados
document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
}

// Función para limpiar el formulario
function clearForm(event) {
// Prevenir el comportamiento predeterminado del formulario
if (event) {
    event.preventDefault();
}

document.getElementById('celsius').value = '';
document.getElementById('fahrenheit').value = '';
document.getElementById('kelvin').value = '';
}