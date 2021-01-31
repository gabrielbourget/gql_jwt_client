import cloneDeep from 'lodash.clonedeep';
import { Resource } from '../Types';

// -> Recursive search through resource tree for a specific node.
export const findResourceByID = (targetID: string, resources: Resource): Resource | undefined => {
  let currentResource;
  let recursionResult;
  
  if (resources.id === targetID) return cloneDeep(resources);

  if (!resources.children) return undefined;

  for(let i = 0; i < resources.children.length; ++i) {
    currentResource = resources.children[i];

    if (currentResource.id === targetID) return cloneDeep(currentResource);

    recursionResult = findResourceByID(targetID, currentResource);
    if (recursionResult) return cloneDeep(recursionResult);
  }

  return undefined;
}