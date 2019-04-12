import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategory } from './Category/CreateCategory.component'
import { HomeComponent } from './Home/home.component'
import { CreateQuizComponent } from './Quiz/CreateQuiz/CreateQuiz.component'
import { PlayQuizComponent } from './Quiz/PlayQuiz/PlayQuiz.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "createCategory", component: CreateCategory },
  { path: "createQuiz/:categoryId", component: CreateQuizComponent },
  { path: "playQuiz", component: PlayQuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
