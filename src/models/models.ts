export enum QuestionTypesEnum {
  CHOICE_TYPE = "ChoiceType"
}

export interface IOption {
  display: string | "Yes" | "No";
  isRejection: boolean;
  value: string | boolean;
}

export interface IQuestion {
  options: [IOption, IOption];
  question: string;
  type: QuestionTypesEnum
}

export type FooterNavType = {
  text: string;
  ref: string;
}

export type IQuizForm =  {
  question: string;
  answer: string | boolean;
} & Pick<IOption, "isRejection">