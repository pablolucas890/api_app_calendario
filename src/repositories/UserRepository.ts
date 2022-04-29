import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { Repository } from "typeorm/repository/Repository";
import User from "../models/User"


@EntityRepository(User)
class UserRepository extends Repository<User> {
}

export default UserRepository;