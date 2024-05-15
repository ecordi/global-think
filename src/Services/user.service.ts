import { User } from "../Models/users";
import "reflect-metadata";
import { injectable } from "inversify";
@injectable()
class UserService {
  async patchUpdate(id: string, data: any) {
    try {
      const updatedOne = await User.updateOne({ _id: id }, { $set: data });
      if (updatedOne.modifiedCount === 0) {
        throw new Error(
          "No se pudo actualizar el usuario. Es posible que el usuario no exista o no haya modificaciones."
        );
      }
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  async getUserById(id: string) {
    try {
      const user = await User.findById({ _id: id });
      if (user === null) {
        throw new Error(
          "No se pudo obtener el usuario. Es posible que el usuario no exista."
        );
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error };
    }
  }

  async createUser(data: any) {
    try {
      const user = await User.create(data);
      if (user === null) {
        throw new Error(
          "No se pudo Crear el usuario. Es posible que el usuario no exista."
        );
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateUser(id: string, data: any) {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      if (!updatedUser) {
        throw new Error(
          "Error al actualizar el usuario. El usuario no existe."
        );
      }
      return { success: true, data: updatedUser };
    } catch (error: any) {
        return { success: false, error };
    }
  }

  async deleteUser(id: string) {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser===null) {
      throw new Error(
        "No se pudo eliminar el usuario. Es posible que el usuario no exista."
      );
    }
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
};
export { UserService };
