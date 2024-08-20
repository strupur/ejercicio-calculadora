function calcular(operacion) {
    // Obtiene los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado = 0;

    // Valida si los valores ingresados son números
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').textContent = 'Por favor, ingrese números válidos.';
        return;
    }

    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
        
            if (numero2 === 0) {
                document.getElementById('resultado').textContent = 'No se puede dividir por cero';
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            resultado = 'Operación no válida';
            break;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}