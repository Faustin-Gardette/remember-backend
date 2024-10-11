import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ReqWithUser } from './jwt.strategy';
import { UserService } from 'src/user/user.service';

export type AuthBody = { email: string; password: string };
export type RegisterBody = { email: string; pseudo: string; password: string };

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return this.authService.login(authBody);
  }

  @Post('register')
  async register(@Body() registerBody: RegisterBody) {
    return this.authService.register(registerBody);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async authenticateUser(@Req() req: ReqWithUser) {
    return this.userService.getUser(req.user.userId);
  }
}
