import { Column, Entity, ManyToOne } from 'typeorm';
import { Conversation } from './Conversation';
import { EntityBase } from './EntityBase';
import { User } from './User';
@Entity()
export class Message extends EntityBase {
  @Column()
  body: string

  @ManyToOne(() => User, (user) => user.messages)
  sender: User;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  conversation: Conversation
}