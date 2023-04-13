import { NotFoundException } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entity/Category";
import { CategoryRepository } from "src/repository/CategoryRepository";
import { DataSource } from "typeorm";
import { ICategoryService } from "./ICategory.servive";

export class CategoryService implements ICategoryService{

    /**
     *
     */
    constructor(
        @InjectRepository(Category)
        private categoryRepository:CategoryRepository,
        @InjectDataSource() private dataSource: DataSource){}

        
    updateCategory(category: Category): Promise<Category> {
        throw new Error("Method not implemented.");
    }

        //Méthode de récupération de la liste des Category
        public findAllCategory(): Promise<Category[]> {
            return this.categoryRepository.find();
        }

        //Méthode pour récupérer un Category sachant son id
        public async findCategoryById(id : number) : Promise<Category | null>{
            const category = await this.categoryRepository.findOneBy({id})
                if (!category) {
                    throw new NotFoundException(`Category with ID ${id} not found`)
                    }
                    return category;
                }

        //Méthode pour ajouter un nouvel utilisateur
        public async createCategory(newCategory: Category): Promise<Category> {
                return this.categoryRepository.save(newCategory);
             }
             
         
        //Méthode pour supprimer un user
        public async removeCategory(id: number): Promise<void> {
                await this.categoryRepository.delete(id);
        }

        
        //Méthode pour récupérer la liste des category en SQL
        public async listeCatSQL(): Promise<Category[]> {
            return await this.dataSource.query(`SELECT * FROM category WHERE name = "Electronique"`);
          }

}