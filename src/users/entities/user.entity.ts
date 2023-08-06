import { BookEntity } from 'src/books/entities/book.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity} from 'typeorm';

@Entity({name: "users"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    fullname: string;
    
    @OneToMany( ()=> BookEntity, book =>book.author)
    books: BookEntity[]
}
