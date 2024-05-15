import { UserService } from "../Services/user.service";
import { User, UserschemaValidate } from "../Models/users";
import { injectable, inject } from "inversify";
import { TYPES, SORT_OPT } from "../DI/types";
import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { isValidObjectId } from "mongoose";
@injectable()
class UserController {
  private service: UserService;

  constructor(@inject(TYPES.service) service: UserService) {
    this.service = service;
  }

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = "1", limit = "10" } = req.query;

      const parsedPage = parseInt(page as string, 10);
      const parsedLimit = parseInt(limit as string, 10);

      const users = await User.find()
        .limit(parsedLimit)
        .skip((parsedPage - 1) * parsedLimit)
        .sort({ createdAt: -1 });
      const count = await User.countDocuments();

      return res.status(200).json({
        data: users,
        totalPages: Math.ceil(count / parsedLimit),
        currentPage: parsedPage,
      });
    } catch (err) {
      next(err);
    }
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = req.body;

    try {
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "ID de usuario no válido" });
      }
      const user = await this.service.getUserById(id);
      if (user.success) {
        return res.status(200).json({
          message: "Usuario actualizado exitosamente.",
          data: user.data,
        });
      } else {
        const errorMessage = (user.error as Error).message;
        return res.status(400).json({
          message: errorMessage,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el usuario: " + (error as Error).message,
      });
    }
  };

  addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        edad: req.body.edad,
      };

      const { error, value } = UserschemaValidate.validate(data);

      if (!error) {
        const user = await this.service.createUser(value);
        return res.status(201).send({ data: user.data });
      } else {
        return res.status(400).json({ message: error.message });
      }
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = req.body;
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "ID de usuario no válido" });
      }
      const userUpdated = await this.service.updateUser(id, req.body);
      if (userUpdated.success) {
        return res.status(200).json({
          message: "Usuario actualizado exitosamente.",
          data: userUpdated.data,
        });
      } else {
        const errorMessage = (userUpdated.error as Error).message;
        return res.status(400).json({
          message: errorMessage,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el usuario: " + (error as Error).message,
      });
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "ID de usuario no válido" });
      }
      const user = await this.service.deleteUser(id);
      if (user.success) {
        return res.status(200).json({
          message: "Usuario eliminado exitosamente."
        });
      } else {
        const errorMessage = (user.error as Error).message;
        return res.status(400).json({
          message: errorMessage,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el usuario: " + (error as Error).message,
      });
    }
  };

  patchUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = req.body;

    try {
      if (!isValidObjectId(id)) {
        return res.status(400).json({ message: "ID de usuario no válido" });
      }
      const updatedUser = await this.service.patchUpdate(id, data);
      if (updatedUser.success) {
        return res.status(200).json({
          message: "Usuario actualizado exitosamente.",
          data: updatedUser.data,
        });
      } else {
        const errorMessage = (updatedUser.error as Error).message;
        return res.status(400).json({
          message: errorMessage,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el usuario: " + (error as Error).message,
      });
    }
  };
}

export { UserController };
