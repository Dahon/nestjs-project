import { Module } from '@nestjs/common';
import { ArticleEntity } from '@app/article/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from '@app/article/article.service';
import { ArticleController } from '@app/article/article.controller';

@Module({
  controllers: [ArticleController],
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticleService],
  // exports: [ArticleService],
})
export class ArticleModule {}
