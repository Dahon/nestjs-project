import { IsNotEmpty } from 'class-validator';

export class ArticleDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  body: string;
  tagList: string[];
}
