import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReadUserDto } from './dto/read-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async checkUser(@Body() user: ReadUserDto) {
    return this.authService.login(user);
  }
}
