import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'books'})
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'author_id' })
  authorId: number;

  @ManyToOne(() => UserEntity, (user) => user.books)
  // ReferenceColumnName refer to the primary key by default 
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  author: UserEntity;
}
  