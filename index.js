const express = require('express');
const app = express();
const PORT = 3000;
const nombres = [
  { nombre: 'Samantha' },
  { nombre: 'Daniela' },
  { nombre: 'Alfonso' },
  { nombre: 'Olga' },
  { nombre: 'Jorge' }
];

/* json con usuarios y sus nombres */ 
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({usuarios: nombres});
});

/* middleware */
app.use(express.static("public"));

/* Validacion */



/* Logica del juego */
app.get("/abracadabra/conejo/:n", (req, res) => {
  const numeroRandom = Math.floor(Math.random() * (5 - 1)) + 1;
  const n = Number(req.params.n);

  n === numeroRandom
    ? res.sendFile(__dirname + "/public/assets/img/conejito.jpg")
    : res.sendFile(__dirname + "/public/assets/img/voldemort.jpg");
});

/* ruta generica */
app.get("*", (req, res) => {
  res.send("LA RUTA SOLICITADA NO EXISTE");
});

/* levantar el servidor */
app.listen(PORT, () => {
  console.log("Servidor levantado correctamente en el puerto: ", PORT);
});
