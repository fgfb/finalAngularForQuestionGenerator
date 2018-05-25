import { Options } from "selenium-webdriver/chrome";

export class QuestionGen {
  constructor() {}
  categoryId: number;
  categoryName: String;
  categoryImage: String;
  topic: [
    {
      topicId: number;
      topicName: String;
      topicImage: String;
      questions: [
        {
          questionId: number;
          questionLevel: number;
          questionStem: String;
          option1: String;
          option2: String;
          option3: String;
          option4: String;
          correctAnswer: String;
          user: [
            {
              userId: number;
              userName: String;
            }
          ];
        }
      ];
    }
  ];
}
