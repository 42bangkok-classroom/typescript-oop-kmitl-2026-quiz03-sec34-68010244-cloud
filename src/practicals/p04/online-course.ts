export class OnlineCourse {
  courseName: string
  maxStudents: number
  private enrolledStudents: number
  private isOpen: boolean = true

  constructor(courseName: string, maxStudents: number) {
    this.courseName = courseName
    this.maxStudents = maxStudents
    this.enrolledStudents = 0
  }

  private canEnroll(): boolean {
    return this.enrolledStudents < this.maxStudents
  }

  enroll(): boolean {
    if (this.canEnroll() && this.isOpen) {
      this.enrolledStudents++
      return true
    }
    return false
  }


  getCourseStatus(): string {
    return this.isOpen ? "Open" : "Closed";
  }

  
   getAvailableSeats(): number {
    return this.maxStudents - this.enrolledStudents;
  }

  closeCourse(): void {
    this.isOpen = false;
  }
 
}