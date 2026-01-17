import { Answer, User } from '@prisma/client';

export class Question {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  answer: Answer[];
}
