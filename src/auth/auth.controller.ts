import { Controller, Post, Body, Get, UseGuards, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RoleProtected, GetUser, Auth } from './decorators';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User } from './entities/auth.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidRoles } from './interfaces';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-auth-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  @Get('info-user')
  @Auth()
  infoUser(@GetUser() user: User) {
    return { user };
  }

  @Patch('update')
  @Auth()
  updateUser(@GetUser() user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(user, updateUserDto);
  }

  

}
