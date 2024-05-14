"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var iversify_config_1 = require("../DI/iversify.config");
var types_1 = require("../DI/types");
var param_validator_1 = require("../Middlewares/param.validator");
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
// holds the registered dependencies and manages their creation and resolution
var controller = iversify_config_1.diContainer.get(types_1.TYPES.controller);
var middlewares = [param_validator_1.pageIndexChecker, param_validator_1.sortParamChecker, param_validator_1.orderByParamChecker, param_validator_1.filterChecker]; // should they combined
// sub-routes after /api/users
// Documentación de Swagger sin cambiar el código original
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */
/**
 * @swagger
 * /api/users/pagination/{page}/{limit}:
 *   get:
 *     summary: Obtener usuarios paginados
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: null
 *         description: Número de pa
 *
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *
 *         description: Campo para ordenar los usuarios
 *     responses:
 *       '200':
 *         description: OK
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agregar un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Creado
 */
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: OK
 */
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Usuario no encontrado
 */
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *
 *     responses:
 *       '200':
 *         description: OK
 */
/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:

 *     responses:
 *       '200':
 *         description: OK
 */
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         edad:
 *           type: number
 *         correo:
 *           type: string
 *           format: email
 *       required:
 *         - nombre
 *         - edad
 *         - correo
 */
/**
 * @swagger
 * /api/users/search:
 *   get:
 *     summary: Buscar usuarios
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Cadena de consulta para la búsqueda
 *     responses:
 *       '200':
 *         description: OK
 */
exports.router.get('/pagination/:page/:limit', middlewares, controller.getUsers);
exports.router.post('/', controller.adduser); // the same URL can have multiple HTTP methods
exports.router.get('/', controller.getUsers);
exports.router.get('/search', middlewares, controller.search);
exports.router.get('/:id', controller.getAUser); // query parametres uses ?=id 
exports.router.put('/:id', controller.updateUser);
exports.router.patch('/:id', controller.patchUser);
exports.router.delete('/:id', controller.deleteUser);
