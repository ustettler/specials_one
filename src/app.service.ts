import { Injectable } from '@nestjs/common';

export type MeUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

export type Article = {
  id: number;
  url: string;
  timestamp: number;
  text: string;
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

  getAllArticles(): Article[] {
    return [
      {
        id: 1,
        url: 'https://example.com/1',
        timestamp: 1668785874,
        text: 'test',
      },
      {
        id: 2,
        url: 'https://example.com/2',
        timestamp: 1668785653,
        text: 'test2',
      },
      {
        id: 3,
        url: 'https://example.com/3',
        timestamp: 1668789853,
        text: 'test3',
      },
    ];
  }
}
