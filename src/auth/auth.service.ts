import { Injectable } from '@nestjs/common';
import { AuthBody, RegisterBody } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authBody: AuthBody) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: authBody.email,
      },
    });

    if (!existingUser) {
      throw new Error('Utilisateur non trouvé');
    }

    const isValidPassword = await this.isValidPassword(
      authBody.password,
      existingUser.password,
    );

    if (!isValidPassword) {
      throw new Error('Le mot de passe est invalide.');
    }

    return this.authenticateUser(existingUser.id);
  }

  async register(registerBody: RegisterBody) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: registerBody.email,
      },
    });

    if (existingUser) {
      throw new Error('Utilisateur déjà existant avec cet email.');
    }

    const hashedPassword = await this.hashPassword(registerBody.password);

    const createdUser = await this.prisma.user.create({
      data: {
        email: registerBody.email,
        pseudo: registerBody.pseudo,
        password: hashedPassword,
      },
    });

    return this.authenticateUser(createdUser.id);
  }

  //   private pour ne pas avoir accès à la fct dans le controller
  private async hashPassword(password: string) {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }

  private async isValidPassword(password: string, hashedPassword: string) {
    const isValidPassword = await compare(password, hashedPassword);

    return isValidPassword;
  }

  private async authenticateUser(userId: string) {
    const payload = { userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
