import { Raw } from "typeorm";
import { User } from "../entities/User";

export const getUserByEmail = (email: string) => {
    return User.findOne({
        where: {
            email: caseInsensitiveSearch(email),
        },
    });
}

export const caseInsensitiveSearch = (column:string) => Raw((alias) => `LOWER(${alias}) Like LOWER(:value)`, {
    value: `%${column}%`,
})