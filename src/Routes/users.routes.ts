import { UserController } from '../Controllers/user.controller'
import { diContainer } from "../DI/iversify.config";
import { TYPES } from "../DI/types";
import { pageIndexChecker, sortParamChecker, orderByParamChecker, filterChecker } from "../Middlewares/param.validator";
import express from 'express';


export const router = express.Router()
// holds the registered dependencies and manages their creation and resolution
const controller = diContainer.get<UserController>(TYPES.controller);

const middlewares = [pageIndexChecker, sortParamChecker, orderByParamChecker, filterChecker]; // should they combined

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
router.get('/pagination/:page/:limit', middlewares, controller.getUsers);
router.post('/', controller.adduser) // the same URL can have multiple HTTP methods
router.get('/', controller.getUsers)
router.get('/search',middlewares, controller.search)
router.get('/:id', controller.getAUser) // query parametres uses ?=id 
router.put('/:id', controller.updateUser)
router.patch('/:id', controller.patchUser)
router.delete('/:id', controller.deleteUser)


