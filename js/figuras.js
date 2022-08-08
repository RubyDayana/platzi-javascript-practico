const PI = Math.PI;


// Calcular el Área y perímetro de un Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

const ResultCuadrado = document.getElementById("ResultCuadrado");

function calcularAreaCuadrado() {
    const InputCuadrado = document.getElementById("InputCuadrado")
    const valueLado = InputCuadrado.value;

    const area = areaCuadrado(valueLado);
    ResultCuadrado.innerHTML = "El area del cuadrado es: " + area + "cm";
}

function calcularPerimetroCuadrado() {
    const InputCuadrado = document.getElementById("InputCuadrado")
    const valueLado = InputCuadrado.value;
    
    const perimetro = perimetroCuadrado(valueLado);
    ResultCuadrado.innerHTML = "El Perímetro del cuadrado es: " + perimetro + "cm";
}


// Calcular el Área y perímetro de un Triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(ladoA, ladoB, base) {
    return ladoA + ladoB + base;
}

const ResultTriangulo = document.getElementById("ResultTriangulo");

function calcularAreaTriangulo() {
    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const valueBase = InputTrianguloBase.value;

    const InputTrianguloAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = InputTrianguloAltura.value;

    const areaT = areaTriangulo(valueBase, valueAltura);
    ResultTriangulo.innerHTML = "El area del Triángulo es: " + areaT + "cm";
}

function calcularPerimetroTriangulo() {
    const InputTrianguloLadoA = document.getElementById("InputTrianguloLadoA");
    const valueLadoA = InputTrianguloLadoA.value;

    const InputTrianguloLadoB = document.getElementById("InputTrianguloLadoB");
    const valueLadoB = InputTrianguloLadoB.value;

    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const valueBase = InputTrianguloBase.value;

    const perimetroT= perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    ResultTriangulo.innerHTML = "El perímetro del Triángulo es: " + perimetroT + "cm";
}



// Calcular el Área y perímetro de un Circulo
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

const ResultCirculo = document.getElementById("ResultCirculo");

function calcularAreaCirculo() {
    const InputRadioCirculo = document.getElementById("InputRadioCirculo");
    const valueRadio = InputRadioCirculo.value;

    const areaC = areaCirculo(valueRadio);
    ResultCirculo.innerHTML = "El area del Circulo es: " + areaC;
}

function calcularPerimetroCirculo() {
    const InputRadioCirculo = document.getElementById("InputRadioCirculo");
    const valueRadio = InputRadioCirculo.value;

    const perimetroC= perimetroCirculo(valueRadio);
    ResultCirculo.innerHTML = "El perímetro del Circulo es: " + perimetroC ;
}


