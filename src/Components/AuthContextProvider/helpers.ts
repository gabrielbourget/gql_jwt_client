import { User } from "../../Types";

export interface AuthContext {
  user?: User;
  setUser(viewer?: any/*Viewer*/): void;
  getUser(): User | undefined;
}

/* - TODO: -> Refactor this beyond just Google Login */
export const initAuthContextValue: AuthContext = {
  user: undefined,
  setUser: () => {},
  getUser: () => undefined,
}