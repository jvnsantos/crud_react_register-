export type User = {
  id: number;
  name: string;
  email: string | undefined;
  password?: string;
  isLogged?: boolean;
};
