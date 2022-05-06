import 'reflect-metadata';
import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import './database';
import AppError from './errors/AppError';
const app = express();
app.use(express.json());

app.use(routes);

app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.code).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(3335, () => {
  console.log('Server is Started!!!');
});
