import { Column, Entity, JoinTable, ManyToMany, OneToMany, RelationId } from 'typeorm';
import { EntityBase } from './EntityBase';
import { Message } from './Message';
import { User } from './User';
@Entity()
export class Conversation extends EntityBase {

  @Column()
  name: string

  @ManyToMany(() => User,(user)=>user.conversations)
  @JoinTable()
  users: User[];
  
  @OneToMany(() => Message, (message) => message.conversation)
  messages: Message[]
}