import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['stars', 'katana'], { message: 'use correct weapon!' })
  weapon: 'stars' | 'katana';
}
