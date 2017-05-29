import { Question, Answer } from '.';

export class Fact {
  public id: string | undefined = undefined;
  public name: string | undefined = undefined;
  public question: Question = new Question();
  public answer: Answer = new Answer();
}
