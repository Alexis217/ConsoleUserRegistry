const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function agregarPersona(personas) {
  const nombre = await askQuestion("Nombre: ");
  const apellido = await askQuestion("Apellido: ");
  const dni = await askQuestion("DNI: ");

  const telefonos = (await askQuestion("Teléfonos (separados por coma): "))
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");

  const hijos = (await askQuestion("Hijos (separados por coma): "))
    .split(",")
    .map((h) => h.trim())
    .filter((h) => h !== "");

  personas.push([nombre.trim(), apellido.trim(), dni.trim(), telefonos, hijos]);
  console.log("\n✅ Persona agregada!\n");
}

function mostrarDatos(personas) {
  console.log("\n--- Datos en Bruto ---");
  console.log(personas);

  console.log("\n--- Detalle de Personas ---");
  personas.forEach(([nombre, apellido, dni, telefonos, hijos]) => {
    console.log(
      `${nombre} ${apellido} | DNI: ${dni} | Teléfonos: ${telefonos.length} | Hijos: ${hijos.length}`
    );
  });
}

async function filtrarPorDNI(personas) {
  const dniBusqueda = await askQuestion("DNI a buscar: ");
  const personaEncontrada = personas.find((p) => p[2] === dniBusqueda.trim());

  if (personaEncontrada) {
    const [nombre, apellido, dni, telefonos, hijos] = personaEncontrada;
    console.log(`\n🔍 ${nombre} ${apellido}:`);
    console.log(`Teléfonos (${telefonos.length}): ${telefonos.join(", ")}`);
    console.log(`Hijos (${hijos.length}): ${hijos.join(", ")}\n`);
  } else {
    console.log("\n❌ DNI no encontrado\n");
  }
}

async function main() {
  const personas = [];
  let opcion;

  do {
    console.log(`
    === Menú ===
    1. Agregar persona
    2. Mostrar todos
    3. Buscar por DNI
    4. Salir
    `);

    opcion = await askQuestion("Seleccione una opción: ");

    switch (opcion) {
      case "1":
        await agregarPersona(personas);
        break;
      case "2":
        mostrarDatos(personas);
        break;
      case "3":
        await filtrarPorDNI(personas);
        break;
      case "4":
        console.log("\n👋 ¡Hasta luego!");
        break;
      default:
        console.log("\n⚠️ Opción inválida\n");
    }
  } while (opcion !== "4");

  rl.close();
}

main();
