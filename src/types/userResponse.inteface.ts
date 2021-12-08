import { UserType } from '@app/types/user.type';

export interface UserResponseInteface {
  user: UserType & { token: string };
}
