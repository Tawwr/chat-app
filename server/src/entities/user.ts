import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Conversation } from './Conversation'
import { EntityBase } from './EntityBase'
import { Message } from './Message'
@Entity()
export class User extends EntityBase {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  username: string

  @Column({nullable:true})
  imageUrl:string

  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[];

  @ManyToMany(() => Conversation,(conversation)=>conversation.users)
  conversations: Conversation[];
}
