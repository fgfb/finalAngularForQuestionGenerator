import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../questionGen";
import { QuestionService } from "../questionservice.service";
import { Router, RouterStateSnapshot } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-question-detail",
  templateUrl: "./question-detail.component.html",
  styleUrls: ["./question-detail.component.css"]
})
export class QuestionDetailComponent implements OnInit {
  categoryId: number;
  topicName: string;
  questionId: number;
  questionGen: QuestionGen;
  question: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
      this.questionId = params.questionId;
    });
    console.log(this.categoryId, this.topicName, this.questionId);
    this.questionService.getQuestionById(this.categoryId, this.topicName, this.questionId)
      .subscribe(questionGen => (this.questionGen = questionGen));
  }

  delete(questionGen: QuestionGen){
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
      this.questionId = params.questionId;
    });
    this.questionService.deleteQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
        .subscribe(() => this.goBack());
  }

  save(questionGen: QuestionGen){
    this.route.queryParams.subscribe(params => {
      this.categoryId= params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService.updateQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
        .subscribe(() => this.goBack);
  }

  goBack(){
    this.location.back();
  }
}
