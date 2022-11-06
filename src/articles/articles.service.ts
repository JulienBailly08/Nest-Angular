import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Article')
    private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    // const createdArticle = new this.articleModel(createArticleDto);
    // return await createdArticle.save();
    return await this.articleModel.create(createArticleDto);
  }

  async getAll(): Promise<Article[]> {
    return await this.articleModel.find().sort({ createdAt: 'desc' });
  }
  async erase(id): Promise<any> {
    return await this.articleModel.deleteOne({ _id: id });
  }
}
