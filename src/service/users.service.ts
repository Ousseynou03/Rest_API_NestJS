import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/User";
import { UserRepository } from "src/repository/UserRepository";

@Injectable()
export class UserService {

    //effectuons l'injection des dépendances des repository
    //NB : on fait toujours l'injection des dépendances dans un constructeur()

    
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository){}


        //Méthode de récupération de la liste des users
        public findAllUsers(): Promise<User[]>{
            return this.userRepository.find();
        }


        //Méthode pour récupérer un User sachant son id
        public async findUserById(id : number) : Promise<User | null>{
            const user = await this.userRepository.findOneBy({id})
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`)
            }
            return user;
        }


        //Méthode pour ajouter un nouvel utilisateur
        public async createUser(newUser: User): Promise<User> {
            return this.userRepository.save(newUser);
          }
        
 
          //Méthode pour supprimer un user
         public async removeProduct(id: number): Promise<void> {
            await this.userRepository.delete(id);
          }



}
