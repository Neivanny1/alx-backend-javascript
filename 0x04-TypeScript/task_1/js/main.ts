interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// interface named Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}