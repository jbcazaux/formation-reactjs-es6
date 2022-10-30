class Student {
  constructor(
    readonly id: number,
    readonly lastname: string,
    readonly firstname: string,
    readonly grades: ReadonlyArray<number>
  ) {}
}

export default Student
