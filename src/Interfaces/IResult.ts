import { resultType } from "../DI/types"

export interface IResult{
    total: number
    limit: number
    users: resultType
}