import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PopularService } from './popular.service';
import { CreatePopularDto } from './dto/create-popular.dto';
import { UpdatePopularDto } from './dto/update-popular.dto';

@Controller('popular')
export class PopularController {
  constructor(private readonly popularService: PopularService) {}

  @Post()
  create(@Body() createPopularDto: CreatePopularDto) {
    return this.popularService.create(createPopularDto);
  }

  @Get()
  findAll() {
    return this.popularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.popularService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePopularDto: UpdatePopularDto) {
    return this.popularService.update(+id, updatePopularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.popularService.remove(+id);
  }
}
