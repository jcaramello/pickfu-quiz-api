import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface AnswerEntity extends InMemoryDBEntity {
  questionId: string;
  value: string;
  owner: string;
  createdOn: Date;
}
