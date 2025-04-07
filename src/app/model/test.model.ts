export class Test {
    testId: number;
    testName: string;
    testDescription: string;
  
    constructor(testId: number = 0, testName: string = '', testDescription: string = '') {
      this.testId = testId;
      this.testName = testName;
      this.testDescription = testDescription;
    }
  }
  