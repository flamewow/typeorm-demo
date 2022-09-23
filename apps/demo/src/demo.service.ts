import { Injectable } from '@nestjs/common';
import { ItemsService } from '#local/items';

@Injectable()
export class DemoService {
  constructor(private readonly itemsService: ItemsService) {}

  async getHello(): Promise<string> {
    const item = await this.itemsService.getItem(1);

    throw Error('something unexpected happened');
    return item.name;
  }
}
