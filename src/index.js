const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const exampleRoutes = require('./routes/exampleRoutes');

dotenv.config(); // Cargar variables de entorno

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Para manejar JSON en el cuerpo de las solicitudes

// Rutas
app.use('/api/examples', exampleRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log(err));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
