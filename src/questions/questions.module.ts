import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('questions', {})],
  controllers: [QuestionsController],
  providers: [],
})
export class QuestionsModule {}
