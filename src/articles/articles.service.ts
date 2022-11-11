import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Article')
    private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleModel.create(createArticleDto);
  }

  async getAll(): Promise<Article[]> {
    return await this.articleModel.find().sort({ createdAt: 'desc' });
  }

  async erase(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndRemove(id);
  }

  async update(id: string, article: UpdateArticleDto): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, article, {
      new: true,
    });
  }
}
