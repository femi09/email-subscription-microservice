import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subsribersService: SubscribersService) {}

  @MessagePattern({ cmd: 'add-subscriber' })
  addSubscriber(subscriber: CreateSubscriberDto) {
    return this.subsribersService.addSubscriber(subscriber);
  }

  @MessagePattern({ cmd: 'get-all-subscribers' })
  getAllSubscribers() {
    return this.subsribersService.getAllSubscribers();
  }
}
