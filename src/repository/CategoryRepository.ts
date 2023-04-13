import { Category } from "src/entity/Category";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {}

