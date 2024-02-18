import { Module } from '@nestjs/common';
import { userModule } from './modules/createUser/user.module';
import { userService } from './modules/createUser/user.service';
import { userController } from './modules/createUser/user.controller';
import { PrismaModule } from './providers/prisma/prisma.module';
import { PrismaService } from './providers/prisma/prisma.service';

@Module({
  imports: [userModule, PrismaModule],
  controllers: [userController],
  providers: [userService, PrismaService],
})
export class AppModule {}
