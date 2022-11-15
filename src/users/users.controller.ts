import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Post('/verif')
  async getUserByEmail(@Body() data: any) {
    return this.userService.findOne(data.email);
  }
}
