const express = require('express');
const app = express();
const PORT = 3000;
const nombres = ['Samantha', 'Daniela' ,'Alfonso', 'Olga' ,'Jorge', 'Luis'];

/*  json con usuarios y sus nombres */ 
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({nombres});
}); 


/* middleware */
app.use(express.static("public"));

/* Validacion */

const validar = (req, res, next) => {
  let usuario = req.params.usuario;
  let encontrado = nombres.includes(usuario);
  if (encontrado) {
    next(); 
  } else {
    res.send('<img src="/assets/img/who.jpeg">'); 
  }
};

/* Ruta para el juego */
app.get('/abracadabra/juego/:usuario', validar, (req, res) => {
  res.sendFile(__dirname + '/public/juego.html');
});


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

