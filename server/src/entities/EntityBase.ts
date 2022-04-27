import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class EntityBase extends BaseEntity {
 
    @PrimaryGeneratedColumn()
    id:number
   
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date    
}