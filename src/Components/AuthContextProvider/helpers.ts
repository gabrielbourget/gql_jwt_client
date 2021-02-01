import { User } from "../../Types";

export interface AuthContext {
  setUser(viewer?: any/*Viewer*/): void;
  getUser(): User | undefined;
  register(args: IRegistrationArgs): any;
  login(args: ILoginArgs): any;
}

/* - TODO: -> Refactor this beyond just Google Login */
export const initAuthContextValue: AuthContext = {
  setUser: () => {},
  getUser: () => undefined,
  register: (args: IRegistrationArgs) => {},
  login: (args: ILoginArgs) => {},
}

export interface IAuthContextState {
  user?: User;
}

export interface IRegistrationArgs {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ILoginArgs {
  email: string,
  password: string,
}