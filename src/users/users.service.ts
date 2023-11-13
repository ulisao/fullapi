import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    //This action adds a new user;
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    //This action returns all users;
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    //This action returns a #${id} user;
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //This action updates a #${id} user;
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    //This action removes a #${id} user;
    return this.prisma.user.delete({ where: { id } });
  }
}
