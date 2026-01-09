import { Injectable } from '@nestjs/common';
import bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '@/infra/prisma/prisma.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}
  
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    
    const emailAlreadyExists = await this.prismaService.user.findUnique({
      where: { email },
    });
    
    if (emailAlreadyExists) {
      throw new Error('Email already in use');
    }
    
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: await bcryptjs.hash(password, 12),
      },
    });
    
    return user;
  }
  
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    
    const accessToken =  await this.jwtService.signAsync({
      secret: process.env.JWT_SECRET!,
      userId: user.id,
      expiresIn: '7d',
    });
    
    const userWithoutPassword = { ...user, password: undefined };
    
    return { 
      accessToken,
      user: userWithoutPassword
    };
  }
}
