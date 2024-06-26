import express from "express";
import path from "path";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import db ,{ createSampleUsers } from "./Config/db.config";
import { router } from "./Routes/users.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Global Think",
      version: "1.0.0",
      description: "Documentación técnica de cómo usar el API de Usuarios"
    },
    servers: [{ url: "http://localhost:3000" }],      
  },
  apis: [path.join(__dirname, "./Routes/*.ts")], // Ruta del archivo de rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/users/swagger-ui", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/api/users", router);
app.get("/", (req, res) => {
  const htmlResponse = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <title>My App</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
      <script src='main.js'></script>
  </head>
  <body>
      <h3>Prueba Tecnica Eugenio Cordi By Global</h3>
  </body>
  </html>`;
  res.send(htmlResponse);
});
// Rutas
//app.use("/", pageNotFound);
// Conexión a la base de datos y luego iniciar el servidor
db().then(() => {
 createSampleUsers().then(() => {
  app.listen(port, () =>
    console.log(
      `Server listening on http://localhost:${port}/api/users/swagger-ui/`
    )
  );
   });
});
