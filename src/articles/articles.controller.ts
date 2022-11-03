import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  async createArticle(@Body() article: CreateArticleDto) {
    return this.articleService.create(article);
  }

  @Get()
  async getArticles() {
    return this.articleService.getAll();
  }
}
