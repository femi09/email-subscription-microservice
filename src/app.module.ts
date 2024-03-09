import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [DatabaseModule, SubscribersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
