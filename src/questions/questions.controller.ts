import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { QuestionEntity } from './entities/question.entity';
import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { lastValueFrom } from 'rxjs';

@Controller('questions')
export class QuestionsController {
  constructor(
    @InjectInMemoryDBService('questions')
    private readonly questionsService: InMemoryDBService<QuestionEntity>,
  ) {
    this.questionsService.create({
      id: 'df722be4-eb5a-4ebf-a05c-1656b91a78f1',
      inquiry: 'Is a hot dog a sandwich? Why?',
    });
  }

  @Post()
  async create(@Body() question: QuestionEntity) {
    return await this.questionsService.createAsync(question);
  }

  @Get()
  async findAll() {
    return await this.questionsService.getAllAsync();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const questionsObservable = this.questionsService.queryAsync(
      (q) => q.id === id,
    );
    return await lastValueFrom(questionsObservable);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionsService.deleteAsync(id);
  }
}
