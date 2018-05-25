import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../questionGen";
import { QuestionService } from "../questionservice.service";
import { Router, RouterStateSnapshot } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  topicName: string;
  categoryId: number;
  questionGen: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService,
    private dialog: MatDialog
  ) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService
      .getQuestions(this.categoryId, this.topicName)
      .subscribe(questionGen => (this.questionGen = questionGen));
  }

  goBack() {
    this.location.back();
  }
}
