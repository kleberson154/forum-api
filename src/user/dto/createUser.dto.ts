/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MinLength(6)
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;
}
