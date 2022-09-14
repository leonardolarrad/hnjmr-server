import { Controller, Post, Body, Get, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser, Auth } from './decorators';
import { CreateUserDto, LoginUserDto, UpdateUserDto, UpdatePasswordDto } from './dto';
import { User } from './entities/auth.entity';


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

  @Patch('update-password')
  @Auth()
  updatePassword(@GetUser() user: User, @Body() updatePasswordDto: UpdatePasswordDto) {
    return this.authService.updatePassword(user, updatePasswordDto);
  }

  

}
