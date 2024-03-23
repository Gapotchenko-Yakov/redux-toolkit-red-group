export interface IUser {
  id: number;
  name: string;
  age: number;
}

export interface IInitialUserState {
  isLoading: Boolean;
  error: Object | null;
  user: IUser;
}
