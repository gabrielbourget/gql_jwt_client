import { Resource } from './resource';

export type Person = {
  id: string;
  firstName?: string;
  lastName?: string;
  name: string;
  avatarURL?: string;
  socials?: Resource;
  communications?: Resource;
}
