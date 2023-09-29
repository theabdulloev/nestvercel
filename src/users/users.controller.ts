import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'GetAll';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `GetOne ${params.id}`;
  }

  @Post()
  create(@Body() createUserDto: createUserDto): string {
    return `Name ${createUserDto.name} Age: ${createUserDto.age}`;
  }
}
