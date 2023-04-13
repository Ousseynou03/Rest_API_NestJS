import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/Product";
import { ProductRepository } from "src/repository/ProductRepository";

export class ProductService{

    /**
     *
     */
    constructor(
        @InjectRepository(Product)
        private productRepository:ProductRepository) {}


        //Méthode qui permet de récupérer la liste des produits
        public findAllProducts(): Promise<Product[]>{
            return this.productRepository.find();
        }


        //Méthode pour récupérer un Produit sachant son id
        public async findUserById(id : number) : Promise<Product | null>{
            const product = await this.productRepository.findOneBy({id})
            if (!product) {
                throw new NotFoundException(`Product with ID ${id} not found`)
            }
            return product;
        }

    
        //Méthode pour ajouter un nouveau produit
        public async createProduct(product: Product): Promise<Product> {
            return this.productRepository.save(product);
          }
        

          //Méthode pour supprimer un produit
         public async removeProduct(id: number): Promise<void> {
            await this.productRepository.delete(id);
          }
}