import { Container } from "inversify";
import { TYPES } from "./types";
import { UserService } from "../Services/user.service";
import { UserController } from "../Controllers/user.controller";
import "reflect-metadata";

const diContainer = new Container();
diContainer.bind<UserService>(TYPES.service).to(UserService);
diContainer.bind<UserController>(TYPES.controller).to(UserController);  

export { diContainer };