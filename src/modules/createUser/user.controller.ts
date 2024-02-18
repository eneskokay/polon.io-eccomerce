import { Controller, Get } from '@nestjs/common';
import { userService as UserService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Get('createUser')
  createUser(): string {
    this.userService.createUser();
    return 'the user is being created';
  }
}
