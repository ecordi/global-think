
import { paginate } from 'mongoose-paginate-v2';
import {  IUser } from '../Interfaces/IUser'
import { Document, Types } from 'mongoose' 

export const TYPES = {
    service: Symbol.for("UserService"),
    controller: Symbol.for("userController"),
}

type CommonType = Document<unknown, any, IUser> & IUser & {
    _id: Types.ObjectId;
  }
export type getUsersReturnType = Promise<CommonType[] | undefined>

export type resultType = CommonType[]

export type  returnType = Promise<CommonType | string | undefined>
 export type paginate = Promise<CommonType | string | undefined>
export enum SORT_OPT{
  nombre = "author",
  correo= "correo@mail.com",
  edad = 20
}

