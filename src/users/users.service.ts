import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }
  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }
}
