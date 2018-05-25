import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../questionservice.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-question-dialog",
  templateUrl: "./question-dialog.component.html",
  styleUrls: ["./question-dialog.component.css"]
})
export class QuestionDialogComponent implements OnInit {
  questionGen;
  categoryId: number;
  topicName: string;
  questionId: number;
  questionLevel: number;
  questionStem: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {}

  addQuestion() {
    let question = {
      questions: [
        {
          questionId: `${this.questionId}`,
          questionLevel: `${this.questionLevel}`,
          questionStem: this.questionStem,
          option1: this.option1,
          option2: this.option2,
          option3: this.option3,
          option4: this.option4,
          correctAnswer: this.correctAnswer
        }
      ]
    };

    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
      console.log(this.categoryId, this.topicName);
    });
    this.questionService
      .addQuestion(this.categoryId, this.topicName, question)
      .subscribe(questionGen => {
        this.questionGen = questionGen;
      });
  }

  goBack() {
    this.location.back();
  }
}
