import express from 'express';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {db} from '../Config/db.config';
import { router } from '../Routes/users.routes';
import { pageNotFound } from '../Controllers/error.controller';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Global Think',
            version: '1.0.0',
            description: 'Documentación técnica de cómo usar el API de Usuarios',
        },
        servers: [
            { url: 'http://localhost:3000' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: [path.join(__dirname, "../Routes/*.ts")], // Ruta del archivo de rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/users/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Rutas
app.use('/api/users', router);
app.use('/', pageNotFound);

// Conexión a la base de datos y luego iniciar el servidor
db.then(() => {
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}/api/users`));
});