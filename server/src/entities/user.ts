import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Conversation } from './conversation'
import { CustomEntityBase } from './entityBase'
import { Message } from './message'
@Entity()
export class User extends CustomEntityBase {
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
  imageURL: string

  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[]

  @ManyToMany(()=> Conversation, (conversation) => conversation.users)
  @JoinTable()
  conversations:Conversation[]
}