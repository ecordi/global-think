import { UserController } from '../Controllers/user.controller'
import { diContainer } from "../DI/iversify.config";
import { TYPES } from "../DI/types";
import { pageIndexChecker, sortParamChecker, orderByParamChecker, filterChecker } from "../Middlewares/param.validator";
import express from 'express';


export const router = express.Router()
const controller = diContainer.get<UserController>(TYPES.controller);
const middlewares = [pageIndexChecker, sortParamChecker, orderByParamChecker, filterChecker]; // should they combined

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/users:
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

/* @swagger

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Usuario actualizado exitosamente
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
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Usuario no encontrado
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

router.get('/', middlewares, controller.getUsers);
router.post('/',middlewares, controller.addUser)
router.get('/:id', controller.getUserById)
router.put('/:id', controller.updateUser)
router.patch('/:id', controller.patchUser)
router.delete('/:id', controller.deleteUser)


