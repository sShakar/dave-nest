import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserRoles } from 'src/enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: UserRoles) {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // POST /users
  @Post()
  create(@Body() user: { name: string; email: string; role: UserRoles }) {
    return this.usersService.create(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userUpdate: { name: string; email: string; role: UserRoles },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
