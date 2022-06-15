import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";

interface IToken {
    sub: string
}



    export function ensureAuthenticated(request: Request,
        response: Response,
        next: NextFunction) {

        const authToken = request.headers.authorization;
        console.log(authToken)

        if (!authToken) {
            throw new AppError("É necessário estar autenticado !", 401);
        }

        const [, token] = authToken.split(" ");

        try {
            const { sub } = verify(
                token,
                "dbd75cd12ca967cb1c8ce83909fcea89"
            ) as IToken;

            request.user_id = sub;
           
            return next();
        } catch (err) {
            throw new AppError("Token esta faltando !", 401);
        }


    }


