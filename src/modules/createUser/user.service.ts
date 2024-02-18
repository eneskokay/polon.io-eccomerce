import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
@Injectable()
export class userService {
  constructor(private prisma: PrismaService) {}
  async createUser() {
    const user = await this.prisma.user.create({
      data: {
        name: 'John',
        email: 'john@doe.com',
        password: 'hello1234',
      },
    });
    console.log('user:', user);
  }
}
