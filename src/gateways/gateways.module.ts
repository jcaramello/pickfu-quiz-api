import { Module } from '@nestjs/common';
import { NotificationsGateway } from 'src/gateways/notifications.gateway';

@Module({
  providers: [NotificationsGateway],
})
export class GatewaysModule {}
