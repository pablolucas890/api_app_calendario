import { Router } from "express";
import CreateUserController from "../service/CreateUserController";


const usersRouter  =  Router()

usersRouter.post('/', async (request, response) => {
    const { name, email, password,type} = request.body;
  
    const createUser = new CreateUserController();
  
    const user = await createUser.execute({
      name,
      email,
      password,
      type
    });

    console.log(user)
  
  
    return response.json(user);
  });

  export default usersRouter