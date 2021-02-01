export interface ILoginFormState {
  email: string;
  password: string;
}

export interface ILoginFormProps {
  onSubmit: any;
  onRegistrationClick: any;
  onBackToLoginChoicesClick: any;
}