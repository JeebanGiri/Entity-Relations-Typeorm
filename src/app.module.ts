import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { UserEntity } from './users/entities/user.entity';
import { BookEntity } from './books/entities/book.entity';
// import { BookEntity } from './books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
     useFactory: ()=>({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'wrl',
      password: process.env.DB_PASSWORD || 'internship',
      database: process.env.DB_DATABASE || 'entity_relations',
      entities: [join(process.cwd(),'dist/**/*entity.js')],
      // entities: [UserEntity, BookEntity],
      synchronize: true 
     })
    }),
    UsersModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
