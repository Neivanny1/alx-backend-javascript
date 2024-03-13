// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework(): string {
      return "Currently working";
  }

  displayName(): string {
      return this.firstName;
  }
}
