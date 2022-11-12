import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CheckauthorInterceptor } from 'src/checkauthor/checkauthor.interceptor';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() article: CreateArticleDto) {
    return this.articleService.create(article);
  }

  @Get()
  async getArticles() {
    return this.articleService.getAll();
  }

  @Delete(':id')
  async eraseArticle(@Param('id') id: string) {
    return this.articleService.erase(id);
  }

  @Put(':id')
  @UseInterceptors(CheckauthorInterceptor)
  async updateArticle(
    @Param('id') id: string,
    @Body() article: UpdateArticleDto,
  ) {
    return this.articleService.update(id, article);
  }
}
