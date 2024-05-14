import { returnType, getUsersReturnType } from '../DI/types'

export interface IRepository {
    getUsers(): getUsersReturnType
    getUser(id: string): returnType
    createUser(data: any): returnType
    updateUser(id: String, data: any): returnType
    deleteUser(id: String): void
   //getChunk(pageIndex: any, limit: number): void // pagination
}