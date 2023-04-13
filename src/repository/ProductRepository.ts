import { Product } from "src/entity/Product";
import { EntityRepository,Repository } from "typeorm";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{}