import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from "./entity/Category";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/Product';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { CategoryRepository } from './repository/CategoryRepository';
import { ProductRepository } from './repository/ProductRepository';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { ProductController } from './controller/product/product.controller';
import { UserController } from './controller/user/user.controller';
import { CategoryController } from './controller/category/category.controller';
import { UserRepository } from './repository/UserRepository';
import { UserService } from './service/users.service';

@Module({
  imports:  [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rest_api_nestjs',
      entities : [User, Product, Category],
      synchronize: true,
      //synchronize: true, ne doit pas être utilisé en productioon
      
    }),
   TypeOrmModule.forFeature([Category, Product, User]),
  ],
  controllers: [AppController, ProductController, UserController, CategoryController],
  providers: [AppService,
  CategoryRepository, CategoryService, ProductRepository, ProductService, UserRepository, UserService],
})
export class AppModule {}
