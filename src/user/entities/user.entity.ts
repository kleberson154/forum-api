import { Answer, Question } from '@prisma/client';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  answers: Answer[];
  questions: Question[];
}
