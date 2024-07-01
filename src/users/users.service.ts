import { Injectable } from '@nestjs/common';
import { UserRoles } from '@/enums';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Name 1', email: 'name1@mail.com', role: UserRoles.admin },
    {
      id: 2,
      name: 'Name 2',
      email: 'name2@mail.com',
      role: UserRoles.engineer,
    },
    { id: 3, name: 'Name 3', email: 'name3@mail.com', role: UserRoles.intern },
    {
      id: 4,
      name: 'Name 4',
      email: 'name4@mail.com',
      role: UserRoles.engineer,
    },
    { id: 5, name: 'Name 5', email: 'name5@mail.com', role: UserRoles.admin },
  ];

  findAll(role?: UserRoles) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: UserRoles }) {}
}
