import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './models/article.schema';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  //Import de l'"entité" définie par son schéma et nommé Article pour le reste du Module
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
