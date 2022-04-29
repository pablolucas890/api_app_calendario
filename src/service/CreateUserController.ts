import { hash } from 'bcryptjs';
import { getConnectionManager, getRepository } from "typeorm";
import User from "../models/User";

 

interface Request{
    name:string;
    email:string;
    password:string;
    type:Number;

}

 class CreateUserController {

    public async execute({name, email, password, type}:Request):Promise<User>{
        
        const userRepository = getRepository(User)

        const hashed = await hash(password, 8)

        const exists = await userRepository.findOne({
            where:{email}
        })

        if(exists){
            throw new Error("Esse usuário ja existe")
        }

        const user = userRepository.create({
            name,
            email,
            password:hashed,
            type
        })

        await userRepository.save(user)

        return user
         
    }


 }


 export default CreateUserController