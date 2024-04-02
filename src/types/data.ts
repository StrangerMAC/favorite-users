export interface IUser {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: { small: string | null; large: string | null };
  status: string | null;
  followed: boolean;
}

export interface IUserAccount {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: null;
}

export interface IPagination {
  totalCountOfUsers: number;
  countOfUsersPerPage: number;
  countOfNumbersDisplayedOnPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export type UsersData = {
  users: IUser[];
};
