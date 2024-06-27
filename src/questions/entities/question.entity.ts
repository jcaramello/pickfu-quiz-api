import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface QuestionEntity extends InMemoryDBEntity {
  inquiry: string;
}
