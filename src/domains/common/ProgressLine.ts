export default interface ProgressLine {
  startDate: Date; // first date of progression
  day: number; // last day of progression ie : (1, 2, 3) - the day is 3
  errors: number[]; // occurred errors during progression
}
