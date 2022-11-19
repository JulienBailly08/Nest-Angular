import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FiltrePswdUserInterceptor } from 'src/filtre-pswd-user/filtre-pswd-user.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @UseInterceptors(FiltrePswdUserInterceptor)
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
