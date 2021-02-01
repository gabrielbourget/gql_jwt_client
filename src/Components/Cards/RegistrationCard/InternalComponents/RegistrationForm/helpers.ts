export interface IRegistrationFormState {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IRegistrationFormProps {
  onSubmit: any;
  onLoginClick: any;
}
