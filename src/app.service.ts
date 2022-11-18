import { Injectable } from '@nestjs/common';

export type MeUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

@Injectable()
export class AppService {
  getMe(): MeUser {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      profilePicture: 'https://example.com/john-doe.jpg',
    };
  }
}
