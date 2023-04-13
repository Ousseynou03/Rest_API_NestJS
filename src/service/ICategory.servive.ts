import { Category } from "src/entity/Category";

export interface ICategoryService {
    updateCategory(category: Category): Promise<Category>;
}