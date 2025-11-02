let valores = [
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
    0.50,
    0.20,
    0.10,
    0.05,
    0.02,
    0.01
]
let caja = [
    0,
    0,
    0,
    1,
    4,
    8,
    2,
    5,
    4,
    0,
    0,
    1,
    2,
    3,
    1
]

// Aqui se sabe cuanto dinero hay en total en la caja
function totalCaja(caja) {
  return caja.reduce((suma, cantidad, i) => suma + cantidad * valores[i], 0);
}


// Para poder realizar operaciones sin modificar el array original
function clonarCaja(caja) {
  return [...caja];
}


// Para agregar dinero
function agregarDinero(caja, entregado) {
  for (let i = 0; i < caja.length; i++) {
    caja[i] += entregado[i];
  }
}

// Para devolver el dinero que sea necesario
function devolverCambio(caja, cambio) {
  const devolucion = Array(valores.length).fill(0); // Para crear un array de la misma longitud que el de valores
  const nuevaCaja = clonarCaja(caja);

  for (let i = 0; i < valores.length; i++) {
    while (cambio >= valores[i] - 0.0001 && nuevaCaja[i] > 0) { 
      cambio -= valores[i];
      cambio = parseFloat(cambio.toFixed(2)); // Evita errores de coma flotante
      nuevaCaja[i]--;
      devolucion[i]++;
    }
  }

  if (cambio > 0) {
    console.log("No hay suficiente cambio en la caja.");
    return null;
  }
  return { devolucion, nuevaCaja };
}


// Ejemplo 1
  const precio = 173.68;
  const entregado = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]; 

  const totalEntregado = entregado.reduce((suma, cantidad, i) => suma + cantidad * valores[i], 0);

  console.log("Precio del artículo:", precio.toFixed(2), "€");
  console.log("Entregado por el cliente:", totalEntregado.toFixed(2), "€"); //toFixed es para que tenga dos decimales siempre


  agregarDinero(caja, entregado);

  if (totalEntregado < precio) {
    console.log("El importe entregado es insuficiente.");
  } else if (totalEntregado === precio) {
    console.log("Importe justo");
  } else {
    let cambio = parseFloat((totalEntregado - precio).toFixed(2));
    console.log("Dinero a devolver:", cambio.toFixed(2), "€");

    const resultado = devolverCambio(caja, cambio);

    if (resultado) {
      const { devolucion, nuevaCaja } = resultado;

      console.log("Desglose del cambio:");
      for (let i = 0; i < valores.length; i++) {
        if (devolucion[i] > 0)
          console.log(`${devolucion[i]} x ${valores[i].toFixed(2)}€`);
      }

      console.log("Nuevo estado de la caja:");
      for (let i = 0; i < valores.length; i++) {
        console.log(`${valores[i].toFixed(2)}€: ${nuevaCaja[i]} unidades`);
      }
    }
  }

  console.log("Total actual en caja:", totalCaja(caja).toFixed(2), "€");

// Entregado 2

  const precio2 = 302.48;
  const entregado2 = [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]; 

  const totalEntregado2 = entregado2.reduce((suma, cantidad, i) => suma + cantidad * valores[i], 0);

  console.log("Precio del artículo:", precio2.toFixed(2), "€");
  console.log("Entregado por el cliente:", totalEntregado2.toFixed(2), "€");


  agregarDinero(caja, entregado2);

  if (totalEntregado2 < precio2) {
    console.log("El importe entregado es insuficiente.");
  } else if (totalEntregado2 === precio2) {
    console.log("Importe justo");
  } else {
    let cambio = parseFloat((totalEntregado2 - precio2).toFixed(2));
    console.log("Dinero a devolver:", cambio.toFixed(2), "€");

    const resultado = devolverCambio(caja, cambio);

    if (resultado) {
      const { devolucion, nuevaCaja } = resultado;

      console.log("Desglose del cambio:");
      for (let i = 0; i < valores.length; i++) {
        if (devolucion[i] > 0)
          console.log(`${devolucion[i]} x ${valores[i].toFixed(2)}€`);
      }

      console.log("Nuevo estado de la caja:");
      for (let i = 0; i < valores.length; i++) {
        console.log(`${valores[i].toFixed(2)}€: ${nuevaCaja[i]} unidades`);
      }
    }
  }

  console.log("Total actual en caja:", totalCaja(caja).toFixed(2), "€");