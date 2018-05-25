import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AllTopicsInCategoryComponent } from "./all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "./questions/questions.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { TopicDialogComponent } from "./topic-dialog/topic-dialog.component";
import { QuestionDialogComponent } from "./question-dialog/question-dialog.component"

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "categories", component: RegistrationComponent },
  { path: 'category-details', component: AllTopicsInCategoryComponent },
  { path: 'add-topic', component: TopicDialogComponent},
  { path: 'topic-details', component: QuestionsComponent },
  { path: 'question-detail', component: QuestionDetailComponent },
  { path: 'add-question', component: QuestionDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, RegistrationComponent];
