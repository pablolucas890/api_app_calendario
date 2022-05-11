import { Router } from "express";
import {ensureAuthenticated} from "../middlewares/EnsureAuthenticated";
import AuthenticatedUser from "../service/AuthenticatedUser";
import CreateUserController from "../service/CreateUserController";


const usersRouter  =  Router()


usersRouter.post('/', ensureAuthenticated, async (request, response) => {
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

  usersRouter.post('/login', async (request, response) => {
    const { email, password} = request.body;
  
    const createUser = new AuthenticatedUser();
  
    const token = await createUser.execute({
      
      email,
      password,
     
    });

    console.log(token)
  
  
    return response.json(token);
  });

  export default usersRouter