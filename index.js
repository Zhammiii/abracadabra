const express = require('express');
const app = express();
const PORT = 3000;
const nombres = ['Samantha', 'Daniela' ,'Alfonso', 'Olga' ,'Jorge'];

/*  json con usuarios y sus nombres */ 
app.get('/abracadabra/usuarios', (req, res) => {
  res.json({nombres});
}); 


/* middleware */
app.use(express.static("public"));

/* Validacion */

app.use("/abracadabra/juego/:usuario", (req, res) => {
  let usuario = req.params.usuario;
  let encontrado = nombres.includes(usuario);
  
  if (encontrado) {
    res.sendFile(__dirname + "/public/juego.html");
  } else {
    res.send('<img src="/assets/img/who.jpeg">');
  }
});

/*  let usuarioExistente = nombres.find((user) => user.nombre === usuario);
if (usuarioExistente) {
  req.loggedUser = usuarioExistente;
  next();
} else {
  res.status(401).send("🛑📛❌ No tienes autorización, sitio restringido ⭕🚫⛔");
}
}); */

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

