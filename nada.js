// nada.js
// Este script no hace absolutamente nada.
// Y lo hace con orgullo.

function noHacerNada() {
  return undefined;
}

const resultado = noHacerNada();

if (resultado === undefined) {
  // Éxito.
}

console.log(""); // Imprime nada. Técnicamente.

module.exports = { noHacerNada };
