import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  createArticle(@Body() article: CreateArticleDto) {
    this.articleService.create(article);
  }
}
