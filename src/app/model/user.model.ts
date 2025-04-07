export class User {
    userId: number;
    userName: string;
    email: string;
  
    constructor(userId: number = 0, userName: string = '', email: string = '') {
      this.userId = userId;
      this.userName = userName;
      this.email = email;
    }
  }
  