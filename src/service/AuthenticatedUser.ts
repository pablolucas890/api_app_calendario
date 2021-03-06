import { compare } from "bcryptjs";
import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../errors/AppError";
import UserRepository from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";

interface Request {
  email?: string;
  password: string;
}

class AuthenticatedUser {
  public async execute({ email, password }: Request) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new AppError("Email/Senha incorretos", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email/Password incorret", 401);
    }

    const token = sign(
      {
        email: user.email,
      },
      "dbd75cd12ca967cb1c8ce83909fcea89",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    const userFinal = {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
    };
  
    return { userFinal, token };
  }
}

export default AuthenticatedUser;
