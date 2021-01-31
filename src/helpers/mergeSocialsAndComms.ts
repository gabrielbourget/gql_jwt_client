import cloneDeep from 'lodash.clonedeep';
import { Resource } from '../Types';

export const mergeSocialsAndComms = (socials: Resource, communications: Resource): Resource => {
  const socialsCopy = cloneDeep(socials);
  const communicationsCopy = cloneDeep(communications);
  const socialsAndComms: Resource = {
    id: '12345', // -> Dummy ID is ok, don't really need a real one in this context.
    name: 'Socials and Comms',
    children: []
  }

  if (socialsCopy.children && socialsAndComms.children) {
      socialsAndComms.children.push(...socialsCopy.children);
    }
  if (communicationsCopy.children && socialsAndComms.children) {
    socialsAndComms.children.push(...communicationsCopy.children);
  }

  return socialsAndComms;
}
