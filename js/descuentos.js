function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);

    return precioConDescuento;
}

function calcularDescuento() {
    const ResultP = document.getElementById("ResultP");
    const InputPrecio = document.getElementById("InputPrecio");
    const valuePrecio = InputPrecio.value;

    const InputDescuento = document.getElementById("InputDescuento");
    const valueDescuento = InputDescuento.value;

    const resultDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento)
    ResultP.innerHTML = "El Precio con descuento es: $" + resultDescuento;
}

  
  function calcularDescuentoCupon() {
      const InputPrecio2 = document.getElementById("InputPrecio2");
      const valuePrecio = InputPrecio2.value;
      
      const InputDescuentoCupon = document.getElementById("InputDescuentoCupon");
      const valueCupon = InputDescuentoCupon.value;
  
      const CuponResultP = document.getElementById("CuponResultP")
    
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case valueCupon === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(valuePrecio,descuento);
          CuponResultP.innerText =`Cupón válido... el precio con descuento es de: $${precioConDescuento}`
        break;
        case valueCupon === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(valuePrecio,descuento);
          CuponResultP.innerText =`Cupón válido... el precio con descuento es de: $${precioConDescuento}`
        break;
        case valueCupon === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(valuePrecio,descuento);
          CuponResultP.innerText =`Cupón válido... el precio con descuento es de: $${precioConDescuento}`
        break;
        default:
            CuponResultP.innerText = "el cupón ingresado no es valido"
      }
  }