import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { ReadUserDto } from './dto/read-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      //permet de retourner l'element User sans son mot de passe
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(readUserDto: ReadUserDto) {
    const foundUser = await this.usersService.findOne(readUserDto.email);
    if (!foundUser) {
      throw new NotFoundException();
    }
    if (foundUser.password != readUserDto.password) {
      throw new NotFoundException();
    }
    const payload = {
      createdAt: new Date().toISOString(),
      sub: foundUser._id,
      role: '',
    };
    if (foundUser.email === 'breubit@laposte.net') {
      payload.role = 'admin';
    } else {
      payload.role = 'user';
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
