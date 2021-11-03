export class User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public password: string,
    public role:Role[]
  ) {
  }
}

export const enum Role {
  Admin = 'admin',
  User = 'user',
}
