import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../questionservice.service";
import { QuestionGen } from "../questionGen";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-topic-dialog",
  templateUrl: "./topic-dialog.component.html",
  styleUrls: ["./topic-dialog.component.css"]
})
export class TopicDialogComponent implements OnInit {
  questionGen;
  categoryId: number;
  topicId: number;
  topicName: string;
  topicImage: string;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {}

  onSubmit() {
    let question = {
      topic: [
        {
          topicId: `${this.topicId}`,
          topicName: `${this.topicName}`,
          topicImage: this.topicImage
        }
      ]
    };
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params.categoryId;
    });
    this.questionService
      .addTopic(this.categoryId, question)
      .subscribe(questionGen => {
        this.questionGen.push(questionGen), alert("Topic added successfully");
      });
  }

  goBack(){
    this.location.back();
  }
}
