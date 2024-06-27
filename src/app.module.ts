import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { NotificationsGateway } from './gateways/notifications.gateway';

@Module({
  imports: [QuestionsModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService, NotificationsGateway],
})
export class AppModule {}
