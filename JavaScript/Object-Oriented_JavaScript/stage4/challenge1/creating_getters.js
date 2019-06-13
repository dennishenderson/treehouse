class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    get level() {
      if (this.credits > 90) {
        return 'Senior';
      } else if (this.credits >= 61 && this.credits <= 90) {
        return 'Junior';
      } else if (this.credits >= 31 && this.credits < 61) {
        return 'Sophomore';
      } else if (this.credits >= 0 && this.credits < 31) {
        return 'Freshman';
      } else {
        return 'Invalid Entry';
      }
    }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9, 5);

console.log(student.level);
