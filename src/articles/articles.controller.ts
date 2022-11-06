import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CheckauthorInterceptor } from 'src/checkauthor/checkauthor.interceptor';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() article: CreateArticleDto) {
    return await this.articleService.create(article);
  }

  @Get()
  async getArticles() {
    return await this.articleService.getAll();
  }

  @Delete(':id')
  async eraseArticle(@Param('id') id: string) {
    return await this.articleService.erase(id);
  }
}
