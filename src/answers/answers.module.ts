import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { NotificationsGateway } from 'src/gateways/notifications.gateway';
import { GatewaysModule } from 'src/gateways/gateways.module';

@Module({
  imports: [InMemoryDBModule.forFeature('answers', {}), GatewaysModule],
  controllers: [AnswersController],
  providers: [NotificationsGateway],
})
export class AnswersModule {}
