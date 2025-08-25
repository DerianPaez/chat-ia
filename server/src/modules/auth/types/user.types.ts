export type User = {
  id: number;
  email: string;
  password: string;
  created_at: Date;
};

export type CreateUser = {
  email: string;
  password: string;
};
