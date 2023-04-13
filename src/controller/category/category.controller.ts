import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Category } from 'src/entity/Category';
import { CategoryService } from 'src/service/category.service';

@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService : CategoryService){}


    //Methode Get
    @Get()
    public async getCategory(): Promise<Category[]>{
        return this.categoryService.findAllCategory();
    }

    //API pour ajouter
    @Post('save')
    public async addCategory(@Body() category : Category): Promise<Category> {
        return this.categoryService.createCategory(category);
        
    }

    @Get(':id')
    public async oneCategory(@Param('id') id : number):Promise<Category>{
        return this.categoryService.findCategoryById(id);
    }

    @Get('catElec')
    public async listeCatElec(): Promise<{ categories: Category[] }> {
      const categories = await this.categoryService.listeCatSQL();
      return { categories };
    }
}
