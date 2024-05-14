// import { UserService } from '../Services/user.service'
// import { User, UserschemaValidate } from '../Models/users'
// import { injectable, inject } from 'inversify'
// import { TYPES, SORT_OPT } from "../DI/types" // used in inversify
// import { IResult } from '../Interfaces/IResult'
// import { resourceLimits } from 'worker_threads'
// import { Express, Request, Response } from 'express';
// import { NextFunction } from 'express-serve-static-core'
// import { error } from 'console'

// @injectable() // that is called as decorator-annotation
// class UserController {
//     private service: UserService; // there is no private modifier in JS

//     constructor(@inject(TYPES.service) service: UserService) { // constructor injection
//         this.service = service
//     }

//     getUsers = async (req: Request, res: Response) => { // non-blocking approach
//         const sortParam = req.query.sort;
//         const isValid = this.isValidSortOption(sortParam)

//         const users = await this.service.getUsers();
//         res.send(users);
//     }

//     isValidSortOption(value: any): value is SORT_OPT {
//         return Object.values(SORT_OPT).includes(value);
//     }

//     //get a single user
//     getAUser = async (req: Request, res: Response) => { // when the async task is finished fires a callback function
//         const id = req.params.id // extract id from the link
//         const user = await this.service.getUser(id)
//         if (user == '404') {
//             console.log("the user is ",user);
//             return res.status(404).json({ message: 'User not found' });
//         }else{
//             console.log("user is not undefined")
//             res.status(200).send(user)

//         }
//     }

//     //add user controller
//     adduser = async (req: Request, res: Response) => {
//         //data to be saved in database
//         const data = {
//             nombre: req.body.nombre,
//             correo: req.body.correo,
//             edad: req.body.edad
//         }
//         //validating the request
//         const { error, value } = UserschemaValidate.validate(data)

//         if (error) {
//             res.send(error.message)
//         } else {
//             //call the create user function in the service and pass the data from the request
//             const user = await this.service.createUser(value)
//             res.status(201).send(user) // status is set to ok
//         }
//     }

//     //update user
//     updateUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         const user = await this.service.updateUser(id, req.body)
//         res.send(user)
//     }

//     //delete a user
//     deleteUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         await this.service.deleteUser(id)
//         res.send('user deleted')
//     }

//     //pagination
//     getChunk = async (req: Request, res: Response) => {
//         const pi = req.query;
//         console.log("🚀 ~ file: user.controller.ts:35 ~ UserController ~ getAUser= ~ pi:", req.query)
//           const limit = 5;

//           const queryPool = {
//               sortType: req.sortType,
//               pageIndex: req.pageIndex,
//               orderBy: req.orderBy,
//               filter: req.filter
//           }

//           const answer: IResult | undefined = await this.service.getChunk(queryPool, limit);

//           const isString = typeof answer;

//           if (isString === 'string') { // if an error message is returned
//               return res.status(400).json({ message: answer })
//           }
//           return res.status(200).json(answer)
//       }
//     //update user with patch
//     patchUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         const user = await this.service.patchUpdate(id, req.body)
//         res.send(user)
//     }
//     search = async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             const queryPool = {
//                 sortType: req.sortType,
//                 pageIndex: req.pageIndex,
//                 orderBy: req.orderBy
//             }
//             const query = req.query.q as string
//             console.log(req.query.q);

//             const answer = await this.service.search(query, queryPool)
//                 return res.status(200).json(answer)
//         } catch (error) { console.log(error) }
//     }
// }

// export { UserController } 
import { UserService } from '../Services/user.service'
import { User, UserschemaValidate } from "../Models/users";
import { injectable, inject } from "inversify";
import { TYPES, SORT_OPT } from "../DI/types"; // used in inversify
import { IResult } from "../Interfaces/IResult";
import { resourceLimits } from "worker_threads";
import { Express, Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { error } from "console";

@injectable() // that is called as decorator-annotation
class UserController {
  private service: UserService; // there is no private modifier in JS

  constructor(@inject(TYPES.service) service: UserService) {
    // constructor injection
    this.service = service;
  }

  //get all users
  // getUsers = async (req: Request, res: Response) => {
  //   // non-blocking approach
  //   const sortParam = req.query.sort;
  //   const isValid = this.isValidSortOption(sortParam);

  //   const users = await this.service.getUsers();
  //   res.send(users);
  // };
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Desestructuramos el objeto req.query para obtener las variables de página y límite de la URL
        const { page = '1', limit = '10' } = req.query;
  
        // Convertimos las variables de página y límite en números
        const parsedPage = parseInt(page as string, 10);
        const parsedLimit = parseInt(limit as string, 10);
  
        // Buscamos los usuarios en la base de datos
        const users = await User.find({ ...req.query })
            .limit(parsedLimit)
            .skip((parsedPage - 1) * parsedLimit)
            .sort({ createdAt: -1 });
  
        // Obtenemos el número total de usuarios almacenados en la base de datos
        const count = await User.countDocuments();
  
        // Enviamos la respuesta al cliente
        return res.status(200).json({
            users,
            totalPages: Math.ceil(count / parsedLimit),
            currentPage: parsedPage,
        });
    } catch (err) {
        // Pasamos el error al siguiente middleware
        next(err);
    }
  };
  isValidSortOption(value: any): value is SORT_OPT {
    return Object.values(SORT_OPT).includes(value);
  }

  //get a single user
  getAUser = async (req: Request, res: Response) => {
    // when the async task is finished fires a callback function
    const id = req.params.id; // extract id from the link
    const user = await this.service.getUser(id);
    if (user == "404") {
      console.log("the user is ", user);
      return res.status(404).json({ message: "User not found" });
    } else {
      console.log("user is not undefined");
      res.status(200).send(user);
    }
  };

  //add user controller
  adduser = async (req: Request, res: Response) => {
    //data to be saved in database
    const data = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      edad: req.body.edad,
    };
    //validating the request
    const { error, value } = UserschemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      //call the create user function in the service and pass the data from the request
      const user = await this.service.createUser(value);
      res.status(201).send(user); // status is set to ok
    }
  };

  //update user
  updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await this.service.updateUser(id, req.body);
    res.send(user);
  };

  //delete a user
  deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    await this.service.deleteUser(id);
    res.send("user deleted");
  };

  //pagination
//   getChunk = async (req: Request, res: Response) => {
//     const limit = 5;

//     const queryPool = {
//         sortType: req.sortType,
//         pageIndex: req.pageIndex,
//         orderBy: req.orderBy,
//         filter: req.filter
//     };
//     console.log("🚀 ~ file: user.controller.ts:215 ~ UserController ~ getChunk= ~ queryPool:", queryPool.orderBy)

//     try {
//         const answer: IResult | undefined = await UserService.getChunk(queryPool, limit);

//         if (!answer) {
//             return res.status(404).json({ message: 'No se encontraron resultados.' });
//         }

//         return res.status(200).json(answer);
//     } catch (error) {
//         return res.status(500).json({ message: 'Error al obtener el fragmento de usuarios paginados.' });
//     }
// };


  //update user with patch
  patchUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await this.service.patchUpdate(id, req.body);
    res.send(user);
  };
  search = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const queryPool = {
        sortType: req.sortType,
        pageIndex: req.pageIndex,
        orderBy: req.orderBy,
      };
      const query = req.query.q as string;
      console.log(req.query.q);

      const answer = await this.service.search(query, queryPool);
      return res.status(200).json(answer);
    } catch (error) {
      console.log(error);
    }
  };
}

export { UserController };
