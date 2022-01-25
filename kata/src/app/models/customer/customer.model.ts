import { Account } from '../account/account.model';
export interface Customer {
  firstname: string;
  lastName: string;
  account: Account;
}
