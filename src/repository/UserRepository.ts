import { User } from "src/entity/User";
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
}
