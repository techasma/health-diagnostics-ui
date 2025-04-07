import { User } from './user.model';  // Assuming you have a User model
import { Test } from './test.model';  // Assuming you have a Test model

export class TestBooking {
  appointmentId: number;
  user: User;
  test: Test;
  appointmentDate: string;  // This can be a string, Date, or LocalDateTime depending on how it's handled
  status: string;
  testType: string;
  version: number;

  constructor(
    appointmentId: number = 0,
    user: User = new User(),
    test: Test = new Test(),
    appointmentDate: string = '',
    status: string = 'Pending',
    testType: string = '',
    version: number = 0
  ) {
    this.appointmentId = appointmentId;
    this.user = user;
    this.test = test;
    this.appointmentDate = appointmentDate;
    this.status = status;
    this.testType = testType;
    this.version = version;
  }
}
