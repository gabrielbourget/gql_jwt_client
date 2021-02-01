export interface IRegistrationFormState {
  name1: string;
  name2: string;
  email: string;
  company?: string;
  password: string;
  passwordConfirmation: string;
}

export interface IRegistrationFormProps {
  onSubmit: any;
  onLoginClick: any;
}
