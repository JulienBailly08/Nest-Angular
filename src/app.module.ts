import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import config from './config';

@Module({
  imports: [MongooseModule.forRoot(config), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}