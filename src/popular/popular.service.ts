import { Injectable } from '@nestjs/common';
import { CreatePopularDto } from './dto/create-popular.dto';
import { UpdatePopularDto } from './dto/update-popular.dto';

@Injectable()
export class PopularService {
  create(createPopularDto: CreatePopularDto) {
    return 'This action adds a new popular';
  }

  findAll() {
    return `This action returns all popular`;
  }

  findOne(id: number) {
    return `This action returns a #${id} popular`;
  }

  update(id: number, updatePopularDto: UpdatePopularDto) {
    return `This action updates a #${id} popular`;
  }

  remove(id: number) {
    return `This action removes a #${id} popular`;
  }
}
