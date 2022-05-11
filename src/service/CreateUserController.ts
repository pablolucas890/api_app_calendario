import { hash } from 'bcryptjs';
import { getConnectionManager, getRepository } from "typeorm";
import AppError  from '../errors/AppError';
import User from "../models/User";

 

interface Request{
    name:string;
    email:string;
    password:string;
    type:Number;

}

class CreateUserController {

   public async execute({name, email, password, type}:Request){
       
       const userRepository = getRepository(User)

       const hashed = await hash(password, 8)

       
       if(!email || !name || !password || !String(type)){
           throw new AppError("Os campos de)vem ser preenchidos", 403)
       }

       const exists = await userRepository.findOne({
            where:{email}
        })

        if(exists){
         
            throw new AppError("Esse usuário já existe", 403)
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