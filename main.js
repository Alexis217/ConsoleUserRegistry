const readline = require("readline");

// Se crea un objeto readline para interactuar con el usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Se define una función que pide al usuario una pregunta y devuelve una promesa
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// Se llama a la función main cuando se presione la tecla "enter" en el terminal
async function main() {
  const people = [];
  let addMore = true;

  while (addMore) {
    const firstName = await askQuestion("Ingresa tu nombre: ");
    const lastName = await askQuestion("Ingresa tu apellido: ");
    const dni = await askQuestion("Ingresa tu DNI: ");
    const phones = [];

    let phone = await askQuestion(
      "Ingresa tu número de teléfono (o deja en blanco para finalizar): "
    );
    while (phone.trim() !== "") {
      phones.push(phone.trim());
      phone = await askQuestion(
        "Ingresa otro número de teléfono (o deja en blanco para finalizar): "
      );
    }

    people.push([firstName.trim(), lastName.trim(), dni.trim(), phones]);

    const response = await askQuestion("¿Quieres añadir más persona? (s/n): ");
    addMore = response.trim().toLowerCase() === "s";
  }

  console.log("\nResults:");
  people.forEach((person) => {
    console.log(person);
  });

  rl.close();
}

main();
