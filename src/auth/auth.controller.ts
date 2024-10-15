import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ReqWithUser } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() authBody: LoginUserDto) {
    return this.authService.login(authBody);
  }

  @Post('register')
  async register(@Body() registerBody: CreateUserDto) {
    return this.authService.register(registerBody);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAuthenticatedUser(@Req() req: ReqWithUser) {
    return this.userService.getUser(req.user.userId);
  }
}
