import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { AnswerEntity } from './entities/answer.entity';
import { NotificationsGateway } from 'src/gateways/notifications.gateway';
import { EVENTS } from 'src/gateways/events';

@Controller('questions/:questionId/answers')
export class AnswersController {
  constructor(
    @InjectInMemoryDBService('answers')
    private readonly answersService: InMemoryDBService<AnswerEntity>,
    private readonly notificationGateway: NotificationsGateway,
  ) {}

  @Post()
  create(@Param('questionId') questionId, @Body() answer: AnswerEntity) {
    const newAnswer = this.answersService.create({
      questionId,
      ...answer,
      createdOn: new Date(),
    });

    this.notificationGateway.send(EVENTS.ANSWER_CREATED, newAnswer);

    return newAnswer;
  }

  @Get()
  findAll(@Param('questionId') questionId) {
    const answers = this.answersService.query(
      (a) => a.questionId == questionId,
    );
    return answers
      .sort((a1, a2) => a2.createdOn.getTime() - a1.createdOn.getTime())
      .slice(0, 100);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answersService.get(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersService.delete(id);
  }
}
