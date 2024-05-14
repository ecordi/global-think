"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var db_config_1 = __importDefault(require("../Config/db.config"));
var users_routes_1 = require("../Routes/users.routes");
var error_controller_1 = require("../Controllers/error.controller");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
// Middleware para parsear JSON y datos de formulario
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Configuración de Swagger
var swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Backend Global Think",
            version: "1.0.0",
            description: "Documentación técnica de cómo usar el API de Usuarios",
        },
        servers: [{ url: "http://localhost:3000" }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [path_1.default.join(__dirname, "../Routes/*.ts")], // Ruta del archivo de rutas
};
var swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api/users/swagger-ui", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// Rutas
app.use("/api/users", users_routes_1.router);
app.use("/", error_controller_1.pageNotFound);
// Conexión a la base de datos y luego iniciar el servidor
(0, db_config_1.default)().then(function () {
    app.listen(port, function () {
        return console.log("Server listening on http://localhost:".concat(port, "/api/users"));
    });
});
